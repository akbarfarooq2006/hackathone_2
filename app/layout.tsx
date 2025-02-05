import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google'
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import { LikeProvider } from "./context/LikeContext";

const jarka = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--fontPlusJakartaSans',
  weight: [ '200', '300', '400', '500', '600', '700', '800', ]
})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Morent",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      {/* <link rel="shortcut icon" href="/favicon/ic.png" type="image/x-icon" /> */}
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          ${jarka.variable}
          `}
      >
        <LikeProvider>
        <Header2/>
        {children}
        <Footer/>
        </LikeProvider>
      </body>
    </html>
  );
}
