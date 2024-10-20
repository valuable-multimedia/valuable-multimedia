"use client";

import React, { useState, useEffect } from "react";
import { PiGreaterThan } from "react-icons/pi";
import Link from "next/link";
import data from "@/data/blogs_data.json";
import Image from "next/image";

function BlogPageMain() {
  const { blogs } = data;

  return (
    <div className="bg-[#fcfcfc] text-black">
      {/* direction banner  */}
      <div className="bg-[#ffffff] gap-x-3 capitalize py-6 flex items-center px-5 lg:px-24 text-gray-400">
        <span>home</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>blogs</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-blog px-5 lg:px-[10rem] py-10 lg:py-16 flex flex-col  gap-y-5 lg:gap-y-6">
        <h1 className="capitalize text-4xl lg:text-5xl font-medium text-center">
          blogs
        </h1>
        <p className="text-gray-400 text-center text-[18px]">
          Stay informed and inspired with our blog, packed with industry
          insights and expert advice.
        </p>
      </div>

      {/* blogs section  */}
      <div className="blogs-section-home px-5 lg:px-[10rem] py-10 lg:py-16 flex flex-col gap-y-10">
        <div className="down flex flex-wrap gap-y-10 justify-center gap-x-10 w-full">
          <Link
            href={
              "/blogs/how-to-improve-your-website-with-seo-in-the-upcoming-years"
            }
            className="lg:w-[30%] bg-white shadow-lg rounded-lg"
          >
            <div className="blog-card flex flex-col gap-y-6 w-full">
              <div className="up">
                <Image
                  src={
                    "https://res.cloudinary.com/dyvr2mbun/image/upload/v1729153152/blogs/qqy6bevzpymiot64hzxr.jpg"
                  }
                  alt="blog-image"
                  height={300}
                  width={400}
                  className="rounded-t-lg overflow-hidden"
                />
              </div>
              <div className="down flex flex-col gap-y-3 px-4 py-2">
                <div className="date text-sm capitalize">
                  17 October, 2024
                </div>
                <div className="text-xl font-semibold text-gray-500">
                How to Improve Your Website with SEO in the Upcoming Years?

                </div>
              </div>
            </div>
          </Link>

          <Link
            href={
              "/blogs/boost-your-business-growth-with-targeted-ppc-campaigns"
            }
            className="lg:w-[30%] bg-white shadow-lg rounded-lg"
          >
            <div className="blog-card flex flex-col gap-y-6 w-full">
              <div className="up">
                <Image
                  src={
                    "https://res.cloudinary.com/dyvr2mbun/image/upload/v1726108566/blogs/wvakuw6brke7rgz1lvwj.jpg"
                  }
                  alt="blog-image"
                  height={300}
                  width={400}
                  className="rounded-t-lg overflow-hidden"
                />
              </div>
              <div className="down flex flex-col gap-y-3 px-4 py-2">
                <div className="date text-sm capitalize">
                  12 September, 2024
                </div>
                <div className="text-xl font-semibold text-gray-500">
                  Boost Your Business Growth with Targeted PPC Campaigns
                </div>
              </div>
            </div>
          </Link>

          {blogs
            .slice()
            .reverse()
            .map((item, index) => (
              <Link
                href={item.slug}
                key={`blogs ${index + 1}`}
                className="lg:w-[30%] bg-white shadow-lg rounded-lg"
              >
                <div className="blog-card flex flex-col gap-y-6 w-full">
                  <div className="up">
                    <Image
                      src={item.imgUrl}
                      alt="blog-image"
                      height={300}
                      width={400}
                      className="rounded-t-lg overflow-hidden"
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
    </div>
  );
}

export default BlogPageMain;
