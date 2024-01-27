import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Headers/header";
import ThemeLayout from "@/components/Themebtn/themeLayout";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disney+ 2.0",
  description: "Disney+ is a streaming service where you can watch movies, series, and originals from Disney, Pixar, Marvel, Star Wars, Nat Geo, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="./assets/favicon.ico" />
        </head>

        <body className={`${inter.className} dark:bg-[#1A1C29] transition duration-500`}>
          <ThemeLayout>
            <Header />
            {children}
          </ThemeLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
