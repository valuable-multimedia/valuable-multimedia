"use client";

import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const sora = Sora({ subsets: ["latin"] });

const routeMetadata: { [key: string]: { title: string; description: string } } =
  {
    "/about-us": {
      title: "Choose Valuable Multimedia for digital marketing solutions",
      description:
        "If you're looking for a digital marketing partner that drives results and maximizes your ROI, Valuable Multimedia is your go-to agency.",
    },
    "/services/facebook-ads": {
      title: "Facebook Ads Services | Valuable Multimedia",
      description:
        "Boost your ROI with Facebook Ads services by Valuable Multimedia. Expert targeting, optimized campaigns & measurable results to grow your business. Get started now!",
    },
    "/services/instagram-ads": {
      title: "Instagram Ads Services | Valuable Multimedia",
      description:
        "Boost your brand with Instagram Ads! Valuable Multimedia offers expert Instagram ad services to drive engagement, leads, and sales. Maximize your ROI today!",
    },
    "/services/google-ads": {
      title: "Google Ads Services | Valuable Multimedia",
      description:
        "Boost your ROI with expert Google Ads services by Valuable Multimedia. Drive targeted traffic, increase leads & grow your business with proven PPC strategies!",
    },
    "/services/social-media-marketing": {
      title: "Social Media Marketing Services | Valuable Multimedia",
      description:
        "Boost your brand's online presence with Valuable Multimedia's expert Social Media Marketing Services. Drive engagement, leads & growth with proven strategies!",
    },
    "/services/seo": {
      title: "Search engine optimization (SEO) services | Valuable Multimedia",
      description:
        "Boost your online presence with expert SEO services from Valuable Multimedia. Drive traffic, improve rankings, and achieve measurable results. Start growing today!",
    },
    "/services/ui-ux-designing": {
      title: "UI/UX Designing Services | Valuable Multimedia",
      description:
        "Boost your online presence with top-notch UI/UX designing services by Valuable Multimedia. Create user-friendly designs that drive engagement and conversions.",
    },
    "/services/website-development": {
      title: "Website Development Services | Valuable Multimedia",
      description:
        "Get professional website development services at Valuable Multimedia. We create fast, responsive, and SEO-friendly websites to boost your online presence and growth.",
    },
    "/contact-us": {
      title:
        "Request for Proposal | Digital Marketing with Valuable Multimedia",
      description:
        "Boost your business growth with expert digital marketing services from Valuable Multimedia. Get tailored solutions for measurable results & ROI-driven campaigns.",
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  const pathname = usePathname();
  useEffect(() => {
    const metadata = routeMetadata[pathname];
    if (metadata) {
      // Update the title
      document.title = metadata.title;

      // Update the meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        // Create the meta description tag if it doesn't exist
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", metadata.description);
    } else {
      // Default metadata
      document.title = "Valuable Multimedia";
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Welcome to Valuable Multimedia, your partner for exceptional digital marketing solutions."
        );
      }
    }
  }, [pathname]);

  useEffect(() => {
    const baseUrl = "https://www.valuablemultimedia.com";
    const canonicalUrl = `${baseUrl}${pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');

    if (!linkCanonical) {
      // Create the canonical link tag if it doesn't exist
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);
  }, [pathname]);

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
        {/* <link
          data-head="tezjs"
          rel="canonical"
          href={"https://www.valuablemultimedia.com"}
        /> */}
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
