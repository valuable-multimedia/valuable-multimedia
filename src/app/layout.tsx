import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { Toaster } from "react-hot-toast";

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
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config','${GTM_ID}',{
               page_path: window.location.pathname
               });
              `,
          }}
        />

        <meta
          name="google-site-verification"
          content="YG3OEzLExFEl9kzEIZ_10yjgjxo83Gh4oLrsM5P8OrI"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          data-head="tezjs"
          rel="canonical"
          href={"https://www.valuablemultimedia.com"}
        />
      </head>
      <body className={sora.className}>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WK3JZJJP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}
        <Toaster />
        <Navbar />
        <div className="sticker fixed top-[50%] -right-[4.5rem] rounded-lg py-3 text-white bg-themeOrange rotate-90">
          <Link href={"/contact-us"} className="text-lg px-4">
            FREE Digital Audit
          </Link>
        </div>
        {children}
        <div className="sticker fixed bottom-4 right-4 text-white rounded-full p-4 text-3xl z-[100] bg-[#00d25c] hover:scale-[1.05] shadow-xl">
          <Link href={`https://wa.me/${"+919016850552"}?text=${"Hii"}`}>
            <BsWhatsapp />
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
