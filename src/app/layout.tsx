import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valuable Multimedia",
  description: "A Digital Marketing agency in Ahmedabad, Gujarat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
