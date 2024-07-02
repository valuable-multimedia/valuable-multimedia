"use client";

import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import Image from "next/image";

function AboutUsPage() {
  return (
    <div className="bg-[#fcfcfc] text-black">
      {/* direction banner  */}
      <div className="bg-[#ffffff] gap-x-3 capitalize py-6 flex items-center px-24 text-gray-400">
        <span>home</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>about</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-about px-[10rem] py-16">
        <div className="heading text-center flex flex-col gap-y-6">
          <h3 className="text-themeOrange capitalize text-xl font-semibold">
            we are valuable multimedia
          </h3>
          <h1 className="text-5xl font-medium w-[85%] mx-auto leading-[4rem]">
            For your gut and For your digital growth,{" "}
            <span className="text-themeOrange">
              Choose ORGANIC, Choose VALUABLE MULTIMEDIA!{" "}
            </span>
          </h1>
        </div>

        <div className="banner mt-14">
          <Image
            src={
              "https://res.cloudinary.com/dyvr2mbun/image/upload/v1719936698/home/nykhniqssbvm5guyi4ye.webp"
            }
            alt="about-banner-img"
            height={700}
            width={870}
            className="mx-auto"
          />
        </div>
      </div>

      {/* intro section  */}
      <div className="intro-section-about px-[10rem] py-16 bg-[#ececec]">
        <div className="flex">
          <div className="left w-[30%]">
            <h1 className="capitalize text-5xl">take a dive</h1>
          </div>

          <div className="right w-[70%] flex flex-col gap-y-5">
            <p>
              Keeping it simple, we are a full-service digital marketing agency
              in Ahmedabad specializing in SEO (Search engine optimization).
            </p>
            <p>
              A specialization is an outcome of years of learning, application,
              and improvisation. Maturing with age, we earned the title of being
              the best SEO company in Ahmedabad.
            </p>
            <p>
              Though we breathe SEO, our services extend to every digital
              vertical such as Social media, PPC, App Store Optimization SEO,
              eCommerce SEO, Online reputation management, Content marketing,
              Creative Branding, UI/UX Design, Web Development and eCommerce
              Development.
            </p>
            <p>
              Individual departments at AONE endure the best talents to produce
              well-thought and qualitative work.
            </p>
            <p>
              Together, we promote your business objective with our range of
              services. Tailoring impeccable strategies, we achieve
              transformational results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
