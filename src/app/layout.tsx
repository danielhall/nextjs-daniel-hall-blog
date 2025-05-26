import "./globals.css";
import ClientLayout from "@/components/clientLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Daniel Hall',
    default: 'Daniel Hall | Solutions Architect & Full Stack Developer'
  },
  description: 'Solutions Architect with 13+ years of experience in .NET, Next.js, and enterprise-scale systems. Specialist in cloud-native development, microservices, and headless commerce.',
  keywords: [
    'Solutions Architect',
    '.NET Development',
    'Next.js',
    'React',
    'Azure',
    'BigCommerce',
    'Storyblok',
    'Enterprise Architecture',
    'Microservices',
    'Cloud Native'
  ],
  authors: [{ name: 'Daniel Hall' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://danieljh.uk',
    siteName: 'Daniel Hall',
    title: 'Daniel Hall | Solutions Architect & Full Stack Developer',
    description: 'Solutions Architect specialising in .NET, Next.js, and enterprise-scale systems.',
    images: [
      {
        url: '/assets/Daniel.jpeg',
        width: 1200,
        height: 630,
        alt: 'Daniel Hall'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@daniel__jh',
    creator: '@daniel__jh',
    images: ['/assets/Daniel.jpeg']
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png' }
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192'
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512'
      }
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}


