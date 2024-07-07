"use client";

import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";
import data from "@/data/facebook_ads_data.json";
import Contact from "@/components/Contact/Contact";
import Testimonials from "@/components/Testimonials/Testimonials";

function FacebookAdsPage() {
  const { keywords, information, faqs } = data;

  return (
    <div className="bg-[#fcfcfc] text-black">
      {/* direction banner  */}
      <div className="bg-[#ffffff] gap-x-3 capitalize py-6 flex items-center px-24 text-gray-400">
        <span>home</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>services</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>facebook ads</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-wd px-24 py-16">
        <div className="flex">
          <div className="left w-[70%] flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-5xl capitalize w-[80%] leading-[3.5rem] font-medium">
                facebook ads <br /> services
              </h1>
              <h3 className="text-themeOrange font-bold text-lg">
                Adapt & innovate because what worked yesterday may work again.
              </h3>
            </div>

            <div className="text-lg">
              <p className="pr-20">
                Unlock the potential of Facebook Ads to reach your target
                audience with precision and creativity. As one of the leading
                Facebook Ads specialists in India, we craft compelling campaigns
                that resonate with users, drive engagement, and boost
                conversions. Our innovative strategies and data-driven approach
                ensure your brand stands out in the crowded social media
                landscape, delivering measurable results and maximizing your ROI
              </p>
            </div>

            <Link href={"/contact-us"} className="mr-auto">
              <button className="bg-themeOrange text-white hover:bg-white hover:border-b hover:border-themeOrange transition-all hover:text-black font-medium px-4 py-3 text-lg capitalize">
                get in touch
              </button>
            </Link>
          </div>

          <div className="right flex justify-center items-center w-[30%]">
            <Image
              src={
                "https://res.cloudinary.com/dyvr2mbun/image/upload/v1720342221/website-development/tm7p5wuvh4kzfp58loig.webp"
              }
              alt="hero-section-image"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>

      {/* keywords section  */}
      <div className="keywords-section px-[10rem] py-10 bg-[#ececec] flex gap-y-6 flex-wrap gap-x-12 justify-center">
        {keywords.map((item, index) => (
          <div
            className="keyword capitalize text-xl border-2 border-themeOrange inline-flex px-8 py-4 rounded-full items-center gap-x-4"
            key={`keyword number ${index + 1}`}
          >
            <span className="text-2xl">
              <FaStarOfLife />
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* process section  */}
      <div className="process-section px-[10rem] py-20 flex flex-col gap-y-16">
        <div className="heading flex">
          <h1 className="text-5xl font-medium capitalize">
            Strategic campaign management
          </h1>
        </div>

        <div className="down flex flex-wrap justify-center gap-x-14 gap-y-8">
          {information.map((item, index) => (
            <div
              className="info-box w-[30%] flex flex-col gap-y-5"
              key={`information no ${index + 1}`}
            >
              <h3 className="text-3xl capitalize">
                {item.title} <br /> {item.title2}{" "}
              </h3>
              <p className="text-justify">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* black banner section  */}
      <div className="black-banner-section px-[10rem] py-10 bg-black text-white flex  justify-between items-center">
        <h1 className="text-5xl font-medium">
          Ready to take the first step, let&apos;s talk.
        </h1>

        <div className="">
          <Link href={"/contact-us"} className="mr-auto">
            <button className="bg-themeOrange text-white hover:bg-black hover:border-b-[2px] hover:border-themeOrange transition-all hover:text-white font-medium px-4 py-3 text-lg capitalize border-b-[2px] border-black">
              send us your brief
            </button>
          </Link>
        </div>
      </div>

      {/* why section  */}
      <div className="keypoints-section bg-[#fff] px-[10rem] py-16">
        <div className="border-l-4 border-themeOrange border-r-4 bg-[#ececec] p-6 flex flex-col gap-y-6">
          <h1 className="text-4xl capitalize leading-[3.3rem] font-medium">
            why facebook ads ?
          </h1>

          <div className="flex flex-col gap-y-4">
            <p>
              Choosing Facebook Ads allows you to tap into a vast and engaged
              audience on the world's largest social media platform. With
              advanced targeting options, you can reach specific demographics,
              interests, and behaviors, ensuring your ads are seen by the most
              relevant users.
            </p>

            <p>
              Facebook Ads offer robust analytics and insights, enabling you to
              track performance and optimize campaigns for better results.
              Additionally, the cost-effective nature of Facebook Ads allows
              businesses of all sizes to achieve a high ROI, making it an
              essential tool for any digital marketing strategy
            </p>
          </div>
        </div>
      </div>

      {/* testimonials section  */}
      <Testimonials />

      {/* faqs section  */}
      <div className="faqs-section px-[10rem] py-10">
        <div className="faqs">
          <div className="lg:px-5 lg:w-[80%] mx-auto">
            <div className="mx-auto mt-8 grid gap-y-4">
              {faqs?.map((item, index) => (
                <div
                  className="border-b-[2px] px-3 border-themeOrange bg-white"
                  key={index}
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between">
                      <div className="flex items-center gap-x-6">
                        <div className="h-full group-open:text-themeOrange font-bold">
                          {index + 1}
                        </div>
                        <div className="group-open:text-themeOrange py-5">
                          {" "}
                          {item.title}
                        </div>
                      </div>
                      <div className="transition group-open:rotate-180 group-open:text-themeOrange">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </div>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 pb-5 text-neutral-600">
                      {item.content}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* contact section  */}
      <div className="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default FacebookAdsPage;
