import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'
import { getSetting } from './settings'

interface EmailData {
  to: string
  subject: string
  html: string
  text?: string
}

interface FormSubmissionData {
  formName: string
  data: Record<string, unknown>
  email?: string
  phone?: string
  source?: string
  submittedAt: string
}

// Create transporter using database settings
const createTransporter = async () => {
  try {
    // Get SMTP settings from database
    const smtpHost = await getSetting('email.smtpHost')
    const smtpPort = await getSetting('email.smtpPort')
    const smtpUser = await getSetting('email.smtpUser')
    const smtpPassword = await getSetting('email.smtpPassword')
    
    const smtpConfig: SMTPTransport.Options = {
      host: (smtpHost as string) || process.env.SMTP_HOST || 'localhost',
      port: parseInt((smtpPort as string) || process.env.SMTP_PORT || '587'),
      secure: ((smtpPort as string) || process.env.SMTP_PORT) === '465',
      auth: {
        user: (smtpUser as string) || process.env.SMTP_USER || '',
        pass: (smtpPassword as string) || process.env.SMTP_PASSWORD || '',
      },
    }
    
    return nodemailer.createTransport(smtpConfig)
  } catch (error) {
    console.error('Error creating transporter with database settings, falling back to env:', error)
    // Fallback to environment variables
    const fallbackConfig: SMTPTransport.Options = {
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASSWORD || '',
      },
    }
    
    return nodemailer.createTransport(fallbackConfig)
  }
}

