"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/home_data.json";
import informations from "@/data/homeInformation";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import homeServices from "@/data/homeServices";

export default function Home() {
  const { toolsOne, toolsTwo, industries, clients, blogs, faqs } = data;

  return (
    <main className="flex flex-col bg-[#fcfcfc]">
      {/* hero section  */}
      <div className="flex justify-center items-center hero-section-home px-24 py-16 min-h-[80vh] bg-[#ececec] hero-bg-gradient">
        <div className="left flex flex-col gap-y-16 w-[55%]">
          <h1 className="flex flex-col gap-y-2 capitalize">
            <span className="text-2xl text-themeOrange font-medium">
              Driving the next wave of
            </span>
            <span className="text-6xl leading-[4.5rem]">
              marketing with integrated strategy, design{" "}
              <span className="text-themeOrange">&amp;</span> technology.
            </span>
          </h1>

          <Link href={"/about-us"} className="mr-auto">
            <button className="bg-black text-white hover:bg-white hover:border-b hover:border-themeOrange transition-all hover:text-black font-medium px-4 py-3 text-lg ">
              See What We do
            </button>
          </Link>
        </div>

        <div className="right flex justify-center items-center w-[45%] font-bold">
          <Image
            src={
              "https://res.cloudinary.com/dyvr2mbun/image/upload/v1720759168/home/fgafzicb8wkzkzmwm3j7.jpg"
            }
            alt="home-page-banner"
            height={527}
            width={1000}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* content section */}
      <div className="content-section-home px-[10rem] py-16">
        <div className="flex gap-y-6 flex-col">
          <div className="up">
            <h1 className="text-5xl capitalize">
              We&apos;re Result Driven Digital Marketing Agency
            </h1>
          </div>
          <div className="down flex">
            <div className="left w-[80%] flex flex-col gap-y-3">
              <h4 className="text-2xl">Why sweat online presence?</h4>
              <p className="text-justify">
                over years of rigor, consistency, sincerity, and dedication.
                With our gamut of fully integrated digital marketing services,
                we provide significant, sustainable, and measurable business
                growth. Maintaining the intrinsic value of your brand digitally
                and making sure that your customers can experience it at every
                touchpoint is our motto. It is right to say that we are
                result-oriented, as we wholeheartedly love and practice PPC.
              </p>
            </div>
            <div className="right w-[20%] flex justify-center items-center">
              <ul className="flex flex-col gap-y-2 text-lg text-themeOrange font-semibold capitalize">
                <Link href={"/about-us"}>
                  <li>about</li>
                </Link>
                <Link href={"/blogs"}>
                  <li>our blogs</li>
                </Link>
                <Link href={"/contact-us"}>
                  <li>contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* services section  */}
      <div className="service-section-home px-[10rem] pb-24 py-20 bg-[#ececec] flex flex-col gap-y-8">
        <div className="up">
          <h1 className="text-themeOrange text-xl font-semibold capitalize">
            what we are best at
          </h1>
        </div>

        <div className="lower flex gap-y-10 justify-center gap-x-14 border flex-wrap">
          {homeServices.map((item, index) => (
            <Link
              href={item.slug}
              key={`service-item-[${index}]`}
              className="link-item capitalize text-3xl font-light w-[30%] leading-[2.7rem] border-b border-themeOrange pb-4 hover:text-themeOrange transition-all ease-in-out flex gap-x-3"
            >
              <div className="mt-2 text-3xl">{item.icon}</div>
              <div className="">
                <div className="">{item.name}</div>
                <div className="">{item.name2}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* info section  */}
      <div className="info-section-home flex flex-col gap-y-16 px-[10rem] py-14">
        <div className="up flex flex-col gap-y-3">
          <h3 className="text-themeOrange text-xl font-semibold">
            Tailored Solutions for our clients
          </h3>
          <h1 className="capitalize text-5xl">
            Take Your Business To Newer Heights
          </h1>
        </div>

        <div className="down flex flex-wrap justify-between gap-y-8">
          {informations.map((item, index) => (
            <div
              className="item-detail-box flex flex-col gap-y-4 w-[30%]"
              key={`info ${index + 1}`}
            >
              <div className="text-6xl text-themeOrange">{item.icon}</div>
              <h2 className="text-3xl capitalize flex flex-col">
                <span>{item.title}</span>
                <span>{item.title2}</span>
              </h2>
              <p className="text-justify">{item.description}</p>
              <div className=""></div>
            </div>
          ))}
        </div>
      </div>

      {/* tools section  */}
      <div className="tools-section-home px-[10rem] py-16 flex flex-col gap-y-10">
        <div className="up flex flex-col gap-y-4">
          <h1 className="text-5xl font-medium">Tools of the Trade</h1>
          <p className="text-gray-500">
            Using top tools for optimal outcomes and deeper insights.
          </p>
        </div>

        <div className="down">
          <div className="top flex justify-between border-b border-gray-300 pb-4">
            {toolsOne.map((item, index) => (
              <Image
                src={item}
                alt="tools-icon"
                height={110}
                width={110}
                key={`tools-one-image ${index + 1}`}
              />
            ))}
          </div>

          <div className="bottom flex justify-between pb-4">
            {toolsTwo.map((item, index) => (
              <Image
                src={item}
                alt="tools-icon"
                height={110}
                width={110}
                key={`tools-one-image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* poster section  */}
      <div className="poster-section-home border-[2px] border-themeOrange mx-16 mb-16 py-10 px-32">
        <div className="flex">
          <div className="left flex flex-col gap-y-6 justify-center pr-8 w-1/2">
            <div className="up">
              <h1 className="capitalize text-5xl font-medium leading-[3.2rem] text-themeOrange">
                we understand your love for heights
              </h1>
            </div>

            <p>
              At Valuable Multimedia, PPC is more than just a service; it&apos;s
              our passion. We&apos;re proud to be recognized as the &quot;top
              PPC company in Ahmedabad&quot; and are dedicated to delivering
              exceptional results for our clients. We are committed to
              channeling that same energy and expertise to help our clients
              achieve their PPC goals.
            </p>
          </div>

          <div className="right w-1/2">
            <Image
              src="https://res.cloudinary.com/dyvr2mbun/image/upload/v1719813878/bw0vaqxgx7wvhcsy8g0l.webp"
              alt="hand-image"
              height={400}
              width={600}
            />
          </div>
        </div>
      </div>

      {/* sectors section  */}
      <div className="sectors-section-home bg-[#ececec] px-[10rem] py-16">
        <div className="flex">
          <div className="left w-[40%] flex flex-col justify-center gap-y-6">
            <h3 className="text-themeOrange capitalize text-xl font-semibold">
              Delivering services
            </h3>

            <h1 className="text-5xl w-[60%] border font-medium leading-[3.4rem]">
              Across Multiple Industries
            </h1>
          </div>

          <div className="right bg-white w-[60%] gap-y-8 p-8 rounded-lg flex flex-wrap justify-between">
            {industries.map((item, index) => (
              <div
                className="item-box w-[15%] flex flex-col gap-y-2 justify-center items-center"
                key={`industry ${index + 1}`}
              >
                <Image
                  src={item.imgUrl}
                  alt="industry-icon"
                  height={50}
                  width={50}
                />
                <h4 className="capitalize text-sm">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* clients section  */}
      <div className="clients-section-home px-[10rem] py-16 flex flex-col gap-y-10">
        <div className="up">
          <h3 className="text-themeOrange capitalize text-xl font-semibold">
            Serving distinct &amp; influential businesses
          </h3>
        </div>

        <div className="down flex flex-wrap justify-between gap-y-8">
          {clients.map((item, index) => (
            <div
              className="client-box w-[30%] flex justify-center items-center hover:border-b-[2px] hover:border-themeOrange border-b-[2px] border-white transition-all cursor-pointer pb-2"
              key={`client ${index + 1}`}
            >
              <Image src={item} alt="client-logo" height={100} width={300} />
            </div>
          ))}
        </div>
      </div>

      {/* testimonials section  */}
      <Testimonials />

      {/* blogs section  */}
      <div className="blogs-section-home px-[10rem] pt-16 pb-10 flex flex-col gap-y-10">
        <div className="up">
          <h2 className="capitalize text-3xl">recent blogs</h2>
        </div>

        <div className="down flex flex-wrap justify-between w-full">
          {blogs.map((item, index) => (
            <Link
              href={item.slug}
              key={`blogs ${index + 1}`}
              className="w-[30%] bg-white shadow-lg rounded-lg"
            >
              <div className="blog-card flex flex-col gap-y-6 w-full">
                <div className="up">
                  <Image
                    src={item.imgUrl}
                    alt="blog-image"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="down flex flex-col gap-y-3 px-4 py-2">
                  <div className="date text-sm capitalize">{item.date}</div>
                  <div className="text-xl font-semibold text-gray-500">
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
                          {item.question}
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
                      {item.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* contact section  */}
      <Contact />
    </main>
  );
}
