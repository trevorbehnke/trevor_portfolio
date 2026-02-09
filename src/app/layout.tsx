import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { site } from "@/data/site"
import { SkipToContent } from "@/components/skip-link"
import { SiteSpotlight } from "@/components/site-spotlight"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trevorab.com"),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.description,
    url: "https://trevorab.com",
    siteName: site.name,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased selection:bg-brand-500/30 selection:text-brand-900 dark:selection:bg-brand-500/30 dark:selection:text-brand-50`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteSpotlight />
          <SkipToContent />
          <Header />
          <main id="content" className="min-h-screen flex flex-col">
            {children}
            <SpeedInsights />
          </main>
          <Footer />
          <Toaster position="bottom-right" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
