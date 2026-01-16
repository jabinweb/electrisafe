import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendBookingConfirmation, sendBookingNotificationToAdmin } from '@/lib/email';
import { auth } from '@/auth';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Validate required fields
    const { customerName, email, phone, serviceType, preferredDate, preferredTime, address, pincode } = data;
    
    if (!customerName || !email || !phone || !serviceType || !preferredDate || !preferredTime || !address || !pincode) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate phone number format
    if (!/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number. Please enter a 10-digit number.' },
        { status: 400 }
      );
    }

    // Validate pincode format
    if (!/^[0-9]{6}$/.test(pincode)) {
      return NextResponse.json(
        { error: 'Invalid pincode. Please enter a 6-digit pincode.' },
        { status: 400 }
      );
    }

    // Create form response for booking
    const formResponse = await prisma.formResponse.create({
      data: {
        formName: 'Service Booking',
        data: {
          customerName,
          email,
          phone,
          serviceType,
          preferredDate,
          preferredTime,
          address,
          pincode,
          message: data.message || '',
          urgency: data.urgency || 'normal',
        },
        email,
        phone,
        status: 'pending',
        tags: `booking,${data.urgency || 'normal'}`,
        source: 'website',
      },
    });

    // Send confirmation email to customer
    try {
      await sendBookingConfirmation({
        customerName,
        email,
        serviceType,
        preferredDate,
        preferredTime,
        address,
        bookingId: formResponse.id,
      });
    } catch (emailError) {
      console.error('Error sending customer confirmation email:', emailError);
      // Don't fail the request if email fails
    }

    // Send notification to admin
    try {
      await sendBookingNotificationToAdmin({
        customerName,
        email,
        phone,
        serviceType,
        preferredDate,
        preferredTime,
        address,
        pincode,
        message: data.message || '',
        urgency: data.urgency || 'normal',
        bookingId: formResponse.id,
      });
    } catch (emailError) {
      console.error('Error sending admin notification email:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Booking request submitted successfully',
      bookingId: formResponse.id,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to submit booking request' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // Check if user is authenticated and is admin
    const session = await auth();
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const urgency = searchParams.get('urgency');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = (page - 1) * limit;

    // Build filter for bookings (formName = 'Service Booking')
    const where: {
      formName: string;
      status?: string;
      tags?: { contains: string };
    } = {
      formName: 'Service Booking',
    };

    if (status) {
      where.status = status;
    }

    if (urgency) {
      where.tags = { contains: urgency };
    }

    const [bookings, total] = await Promise.all([
      prisma.formResponse.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.formResponse.count({ where }),
    ]);

    return NextResponse.json({
      bookings,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
