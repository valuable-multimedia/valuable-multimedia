"use client";

import Link from "next/link";
import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function ContactUsPage() {
  return (
    <div className="bg-[#fcfcfc] text-black">
      {/* direction banner  */}
      <div className="bg-[#ffffff] gap-x-3 capitalize py-6 flex items-center px-5 lg:px-24 text-gray-400">
        <span>home</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>contact us</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-contact px-5 lg:px-[10rem] py-10 lg:py-16">
        <div className="flex up flex-col lg:flex-row gap-y-10">
          <div className="left lg:w-1/2 flex flex-col gap-y-6 lg:gap-y-8">
            <h1 className="text-5xl lg:text-8xl font-medium lg:leading-[6.3rem]">
              Let&apos;s prosper together.
            </h1>

            <p className="text-lg lg:pr-28">
              We work with businesses in any country, and we don&apos;t just
              work with the biggest brands.
            </p>

            <div className="flex flex-col gap-y-4">
              <h2 className="text-4xl lg:text-5xl font-medium">Prefer to talk?</h2>

              <p className="text-gray-400 lg:pr-28">
                Give us a call at{" "}
                <span className="text-themeOrange">
                  <Link href={"tel:+919016850552"}>+91 90168 50552</Link>
                </span>{" "}
                or send us an email at
                <span className="mx-1 text-themeOrange">
                  <Link href={"mailto:info@valuablemultimedia.com"}>
                    info@valuablemultimedia.com
                  </Link>
                </span>
                , and our representatives would love to get back to you with
                proper consultation.
              </p>
            </div>
          </div>

          <div className="right lg:w-1/2 lg:px-10">
            <form action="#" className="w-full flex flex-col gap-y-3">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="your name here"
                className="px-3 py-2 focus:outline-none border-b-[2px] focus:border-b-[2px] focus:border-themeOrange w-full capitalize"
              />

              <input
                type="text"
                name="businessName"
                id="businessName"
                placeholder="your business name"
                className="px-3 py-2 focus:outline-none border-b-[2px] focus:border-b-[2px] focus:border-themeOrange w-full capitalize"
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="your email ID"
                className="px-3 py-2 focus:outline-none border-b-[2px] focus:border-b-[2px] focus:border-themeOrange w-full capitalize"
              />

              <input
                type="text"
                name="number"
                id="number"
                placeholder="mobile number"
                className="px-3 py-2 focus:outline-none border-b-[2px] focus:border-b-[2px] focus:border-themeOrange w-full capitalize"
              />

              <textarea
                name="brief"
                id="brief"
                rows={7}
                cols={30}
                className="px-3 py-2 focus:outline-none border-b-[2px] focus:border-b-[2px] focus:border-themeOrange w-full capitalize text-gray-400"
              >
                your brief
              </textarea>

              <button
                type="submit"
                className="capitalize bg-themeOrange text-white px-4 py-2 lg:w-[30%] hover:bg-white hover:text-black hover:border-themeOrange border border-themeOrange hover:border mb-4 mt-8"
              >
                get started
              </button>
            </form>
          </div>
        </div>

        {/* contact-section  */}
        <div className="contact-section-contact py-16 lg:pt-28 pb-10 flex flex-col lg:flex-row gap-y-8 justify-between">
          <div className="lg:w-[47%] bg-[#fff] text-black p-4 flex flex-col gap-y-6">
            <h1 className="text-2xl font-medium text-themeOrange">
              Gujarat, India (HQ)
            </h1>
            <div className="">
              <Link
                href={"https://maps.app.goo.gl/cf7LSsm86BxyJ3t67"}
                className="flex gap-x-4"
              >
                <span className="text-xl text-themeOrange">
                  <FaLocationDot />
                </span>
                <div className="lg:text-[18px]">
                  408,Nalanda Enclave,Opp-Sudama
                  Resort,Pritamnagar,Paldi,<br /> Ahmedabad,Gujarat,India
                </div>
              </Link>
            </div>

            <div className="">
              <Link
                href={"tel:+919016850552"}
                className="flex items-center gap-x-4"
              >
                <span className="text-xl text-themeOrange">
                  <IoIosCall />
                </span>
                <div className="text-[18px]">+91 90168 50552</div>
              </Link>
            </div>
          </div>

          <div className="lg:w-[47%] bg-[#fff] text-black p-4 flex flex-col gap-y-6">
            <h1 className="text-2xl font-medium text-themeOrange capitalize">
              connect with us
            </h1>
            <div className="flex items-center gap-x-4">
              <span className="text-xl text-themeOrange">
                <FaInstagram />
              </span>
              <div className="text-[18px]">
                <Link
                  href={"https://www.instagram.com/valuablemultimedia"}
                  className=""
                >
                  @valuablemultimedia
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-x-4">
              <span className="text-xl text-themeOrange">
                <FaFacebook />
              </span>
              <div className="text-[18px]">
                <Link
                  href={"https://www.facebook.com/valuablemultimedia"}
                  className="capitalize"
                >
                  @valuablemultimedia
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-x-4">
              <span className="text-xl text-themeOrange">
                <IoLogoLinkedin />
              </span>
              <div className="text-[18px]">
                <Link
                  href={"https://www.linkedin.com/company/valuablemultimedia"}
                  className="capitalize"
                >
                  @valuablemultimedia
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-x-4">
              <span className="text-xl text-themeOrange">
                <FaXTwitter />
              </span>
              <div className="text-[18px]">
                <Link
                  href={"https://x.com/valuablemulti"}
                  className="capitalize"
                >
                  @valuablemulti
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
