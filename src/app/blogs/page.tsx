"use client";

import React from "react";
import { PiGreaterThan } from "react-icons/pi";

function BlogPage() {
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
      <div className="blogs-section-about px-[10rem] py-16">blogs</div>
    </div>
  );
}

export default BlogPage;
