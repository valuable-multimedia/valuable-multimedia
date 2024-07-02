"use client";

import React from "react";
import Image from "next/image";
import { PiGreaterThan } from "react-icons/pi";
import aInformations from "@/data/aboutInformation";

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

      {/* teams section  */}
      <div className="teams-section-about px-[12rem] py-16">
        teams section pending beacuse of images...
      </div>

      {/* show section */}
      <div className="show-section-about px-[10rem] py-16 flex flex-col gap-y-14">
        <div className="heading flex flex-col gap-y-4">
          <h3 className="text-themeOrange text-xl font-semibold">
            This characteristic sets us apart as
          </h3>
          <h1 className="text-5xl">
            an exceptional partner in driving growth.
          </h1>
        </div>

        <div className="dowm flex gap-x-4">
          {aInformations.map((item, index) => (
            <div
              className="show-box w-[20%] flex flex-col gap-y-6"
              key={`show-box-${index + 1}`}
            >
              <div className="text-5xl text-themeOrange">{item.icon}</div>
              <p className="text-gray-500 text-lg">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
