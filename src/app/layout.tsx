import './globals.css';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { ThemeWrapper } from '@/app/ui/theme-wrapper';
import { Navbar } from '@/app/ui/layout/navbar';
import { NavbarMobile, NavbarProvider } from '@/app/ui/layout/navbar-mobile';
import { Footer } from '@/app/ui/layout/footer';
import { Toaster } from '@/app/ui/toast/toaster';

export const metadata: Metadata = {
  title: {
    default: 'Franz',
    template: '%s | Franz',
  },
  description:
    "Get to know me, Frantanius S, through this website! I'm a passionate frontend developer and I've poured my skills and creativity into building this site with Next.js and Tailwind CSS. Explore my interactive projects, clean portfolio, and a glimpse into my technical expertise. If you're seeking a talented developer for your next project or simply looking for inspiration, feel free to get in touch!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-mono`}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ThemeWrapper
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <NavbarProvider>
              <Navbar />
              <NavbarMobile />
            </NavbarProvider>
            {children}
            <Footer />
          </main>
          <Toaster />
        </ThemeWrapper>
        {process.env.NODE_ENV === 'production' && (
          <>
            <SpeedInsights />
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
}
