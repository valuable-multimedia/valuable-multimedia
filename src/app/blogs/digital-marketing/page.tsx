"use client";

import React, { useEffect, useState } from "react";
import { PiGreaterThan } from "react-icons/pi";
import Image from "next/image";
import data from "@/data/blogs_data.json";
import { FaCircle } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

function BlogPage() {
  const { blogs } = data;
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopy = () => {
    const currentUrl = document.URL; // Using document.URL to get the current page URL
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        console.log("copied");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="bg-[#fcfcfc] text-black">
      {/* direction banner  */}
      <div className="bg-[#ffffff] gap-x-3 capitalize py-6 flex items-center px-5 lg:px-24 text-gray-400">
        <span>home</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>blogs</span>
        <span>
          <PiGreaterThan />
        </span>
        <span className="">{blogs[0].title}</span>
      </div>

      {/* hero section  */}
      <div className="px-5 lg:px-[10rem] py-10 flex flex-col gap-y-10">
        <div className="top flex justify-center">
          <div className="bg-themeOrange text-white px-3 py-1 inline-flex rounded-xl">
            {blogs[0].keyword}
          </div>
        </div>

        <h1 className="text-4xl lg:text-5xl font-medium text-center lg:leading-[3.5rem]">
          {blogs[0].title}
        </h1>

        {/* <div className="mt-5 flex">
            <div className="capitalize flex gap-x-2">
                <span>Published on</span>
                <span className="font-semibold">April 2,2024</span>
            </div>
        </div> */}

        <div className="blog-banner mx-auto">
          <img
            src={blogs[0].imgUrl}
            alt="blog-banner"
            height={600}
            width={600}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* publisher section  */}
      <div className="publisher-details px-5 lg:px-[10rem] flex flex-col lg:flex-row gap-y-4 justify-between items-center text-gray-500 gap-x-4">
        <div className="flex items-center gap-x-4">
          <h3 className="flex gap-x-1 capitalize">
            <span>by</span>
            <span className="font-semibold">gaurav khatri</span>
          </h3>
          <div className="text-gray-300 text-sm">
            <FaCircle />
          </div>
          <h3>July 9, 2024</h3>
        </div>

        <div className="flex gap-x-2 text-2xl">
          <IoIosLink onClick={handleCopy} className="cursor-pointer" />
          <Link
            href={`https://api.whatsapp.com/send?text=Check out this page: ${currentUrl}`}
          >
            <FaWhatsapp />
          </Link>
          <Link href="https://www.instagram.com/direct/inbox/">
            <FaInstagram />
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
          >
            <FaFacebook />
          </Link>
          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
          >
            <IoLogoLinkedin />
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?text=Check out this page: ${currentUrl}`}
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>

      {/* introduction section  */}
      <div className="introduction px-5 lg:px-[10rem] py-10 text-lg">
        {blogs[0].content[0].data}
      </div>

      {/* title-paragraphs  */}
      <div className="title-paragraphs px-5 lg:px-[10rem] pb-5 flex flex-col gap-y-4">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          {blogs[0].content[1].title}
        </h2>
        <p className="text-lg">{blogs[0].content[1].data}</p>
      </div>

      {blogs[0].content[2]?.bulks?.map((item, index) => (
        <div
          className="title-subtitle-paragraphs px-5 lg:px-[10rem] py-5 flex flex-col gap-y-6"
          key={`bumper-content-${index + 1}`}
        >
          <h2 className=" text-3xl lg:text-4xl font-semibold">
            {item.mainTitle}
          </h2>

          {item.subBulks?.map((item, index) => (
            <div
              className="flex flex-col gap-y-2"
              key={`mini-content-${index + 1}`}
            >
              <h3 className="text-2xl font-medium">
                {`${index + 1}.`} &nbsp; {item.title}
              </h3>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
