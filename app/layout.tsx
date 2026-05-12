import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingContact } from "@/components/floating-contact";
import { PageTransition } from "@/components/page-transition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "NexBak Solutions | Premium IT Consulting & Software Development",
    template: "%s | NexBak Solutions"
  },
  description:
    "NexBak Solutions helps companies accelerate growth through IT consulting, enterprise software, web platforms, mobile applications, cloud integration, and automation.",
  keywords: [
    "NexBak Solutions",
    "IT consulting",
    "software development",
    "enterprise software",
    "web application development",
    "mobile application development",
    "cloud integration",
    "business automation"
  ],
  openGraph: {
    title: "NexBak Solutions",
    description: "Modern digital solutions for ambitious businesses.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${space.variable} min-h-screen font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
