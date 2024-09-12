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

function BlogPage2() {
  const { blogs } = data;
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

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
        <span className="">
          Boost Your Business Growth with Targeted PPC Campaigns
        </span>
      </div>

      {/* hero section  */}
      <div className="px-5 lg:px-[10rem] py-10 flex flex-col gap-y-10">
        <div className="top flex justify-center">
          <div className="bg-themeOrange text-white px-3 py-1 inline-flex rounded-xl">
            PPC Campaigns
          </div>
        </div>

        <h1 className="text-4xl lg:text-5xl font-medium text-center lg:leading-[3.5rem]">
          Boost Your Business Growth with Targeted PPC Campaigns
        </h1>

        {/* <div className="mt-5 flex">
            <div className="capitalize flex gap-x-2">
                <span>Published on</span>
                <span className="font-semibold">April 2,2024</span>
            </div>
        </div> */}

        <div className="blog-banner mx-auto">
          <img
            src={
              "https://res.cloudinary.com/dyvr2mbun/image/upload/v1726108566/blogs/wvakuw6brke7rgz1lvwj.jpg"
            }
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
          <h3>12 September, 2024</h3>
        </div>

        <div className="flex gap-x-2 text-2xl">
          <IoIosLink />
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
      <div className="introduction px-5 lg:px-[10rem] pt-10 pb-4 text-lg">
        In today&apos;s fast-paced digital landscape, businesses need effective
        strategies to stand out and attract the right audience. One powerful
        tool that can significantly increase visibility and drive conversions is
        Pay-Per-Click (PPC) advertising. At Valuable Multimedia, we specialize
        in crafting targeted PPC campaigns that help businesses boost their
        growth and maximize their return on investment (ROI).
      </div>

      <div className="introduction px-5 lg:px-[10rem] pb-10 text-lg">
        In this comprehensive guide, we&apos;ll dive into how a well-executed
        PPC campaign can grow your business, the key elements of a successful
        strategy, and why Valuable Multimedia is your best partner for PPC
        management.
      </div>

      {/* title-paragraphs  */}
      <div className="title-paragraphs px-5 lg:px-[10rem] pb-10 flex flex-col gap-y-4">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          What is Pay-Per-Click (PPC) Advertising?
        </h2>

        <p className="text-lg">
          Pay-Per-Click (PPC) advertising is a digital marketing model where
          advertisers pay a fee each time their ad is clicked. Unlike organic
          traffic, PPC allows businesses to buy visits to their website, making
          it an effective way to gain visibility quickly. PPC ads can appear on
          search engines like Google through Google Ads services, social media
          platforms like Facebook and Instagram, or on third-party websites
          through display ads. By targeting the right keywords, audiences, and
          locations, PPC ads ensure that your message reaches potential
          customers actively searching for your products or services.
        </p>
      </div>

      {/* main blog pointers  */}
      <div className="title-subtitle-paragraphs px-5 lg:px-[10rem] py-5 flex flex-col gap-y-6">
        <h2 className=" text-3xl lg:text-4xl font-semibold">
          How PPC Campaigns Can Boost Your Business Growth
        </h2>

        <p className="text-lg">
          A well-optimized PPC campaign is more than just buying traffic;
          it&apos;s about driving relevant visitors to your site, increasing
          conversions, and ultimately, scaling your business. Here&apos;s how
          PPC campaigns can significantly impact your business growth:
        </p>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>1.</span>
            <span>Immediate Visibility on Search Engines</span>
          </h3>
          <p className="text-lg">
            One of the primary benefits of PPC is the ability to achieve instant
            visibility. Organic SEO takes time to yield results, but with PPC,
            your ads can appear at the top of search engine results pages
            (SERPs) as soon as you launch a campaign. This is especially
            valuable for businesses in competitive industries where ranking
            organically can take months, or even years.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &quot;immediate visibility on
            Google&quot;
          </p>
          <p className="text-lg">
            For example, with Valuable Multimedia, we ensure your ads gain
            immediate visibility on Google, helping you stay ahead of the
            competition.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>2.</span>
            <span>Highly Targeted Audience Reach</span>
          </h3>
          <p className="text-lg">
            PPC allows businesses to laser-focus their campaigns on specific
            demographics, locations, devices, and even user behaviors. By
            targeting the right audience, you reduce wasted ad spend and
            increase the likelihood of converting clicks into customers.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &quot;targeted audience PPC&quot;
          </p>
          <p className="text-lg">
            At Valuable Multimedia, we help you identify and target the most
            valuable audience segments, ensuring your ads are shown to people
            who are most likely to engage with your brand.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPage2;
