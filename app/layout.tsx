import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import FooterSection from '@/components/FooterSection';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Navbar from '@/components/Navbar';
import { ModalProvider } from '@/contexts/ModalContext';
import { PortfolioDataProvider } from '@/contexts/PortfolioDataContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mohit Singh - Full Stack Developer',
  description: 'Portfolio of Mohit Singh, a Full Stack Developer specializing in React, React Native, TypeScript, and AWS',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PortfolioDataProvider>
          <ModalProvider>
            <Navbar />
            {children}
            <FooterSection />
            <ScrollToTopButton />
          </ModalProvider>
        </PortfolioDataProvider>
      </body>
    </html>
  );
}
