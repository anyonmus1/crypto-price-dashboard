import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DarkModeToggle from "../components/DarkModeToggle"; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Crypto Price Dashboard",
  description: "Real-time prices of the top 10 cryptocurrencies by market cap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        <DarkModeToggle />
        {children}
      </body>
    </html>
  );
}
