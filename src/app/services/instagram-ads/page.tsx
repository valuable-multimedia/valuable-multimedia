"use client";

import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";
import data from "@/data/instagram_ads_data.json";
import Contact from "@/components/Contact/Contact";
import Testimonials from "@/components/Testimonials/Testimonials";

function InstagramAdsPage() {
  const { keywords, information, faqs } = data;

  return (
    <div className="bg-[#fcfcfc] text-black">
      {/* direction banner  */}
      <div className="bg-[#ffffff] gap-x-3 capitalize py-6 flex items-center px-5 lg:px-24 text-gray-400">
        <span>home</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>services</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>instagram ads</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-wd px-5 lg:px-24 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-y-6">
          <div className="left lg:w-[70%] flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-4xl lg:text-5xl capitalize lg:w-[80%] lg:leading-[3.5rem] font-medium hidden lg:block">
                instagram ads <br /> services
              </h1>
              <h1 className="text-4xl lg:text-5xl capitalize lg:w-[80%] lg:leading-[3.5rem] font-medium lg:hidden block">
                instagram ads services
              </h1>
              <h3 className="text-themeOrange font-bold text-lg">
                Adapt & innovate because what worked yesterday may work again.
              </h3>
            </div>

            <div className="text-lg">
              <p className="lg:pr-20">
                Tap into the power of Instagram Ads to connect with your
                audience in a visually compelling way. As seasoned Instagram Ads
                experts, we specialize in creating engaging campaigns that
                captivate users, foster meaningful interactions, and drive
                conversions. Our strategic approach combines creative
                storytelling with precise targeting, ensuring your brand stands
                out amidst the Instagram community. From increasing brand
                visibility to driving sales, we leverage data-driven insights to
                optimize every campaign, delivering impactful results and
                maximizing your return on investment (ROI).
              </p>
            </div>

            <Link href={"/contact-us"} className="mr-auto">
              <button className="bg-themeOrange text-white hover:bg-white hover:border-b hover:border-themeOrange transition-all hover:text-black font-medium px-4 py-3 text-lg capitalize">
                get in touch
              </button>
            </Link>
          </div>

          <div className="right flex justify-center items-center lg:w-[30%]">
            <img
              src={
                "https://res.cloudinary.com/dyvr2mbun/image/upload/v1720356002/website-development/v9ylxwe38rdrebz6bub6.webp"
              }
              alt="hero-section-image"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>

      {/* keywords section  */}
      <div className="keywords-section px-5 lg px-5:lg:px-[10rem] py-10 lg:py-10 bg-[#ececec] flex gap-y-6 flex-wrap gap-x-12 justify-center">
        {keywords.map((item, index) => (
          <div
            className="keyword capitalize text-xl border-2 border-themeOrange flex w-full lg:inline-flex px-4  lg:px-8 py-4 rounded-full items-center gap-x-4 lg:w-auto"
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
      <div className="process-section px-5 lg:px-[10rem] py-10 lg:py-20 flex flex-col gap-y-8  lg:gap-y-16">
        <div className="heading flex">
          <h1 className="text-3xl lg:text-5xl font-medium capitalize">
            Unlocking Potential with Instagram Ads
          </h1>
        </div>

        <div className="down flex flex-wrap justify-center gap-x-14 gap-y-8">
          {information.map((item, index) => (
            <div
              className="info-box lg:w-[30%] flex flex-col gap-y-3 lg:gap-y-5"
              key={`information no ${index + 1}`}
            >
              <h3 className="text-2xl lg:text-3xl capitalize">
                {item.title} <br /> {item.title2}{" "}
              </h3>
              <p className="">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* black banner section  */}
      <div className="black-banner-section px-5 lg:px-[10rem] py-10 lg:py-10 bg-black text-white flex flex-col lg:flex-row gap-y-6 justify-between items-center">
        <h1 className="text-3xl lg:text-5xl font-medium">
          Ready to take the first step, let&apos;s talk.
        </h1>

        <div className="mr-auto lg:mr-0">
          <Link href={"/contact-us"} className="lg:mr-auto">
            <button className="bg-themeOrange text-white hover:bg-black hover:border-b-[2px] hover:border-themeOrange transition-all hover:text-white font-medium px-4 py-3 text-lg capitalize border-b-[2px] border-black">
              send us your brief
            </button>
          </Link>
        </div>
      </div>

      {/* why section  */}
      <div className="keypoints-section bg-[#fff] px-5 lg:px-[10rem] py-16">
        <div className="border-l-4 border-themeOrange border-r-4 bg-[#ececec] p-6 flex flex-col gap-y-6">
          <h1 className="text-4xl lg:text-4xl capitalize lg:leading-[3.3rem] font-medium">
            why instagram ads ?
          </h1>

          <div className="flex flex-col gap-y-4">
            <p>
              Choosing Instagram Ads offers businesses a powerful avenue to
              enhance their digital marketing efforts and reach a diverse,
              engaged audience effectively. With over a billion active users
              worldwide, Instagram provides a dynamic platform known for its
              visually captivating content, making it ideal for businesses to
              showcase products and services in compelling ways. Whether aiming
              to drive brand awareness, increase engagement, or boost
              conversions, Instagram&apos;s variety of ad formats—including
              photo ads, video ads, carousel ads, and stories ads—offer
              versatile options to cater to different marketing objectives.
            </p>

            <p>
              Moreover, Instagram Ads benefit from seamless integration with
              Facebook, leveraging its sophisticated targeting capabilities and
              ad management tools. This integration allows businesses to
              synchronize campaigns across both platforms, maximizing reach and
              optimizing ad spend efficiently. The platform&apos;s interactive
              nature encourages direct engagement through likes, comments, and
              shares, facilitating meaningful interactions between brands and
              their target audience.
            </p>
          </div>
        </div>
      </div>

      {/* testimonials section  */}
      <Testimonials />

      {/* faqs section  */}
      <div className="faqs-section px-5 lg:px-[10rem] py-10">
        <div className="faqs">
          <h1 className="text-black text-center mx-auto mt-4 capitalize text-3xl lg:text-4xl font-semibold">
            frequently asked questions
          </h1>
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

export default InstagramAdsPage;
