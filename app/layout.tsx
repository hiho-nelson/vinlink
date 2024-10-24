import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { SpeedInsights } from '@vercel/speed-insights/next';


const helvetica = localFont({
  src: "./fonts/HELVETICA.woff",
  variable: "--font-helvetica",
  weight: "500",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body
        className={`${helvetica.variable} ${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header/>
        {children}
        <Footer />
        <SpeedInsights/>
      </body>
    </html>
  );
}
