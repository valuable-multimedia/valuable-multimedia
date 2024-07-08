"use client";

import React, { useState, useEffect } from "react";
import { PiGreaterThan } from "react-icons/pi";
import Link from "next/link";
import data from "@/data/blogs_data.json";
import Image from "next/image";

function BlogPage() {
  const { blogs } = data;

  return (
    <div className="bg-[#fcfcfc] text-black">
      {/* direction banner  */}
      <div className="bg-[#ffffff] gap-x-3 capitalize py-6 flex items-center px-24 text-gray-400">
        <span>home</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>blogs</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-blog px-[10rem] py-16 flex flex-col gap-y-6">
        <h1 className="capitalize text-5xl font-medium text-center">blogs</h1>
        <p className="text-gray-400 text-center text-[18px]">
          Stay informed and inspired with our blog, packed with industry
          insights and expert advice.
        </p>
      </div>

      {/* blogs section  */}
      <div className="blogs-section-home px-[10rem] py-16 flex flex-col gap-y-10">
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
                    className="rounded-t-lg"
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

export default BlogPage;
