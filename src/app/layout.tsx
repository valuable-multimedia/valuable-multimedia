import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

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
        <div className="sticker fixed top-[50%] -right-[4.5rem] rounded-lg py-3 text-white bg-themeOrange rotate-90">
          <Link href={"/contact-us"} className="text-lg px-4">
          FREE Digital Audit
          </Link>
        </div>
        {children}
        <div className="sticker fixed bottom-1 right-1 text-white rounded-full p-4 text-3xl z-[100] bg-[#00d25c] hover:scale-[1.05]">
          <Link href={`https://wa.me/${"+919016850552"}?text=${"Hii"}`}>
            <IoLogoWhatsapp />
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
