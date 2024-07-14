"use client";

import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";
import data from "@/data/social_media_marketing_data.json";
import Contact from "@/components/Contact/Contact";

function SocialMediaMarketingPage() {
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
        <span>social media marketing</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-wd lg:px-24 px-5 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-y-6">
          <div className="left lg:w-[70%] flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-4xl lg:text-5xl capitalize lg:w-[80%] lg:leading-[3.5rem] font-medium">
                Social Media <br /> Marketing Services
              </h1>
              <h3 className="text-themeOrange font-bold text-lg">
                Adapt & innovate because what worked yesterday may work again.
              </h3>
            </div>

            <div className="text-lg">
              <p className="lg:pr-20">
                Brands can captivate audiences in the most creative manner and
                tell stories about themselves that people reminisce about. As
                social networking sites are constantly upgrading to make
                themselves more and more lucrative, we as the best social media
                marketing company in India, derive new ways, avenues, and
                strategies to exploit the power of social media marketing for
                our diverse clientele.
              </p>
            </div>

            <Link href={"/contact-us"} className="mr-auto">
              <button className="bg-themeOrange text-white hover:bg-white hover:border-b hover:border-themeOrange transition-all hover:text-black font-medium px-4 py-3 text-lg capitalize">
                get in touch
              </button>
            </Link>
          </div>

          <div className="right flex justify-center items-center lg:w-[30%]">
            <Image
              src={
                "https://res.cloudinary.com/dyvr2mbun/image/upload/v1720280997/website-development/akkg875docq7tfvgpap6.webp"
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

      {/* services section  */}
      <div className="services-section px-5 lg:px-[10rem] mb-5 py-10 lg:py-16 flex flex-col gap-y-10">
        <div className="flex flex-col lg:flex-row gap-y-6">
          <div className="left lg:w-[60%] flex flex-col gap-y-6">
            <h1 className="text-3xl lg:text-5xl font-medium capitalize">
              paid for reach and attainment of goals
            </h1>
            <p className="lg:pr-20">
              Social media feeds are busier than ever. To stand out, paid ads
              are inevitable. There is humongous scope in the social media
              pay-to-play game. Whatever is your objective, social giants like
              Facebook have algorithms to support every type of campaign. It
              facilitates brands to increase their brand awareness, generates
              traffic to their landing pages, expands their social media
              community, retargets their audience, and much more. At VALUABLE
              MULTIMEDIA, we create strategic, instigating, and high-performing
              campaigns under the experienced surveillance of paid ads
              specialists.
            </p>
          </div>

          <div className="right lg:w-[40%]">
            <Image
              src={
                "https://res.cloudinary.com/dyvr2mbun/image/upload/v1720287045/website-development/qccgnxs8vkw3nc5fbk7f.webp"
              }
              alt="social-media-icons"
              height={300}
              width={500}
            />
          </div>
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

      {/* process section  */}
      <div className="process-section px-5 lg:px-[10rem] py-10 lg:py-20 flex flex-col gap-y-8 lg:gap-y-16">
        <div className="heading flex">
          <div className="left hidden lg:block w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dyvr2mbun/image/upload/v1720287482/website-development/yr07s9nnqdquka36ppmb.webp"
              }
              alt="social-img"
              height={100}
              width={210}
            />
          </div>

          <div className="right lg:w-[80%] flex flex-col gap-y-3">
            <h3 className="text-lg">Our Social Media Marketing Services</h3>
            <h1 className="text-3xl lg:text-4xl font-medium">
              <span>At Valuable Multimedia, </span>
              <span className="text-themeOrange"> social media marketing</span>
              <span> is our forte, and marketing is our passion.</span>
            </h1>
          </div>
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
              <p className="text-justify">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* faqs section  */}
      <div className="faqs-section px-5 lg:px-[10rem] py-10 lg:py-16">
        <div className="faqs">
          <h1 className="text-black text-center mx-auto capitalize text-3xl lg:text-4xl font-semibold">
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

export default SocialMediaMarketingPage;
