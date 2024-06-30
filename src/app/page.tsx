"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import homeServices from "@/data/home_data.json";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* hero section  */}
      <div className="flex justify-center items-center hero-section-home px-24 py-16 min-h-[80vh] bg-[#ececec] hero-bg-gradient">
        <div className="left flex flex-col gap-y-16 w-[55%]">
          <h1 className="flex flex-col gap-y-2">
            <span className="text-2xl text-themeOrange font-medium">
              Driving the next wave of
            </span>
            <span className="text-6xl leading-[4.5rem]">
              marketing with integrated strategy, design{" "}
              <span className="text-themeOrange">&amp;</span> technology.
            </span>
          </h1>

          <Link href={"/"} className="mr-auto">
            <button className="bg-black text-white hover:bg-white hover:border-b hover:border-themeOrange transition-all hover:text-black font-medium px-4 py-3 text-lg">
              See what We do
            </button>
          </Link>
        </div>

        <div className="right flex justify-center items-center w-[45%] border border-red-500 font-bold min-h-full h-[50vh]">
          Banner Image
        </div>
      </div>

      {/* content section */}
      <div className="content-section-home px-[10rem] py-14">
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
                result-oriented, as we wholeheartedly love and practice SEO.
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
          <h1 className="text-themeOrange text-xl font-semibold">
            what we are best at
          </h1>
        </div>

        <div className="lower flex gap-y-10 justify-between border flex-wrap">
          {homeServices.homeServices.map((item, index) => (
            <Link
              href={item.slug}
              key={`service-item-[${index}]`}
              className="link-item capitalize text-3xl font-light w-[30%] leading-[2.7rem] border-b border-themeOrange pb-4 hover:text-themeOrange transition-all ease-in-out"
            >
              <div className="">{item.name}</div>
              <div className="">{item.name2}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* info section  */}
      <div className="info-section-home px-[10rem] py-14">hello</div>
    </main>
  );
}
