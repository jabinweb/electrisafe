import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MobileTabBar from "@/components/layout/MobileTabBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from 'sonner';
import { Providers } from '@/components/providers';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#0080ff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://electrisafe.in'),
  title: {
    default: "ElectriSafe Power Solutions | Professional Electrician in Lucknow",
    template: "%s | ElectriSafe Power Solutions"
  },
  description: "ElectriSafe Power Solutions provides safe, reliable electrical services for homes, offices, and commercial spaces in Lucknow. Expert electricians, transparent pricing, 24/7 emergency service.",
  keywords: "electrician Lucknow, electrical services Lucknow, home electrician near me, commercial electrical contractor, electrical wiring, power backup, MCB installation, inverter service, emergency electrician, residential electrician, industrial electrician",
  authors: [{ name: "ElectriSafe Power Solutions" }],
  creator: "ElectriSafe Power Solutions",
  publisher: "ElectriSafe Power Solutions",
  openGraph: {
    title: "ElectriSafe Power Solutions | Professional Electrician in Lucknow",
    description: "Safe, reliable electrical services for homes and businesses in Lucknow. Expert electricians, quality work, transparent pricing.",
    url: 'https://electrisafe.in',
    siteName: 'ElectriSafe Power Solutions',
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: 'https://electrisafe.in/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'ElectriSafe Power Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElectriSafe Power Solutions | Professional Electrician in Lucknow',
    description: 'Safe, reliable electrical services for homes and businesses in Lucknow.',
    images: ['https://electrisafe.in/icons/icon-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://electrisafe.in',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://electrisafe.in",
    "name": "ElectriSafe Power Solutions",
    "description": "Professional electrical services for residential, commercial, and industrial needs in Lucknow",
    "url": "https://electrisafe.in",
    "telephone": "+91-95655-55581",
    "email": "info@electrisafe.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.8467",
      "longitude": "80.9462"
    },
    "areaServed": {
      "@type": "City",
      "name": "Lucknow"
    },
    "serviceType": [
      "Electrical Installation",
      "Electrical Repair",
      "Commercial Electrical Services",
      "Residential Electrical Services",
      "Emergency Electrical Services",
      "Electrical Safety Inspection",
      "Wiring and Rewiring"
    ],
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 00:00-23:59",
    "paymentAccepted": ["Cash", "UPI", "Bank Transfer"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Emergency Electrical Service"
          }
        }
      ]
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0080ff" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <MobileTabBar />
          <WhatsAppButton />
          <Toaster 
            position="top-right" 
            richColors 
            closeButton
            toastOptions={{
              duration: 4000,
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
