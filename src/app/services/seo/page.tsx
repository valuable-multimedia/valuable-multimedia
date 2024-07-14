"use client";

import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";
import data from "@/data/seo_data.json";
import Contact from "@/components/Contact/Contact";

function SEOPage() {
  const { keywords, information, faqs, content } = data;

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
        <span>SEO</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-wd lg:px-24 px-5 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-y-6">
          <div className="left lg:w-[70%] flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-4xl lg:text-5xl capitalize lg:w-[80%] lg:leading-[3.5rem] font-medium">
                search engine <br /> optimization (SEO) services
              </h1>
              <h3 className="text-themeOrange font-bold text-lg">
                Improve ranking, increase site-traffic, gain customers, and
                grow.
              </h3>
            </div>

            <div className="text-lg">
              <p className="lg:pr-20">
                Google registers 63000 searches/second. Now, count how many in
                24 hours? <br /> The consumers you want are already out there
                finding solutions to their problems in those plethoras of
                searches. At VALUABLE MULTIMEDIA Service, we put you where your
                prospects are so that you can enjoy higher rankings, large
                volumes of traffic and better ROls. We are the dedicated,
                professional, and proficient best SEO agency in India, located
                in the heritage city Ahmedabad. We take pride in being the #1
                and thrive to deliver the same results for you.
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
      <div className="keywords-section px-5 lg:px-[10rem] py-10 lg:py-10 bg-[#ececec] flex gap-y-6 flex-wrap gap-x-12 justify-center">
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
      <div className="services-section px-5 lg:px-[10rem] py-10 lg:py-16 flex flex-col gap-y-10">
        <div className="heading flex flex-col gap-y-4 lg:gap-y-6">
          <h1 className="text-3xl lg:text-4xl font-medium capitalize flex gap-x-3">
            <span>our</span>
            <span className="text-themeOrange">SEO</span>
            <span>services</span>
          </h1>

          <p>
            Since our establishment, we have maintained a foremost position on
            the first page of Google. Valuable Multimedia Service - top SEO
            company in India is wholeheartedly committed to SEO and so we
            provide unconventional best SEO services in India. With the right
            tools and intelligent heads in our squad, we cultivate unique
            strategies for the assured and sustainable business growth of our
            clientele.
          </p>
        </div>

        <div className="down flex justify-center flex-wrap gap-x-10 gap-y-6">
          {content.map((item, index) => (
            <div
              className="content-box lg:w-[30%] flex flex-col gap-y-4 bg-[#ececec] px-4 py-6 rounded-lg"
              key={`content box ${index + 1}`}
            >
              <h3 className="text-xl capitalize font-medium">{item.title}</h3>
              <p className="text-gray-500 text-lg">{item.content}</p>
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

      {/* process section  */}
      <div className="process-section px-5 lg:px-[10rem] py-10 lg:py-20 flex flex-col gap-y-8 lg:gap-y-16">
        <div className="heading">
          <h1 className="text-3xl lg:text-5xl font-medium">
            <span>How do we do</span>
            <span className="text-themeOrange"> SEO</span>?
          </h1>
        </div>

        <div className="down flex flex-wrap justify-center gap-x-14 gap-y-8">
          {information.map((item, index) => (
            <div
              className="info-box lg:w-[30%] flex flex-col gap-y-3 lg:gap-y-5"
              key={`information no ${index + 1}`}
            >
              <h3 className="text-2xl hidden lg:block lg:text-3xl capitalize">
                {item.title} <br /> {item.title2}{" "}
              </h3>
              <h3 className="text-2xl lg:hidden block lg:text-3xl capitalize">
                {item.title}  {item.title2}{" "}
              </h3>
              <p className="text-justify">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* why section  */}
      <div className="keypoints-section bg-[#fff] px-5 lg:px-[10rem] py-10 lg:py-16">
        <div className="border-l-4 border-themeOrange border-r-4 bg-[#ececec] p-6 flex flex-col gap-y-4 lg:gap-y-6">
          <h1 className="text-3xl lg:text-4xl capitalize leading-[3.3rem] font-medium">
            why SEO ?
          </h1>

          <div className="flex flex-col gap-y-4">
            <p>
              Often asked by many, &quot;Will SEO benefit my business?&quot;
              Yes! Let us tell you how?
            </p>
            <p>
              When a person puts a query in Google, the smart engine looks for
              websites in its index to give the searcher the best results first.
              Hence, the rankings.
            </p>
            <p>
              For indexing websites, search engines like Google have advanced
              programs called bots or web crawlers that literally crawl the web
              in search of good websites.
            </p>
            <p>
              To get your website indexed, there are various parameters that are
              addressed with technical SEO. These are merits that help you
              secure leading positions in Search Engine Result Pages (SERPs).
            </p>
            <p>Why all these hassles?</p>
            <p>
              61% of the average web traffic is sliced by the top 3 websites in
              SERPs. If you are one of them, imagine the swarm of organic
              traffic your websites can receive. More traffic means more
              business opportunities!
            </p>
          </div>
        </div>
      </div>

      {/* faqs section  */}
      <div className="faqs-section px-5 lg:px-[10rem] py-10">
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

export default SEOPage;