// Send email function
export async function sendEmail({ to, subject, html, text }: EmailData) {
  try {
    const transporter = await createTransporter()
    
    // Get from settings from database
    const smtpFromName = await getSetting('email.smtpFromName')
    const smtpFromEmail = await getSetting('email.smtpFromEmail')
    
    const mailOptions = {
      from: `"${(smtpFromName as string) || process.env.SMTP_FROM_NAME || 'ElectriSafe Power Solutions'}" <${(smtpFromEmail as string) || process.env.SMTP_FROM_EMAIL}>`,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Generate HTML template for form submission notification
export function generateFormSubmissionHTML(data: FormSubmissionData): string {
  const { formName, data: formData, email, phone, source, submittedAt } = data
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Form Submission - ${formName}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2d5296, #4a6bb3); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }
        .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #2d5296; }
        .field-name { font-weight: bold; color: #2d5296; margin-bottom: 5px; }
        .field-value { color: #555; word-break: break-word; }
        .meta-info { background: #e2e8f0; padding: 15px; border-radius: 0 0 8px 8px; font-size: 0.9em; color: #666; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .form-type { background: #f99f1b; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8em; display: inline-block; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">ElectriSafe Power Solutions</div>
        <h2>New Form Submission</h2>
        <span class="form-type">${formName.toUpperCase()}</span>
      </div>
      
      <div class="content">
        <h3>Submission Details:</h3>
        
        ${Object.entries(formData).map(([key, value]) => `
          <div class="field">
            <div class="field-name">${formatFieldName(key)}:</div>
            <div class="field-value">${formatFieldValue(key, value)}</div>
          </div>
        `).join('')}
      </div>
      
      <div class="meta-info">
        <strong>Submission Information:</strong><br>
        <strong>Date:</strong> ${submittedAt}<br>
        ${email ? `<strong>Email:</strong> ${email}<br>` : ''}
        ${phone ? `<strong>Phone:</strong> ${phone}<br>` : ''}
        ${source ? `<strong>Source:</strong> ${source}<br>` : ''}
        <strong>Form Type:</strong> ${formName}
      </div>
    </body>
    </html>
  `
}

// Generate auto-reply HTML template
export function generateAutoReplyHTML(formName: string, userName?: string): string {
  const name = userName || 'there'
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting ElectriSafe Power Solutions</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2d5296, #4a6bb3); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: white; padding: 30px; border: 1px solid #e2e8f0; }
        .footer { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; font-size: 0.9em; color: #666; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .highlight { color: #f99f1b; font-weight: bold; }
        .contact-info { background: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">ElectriSafe Power Solutions</div>
        <h2>Thank You for Your Submission!</h2>
      </div>
      
      <div class="content">
        <h3>Hi ${name},</h3>
        
        <p>Thank you for reaching out to ElectriSafe Power Solutions! We've received your <strong>${formName}</strong> submission and appreciate your interest in our electrical services.</p>
        
        <p>Our team will review your message and get back to you within <span class="highlight">24-48 hours</span> during business days.</p>
        
        <div class="contact-info">
          <h4>In the meantime, here are some ways to connect with us:</h4>
          <p>
            📧 <strong>Email:</strong> info@electrisafe.in<br>
            📞 <strong>Phone:</strong> +91 95655 55581<br>
            🌐 <strong>Website:</strong> <a href="https://electrisafe.in">www.electrisafe.in</a><br>
            📍 <strong>Address:</strong> N-304, Ashiyana Sector – N, Lucknow – 226012, India
          </p>
        </div>
        
        <p>We're excited to assist you with your electrical needs and look forward to speaking with you soon!</p>
        
        <p>Best regards,<br>
        <strong>The ElectriSafe Team</strong></p>
      </div>
      
      <div class="footer">
        <p>This is an automated response. Please do not reply to this email.</p>
        <p>&copy; ${new Date().getFullYear()} ElectriSafe Power Solutions. All rights reserved.</p>
      </div>
    </body>
    </html>
  `
}

// Helper functions
function formatFieldName(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace(/id$/i, 'ID')
    .replace(/url$/i, 'URL')
    .replace(/cv$/i, 'CV')
}

function formatFieldValue(key: string, value: unknown): string {
  if (value === null || value === undefined || value === '') {
    return '<em>Not provided</em>'
  }
  
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No'
  }
  
  if (typeof value === 'object') {
    return `<pre>${JSON.stringify(value, null, 2)}</pre>`
  }
  
  const stringValue = String(value)
  
  // Format URLs as links
  if (key.toLowerCase().includes('url') && stringValue.startsWith('http')) {
    return `<a href="${stringValue}" target="_blank">${stringValue}</a>`
  }
  
  // Format emails as mailto links
  if (key.toLowerCase().includes('email') && stringValue.includes('@')) {
    return `<a href="mailto:${stringValue}">${stringValue}</a>`
  }
  
  // Format phones as tel links
  if (key.toLowerCase().includes('phone')) {
    return `<a href="tel:${stringValue}">${stringValue}</a>`
  }
  
  // Format long text in paragraphs
  if (stringValue.length > 100) {
    return `<div style="white-space: pre-wrap; max-height: 200px; overflow-y: auto;">${stringValue}</div>`
  }
  
  return stringValue
}

// Send form submission notification using database settings
export async function sendFormSubmissionNotification(formData: FormSubmissionData) {
  try {
    // Get admin emails from database
    const adminEmailsFromDb = await getSetting('email.adminEmails')
    
    let emailList: string[] = []
    
    if (Array.isArray(adminEmailsFromDb)) {
      emailList = adminEmailsFromDb as string[]
    } else if (typeof adminEmailsFromDb === 'string') {
      emailList = [adminEmailsFromDb]
    } else if (process.env.ADMIN_NOTIFICATION_EMAILS) {
      emailList = process.env.ADMIN_NOTIFICATION_EMAILS.split(',').map((email: string) => email.trim())
    } else {
      emailList = ['info@electrisafe.in']
    }
    
    const subject = `New ${formData.formName} Submission - ElectriSafe`
    const html = generateFormSubmissionHTML(formData)
    
    const results = []
    
    for (const email of emailList) {
      const result = await sendEmail({
        to: email,
        subject,
        html
      })
      results.push({ email, ...result })
    }
    
    return results
  } catch (error) {
    console.error('Error sending form submission notification:', error)
    throw error
  }
}

// Send auto-reply to user
export async function sendAutoReply(formData: FormSubmissionData) {
  if (!formData.email) {
    return { success: false, error: 'No email provided for auto-reply' }
  }
  
  // Extract user name from form data
  const userName = (formData.data.firstName as string) || 
                  (formData.data.name as string) || 
                  formData.email.split('@')[0]
  
  const subject = `Thank you for contacting ElectriSafe Power Solutions`
  const html = generateAutoReplyHTML(formData.formName, userName)
  
  return await sendEmail({
    to: formData.email,
    subject,
    html
  })
}

// Send booking confirmation to customer
export async function sendBookingConfirmation({
  customerName,
  email,
  serviceType,
  preferredDate,
  preferredTime,
  address,
  bookingId,
}: {
  customerName: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  bookingId: string;
}) {
  const subject = 'Service Booking Confirmation - ElectriSafe Power Solutions';
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
        .container { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0080ff, #0a1f44); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; }
        .header p { margin: 10px 0 0; opacity: 0.9; }
        .content { padding: 30px 20px; }
        .booking-details { background: #f8fafc; border-left: 4px solid #0080ff; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .detail-row { margin: 12px 0; display: flex; }
        .detail-label { font-weight: bold; color: #0a1f44; min-width: 140px; }
        .detail-value { color: #333; }
        .info-box { background: #e6f3ff; border: 1px solid #0080ff; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; }
        .contact-info { margin: 15px 0; }
        .contact-info a { color: #0080ff; text-decoration: none; font-weight: bold; }
        .booking-id { background: #0a1f44; color: white; padding: 8px 12px; border-radius: 6px; display: inline-block; font-family: monospace; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>⚡ Booking Confirmed!</h1>
          <p>Thank you for choosing ElectriSafe Power Solutions</p>
        </div>
        
        <div class="content">
          <p>Dear <strong>${customerName}</strong>,</p>
          
          <p>We have received your service booking request. Our team will contact you shortly to confirm the appointment details.</p>
          
          <div class="booking-details">
            <h3 style="margin-top: 0; color: #0a1f44;">Booking Details</h3>
            
            <div class="detail-row">
              <span class="detail-label">Booking ID:</span>
              <span class="booking-id">${bookingId.slice(0, 12).toUpperCase()}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Service Type:</span>
              <span class="detail-value">${serviceType}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Preferred Date:</span>
              <span class="detail-value">${new Date(preferredDate).toLocaleDateString('en-IN', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Preferred Time:</span>
              <span class="detail-value">${preferredTime}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Service Location:</span>
              <span class="detail-value">${address}</span>
            </div>
          </div>
          
          <div class="info-box">
            <strong>📞 What happens next?</strong>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Our team will call you within 2 hours to confirm your appointment</li>
              <li>We'll discuss any specific requirements you may have</li>
              <li>Our certified electrician will arrive at the scheduled time</li>
              <li>All work comes with a 1-year warranty</li>
            </ul>
          </div>
          
          <p style="margin-top: 20px;">If you have any questions or need to make changes to your booking, please don't hesitate to contact us.</p>
        </div>
        
        <div class="footer">
          <div class="contact-info">
            <strong>Contact Us:</strong><br>
            📞 Phone: <a href="tel:+919565555581">+91 95655 55581</a><br>
            📧 Email: <a href="mailto:info@electrisafe.in">info@electrisafe.in</a><br>
            💬 WhatsApp: <a href="https://wa.me/919565555581">+91 95655 55581</a>
          </div>
          
          <p style="margin-top: 15px; font-size: 12px; color: #666;">
            ElectriSafe Power Solutions - Safe Power for Every Space<br>
            Lucknow, Uttar Pradesh
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  return await sendEmail({ to: email, subject, html });
}

// Send booking notification to admin
export async function sendBookingNotificationToAdmin({
  customerName,
  email,
  phone,
  serviceType,
  preferredDate,
  preferredTime,
  address,
  pincode,
  message,
  urgency,
  bookingId,
}: {
  customerName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  pincode: string;
  message: string;
  urgency: string;
  bookingId: string;
}) {
  const urgencyColors: Record<string, { bg: string; text: string }> = {
    emergency: { bg: '#fee2e2', text: '#dc2626' },
    urgent: { bg: '#fed7aa', text: '#ea580c' },
    normal: { bg: '#dbeafe', text: '#2563eb' },
    scheduled: { bg: '#d1fae5', text: '#059669' },
  };

  const urgencyColor = urgencyColors[urgency] || urgencyColors.normal;

  const subject = `🔔 New Service Booking - ${urgency.toUpperCase()} - ${serviceType}`;
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Booking Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
        .container { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0a1f44, #0080ff); color: white; padding: 25px 20px; }
        .header h1 { margin: 0; font-size: 24px; }
        .urgency-badge { display: inline-block; padding: 6px 12px; border-radius: 6px; font-weight: bold; margin-top: 10px; background: ${urgencyColor.bg}; color: ${urgencyColor.text}; }
        .content { padding: 25px 20px; }
        .section { margin: 20px 0; padding: 20px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #0080ff; }
        .section h3 { margin-top: 0; color: #0a1f44; }
        .detail-grid { display: grid; gap: 12px; }
        .detail-row { display: flex; border-bottom: 1px solid #e2e8f0; padding: 8px 0; }
        .detail-row:last-child { border-bottom: none; }
        .detail-label { font-weight: bold; color: #0a1f44; min-width: 160px; }
        .detail-value { color: #333; flex: 1; }
        .message-box { background: white; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .action-buttons { margin: 20px 0; text-align: center; }
        .btn { display: inline-block; padding: 12px 24px; margin: 5px; border-radius: 8px; text-decoration: none; font-weight: bold; }
        .btn-primary { background: #0080ff; color: white; }
        .btn-success { background: #059669; color: white; }
        .footer { background: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>⚡ New Service Booking Request</h1>
          <span class="urgency-badge">URGENCY: ${urgency.toUpperCase()}</span>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>Customer Information</h3>
            <div class="detail-grid">
              <div class="detail-row">
                <span class="detail-label">Customer Name:</span>
                <span class="detail-value"><strong>${customerName}</strong></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone:</span>
                <span class="detail-value"><a href="tel:${phone}" style="color: #0080ff;">${phone}</a></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email:</span>
                <span class="detail-value"><a href="mailto:${email}" style="color: #0080ff;">${email}</a></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Booking ID:</span>
                <span class="detail-value"><code>${bookingId}</code></span>
              </div>
            </div>
          </div>
          
          <div class="section">
            <h3>Service Details</h3>
            <div class="detail-grid">
              <div class="detail-row">
                <span class="detail-label">Service Type:</span>
                <span class="detail-value"><strong>${serviceType}</strong></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Preferred Date:</span>
                <span class="detail-value">${new Date(preferredDate).toLocaleDateString('en-IN', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Preferred Time:</span>
                <span class="detail-value">${preferredTime}</span>
              </div>
            </div>
          </div>
          
          <div class="section">
            <h3>Service Location</h3>
            <div class="detail-grid">
              <div class="detail-row">
                <span class="detail-label">Address:</span>
                <span class="detail-value">${address}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Pincode:</span>
                <span class="detail-value">${pincode}</span>
              </div>
            </div>
          </div>
          
          ${message ? `
          <div class="section">
            <h3>Customer Message</h3>
            <div class="message-box">
              ${message}
            </div>
          </div>
          ` : ''}
          
          <div class="action-buttons">
            <a href="tel:${phone}" class="btn btn-success">📞 Call Customer</a>
            <a href="https://wa.me/91${phone}" class="btn btn-primary">💬 WhatsApp</a>
          </div>
          
          <p style="text-align: center; color: #666; margin-top: 20px;">
            <strong>Action Required:</strong> Please contact the customer within 2 hours to confirm the appointment.
          </p>
        </div>
        
        <div class="footer">
          ElectriSafe Power Solutions - Admin Panel<br>
          This is an automated notification. Please do not reply to this email.
        </div>
      </div>
    </body>
    </html>
  `;

  // Send to admin email
  return await sendEmail({ 
    to: process.env.ADMIN_EMAIL || 'admin@electrisafe.in', 
    subject, 
    html 
  });
}
