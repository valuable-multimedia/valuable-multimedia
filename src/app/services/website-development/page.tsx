"use client";

import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import data from "@/data/web_development_data.json";
import Contact from "@/components/Contact/Contact";

function WebDevelopmentPage() {
  const { keywords, content, information, faqs, words } = data;

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
        <span>web development</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-wd px-24 py-16">
        <div className="flex">
          <div className="left w-[70%] flex flex-col gap-y-8">
            <h1 className="text-5xl capitalize w-[80%] leading-[3.5rem] font-medium">
              <span>expanding your digital footprint with</span>
              <span className="text-themeOrange">
                {" "}
                valuable multimedia&apos;s{" "}
              </span>
              <span>web solutions</span>
            </h1>

            <div className="text-lg">
              <p>
                Website, a digital representative of the business, plays a
                crucial role in the tech-dominated business environment of
                today. As the best web development company in Ahmedabad, our
                development experts ensure to give your business an excellently
                crafted website that leads your business growth from the front.
                With our web development services, you choose to invest in a
                virtual asset of the company that is sure to yield results.
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
                "https://res.cloudinary.com/dyvr2mbun/image/upload/v1720193039/website-development/jzcu7h1njvztov1x51xm.webp"
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

      {/* services section  */}
      <div className="services-section px-[10rem] py-16 flex flex-col gap-y-10">
        <div className="heading flex flex-col gap-y-6">
          <h1 className="text-4xl font-medium capitalize flex gap-x-3">
            <span>our</span>
            <span className="text-themeOrange">web development</span>
            <span>services</span>
          </h1>

          <p>
            At VALUABLE MULTIMEDIA - a reliable website development company in
            Ahmedabad, we understand the crucial contribution of websites in the
            digital presence of a business. Thus, we are dedicated to providing
            comprehensive web solutions tailored to suit business needs.
          </p>
        </div>

        <div className="down flex justify-center flex-wrap gap-x-10 gap-y-6">
          {content.map((item, index) => (
            <div
              className="content-box w-[30%] flex flex-col gap-y-4 bg-[#ececec] px-4 py-6 rounded-lg"
              key={`content box ${index + 1}`}
            >
              <h3 className="text-xl capitalize font-medium">{item.title}</h3>
              <p className="text-gray-500 text-lg">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* black banner section  */}
      <div className="black-banner-section px-[10rem] py-10 my-5 bg-black text-white flex  justify-between items-center">
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

      {/* process section  */}
      <div className="process-section px-[10rem] py-16 flex flex-col gap-y-10">
        <div className="heading flex flex-col gap-y-2">
          <h1 className="text-4xl font-medium flex gap-x-2">
            <span>Delivering</span>
            <span className="text-themeOrange">Website Development</span>
          </h1>
          <h1 className="text-4xl font-medium flex gap-x-2">Excellence:</h1>

          <div className="capitalize text-lg">our web development process</div>
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

      {/* keypoints section  */}
      <div className="keypoints-section bg-[#ececec] px-[10rem] py-16">
        <div className="flex justify-between">
          <div className="left w-[40%] flex flex-col gap-y-8">
            <h1 className="text-[43px] font-medium leading-[3rem]">
              Transform Your <br /> Website into a High-Performing Business
              Growth Engine
            </h1>
            <p className="pr-12">
              Whether you are launching a new business or aiming to enhance an
              existing website, our team of developers is fully equipped to
              provide comprehensive support. Benefit from the convenience of
              working with multiple senior developers and designers who
              consistently thrive to deliver exceptional results.
            </p>
          </div>

          <div className="right w-[50%] flex flex-wrap bg-white p-4">
            {words.map((item, index) => (
              <div
                className="item w-1/2 flex items-center gap-x-2"
                key={`word no ${index + 1}`}
              >
                <span className="text-themeOrange text-2xl">
                  <TiTick />
                </span>
                <span className="capitalize">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* faqs section  */}
      <div className="faqs-section px-[10rem] py-16">
        <div className="faqs">
          <h1 className="text-black text-center mx-auto mt-4 capitalize text-4xl font-semibold">
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

export default WebDevelopmentPage;
