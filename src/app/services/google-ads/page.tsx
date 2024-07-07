"use client";

import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";
import data from "@/data/google_ads_data.json";
import Contact from "@/components/Contact/Contact";
import Testimonials from "@/components/Testimonials/Testimonials";

function GoogleAdsPage() {
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
        <span>google ads</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-wd px-24 py-16">
        <div className="flex">
          <div className="left w-[70%] flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-5xl capitalize w-[80%] leading-[3.5rem] font-medium">
                google ads services
              </h1>
              <h3 className="text-themeOrange font-bold text-lg">
                Improve ranking, increase site-traffic, gain customers, and
                grow.
              </h3>
            </div>

            <div className="text-lg">
              <p className="pr-20">
                At VALUABLE MULTIMEDIA Service, your paid campaigns are
                carefully managed and monitored by PPC experts with years of
                experience. PPC does not work in isolation. Hence, as a holistic
                PPC company in India, we integrate diverse brilliant minds of
                writers, data scientists, designers, and digital marketing
                strategists who work in synergy to bring the best results. Our
                team makes sure you get the maximum return on your ad spends.
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
                "https://res.cloudinary.com/dyvr2mbun/image/upload/v1720342813/website-development/bo57r9sa6csgaxhqvu6q.webp"
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
        <div className="heading">
          <h1 className="text-5xl font-medium">
            <span>How we do </span>
            <span className="text-themeOrange"> PPC</span>?
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
            why PPC ?
          </h1>

          <div className="flex flex-col gap-y-4">
            <p>Achieving results faster is only possible with PPC.</p>
            <p>
              Organic methods such as SEO give sustainable growth after
              consistent efforts over a span of time. But when the purpose is
              brand awareness, new product launch, boost sales, etc.
            </p>
            <p>PPC can help you reach your end goal faster than organic.</p>
            <p>
              With PPC, you get the facility to reach your intended audience at
              the predefined time, location, device, and more. PPC allows you to
              target your audience based on their geo-location, interest,
              behaviors, and other demographics. You can even retarget your
              website visitors with the help of PPC campaigns.
            </p>
            <p>
              As a trusted top PPC management company in India, we conduct
              comprehensive PPC practices in a sequential manner.
            </p>
          </div>
        </div>
      </div>

      {/* testimonials section */}
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

export default GoogleAdsPage;
