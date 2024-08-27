"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { PiGreaterThan } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function ContactUsPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Thank you for your message. We'll contact you soon");
          },
          (error) => {
            console.log(error.text);
            toast.error("Error while sending message");
          }
        );
    }
    form.current.reset();
  };

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
              <h2 className="text-4xl lg:text-5xl font-medium">
                Prefer to talk?
              </h2>

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

          <div className="right lg:w-1/2 lg:px-10 flex items-center">
            <form
              action="#"
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-y-6 w-full"
            >
              <div className="flex flex-col gap-y-2">
                <label htmlFor="fullName">Full Name</label>
                <div className="border px-3 py-2 flex items-center gap-x-2 rounded-full border-slate-400">
                  <div className="text-gray-500 text-xl">
                    <CgProfile />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    placeholder="Enter full name"
                    className=" capitalize focus:outline-none w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <label htmlFor="email">Email</label>
                <div className="border px-3 py-2 flex items-center gap-x-2 rounded-full border-slate-400">
                  <div className="text-gray-500 text-xl">
                    <MdEmail />
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter email ID"
                    className="focus:outline-none w-full"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <label htmlFor="number">Phone Number</label>
                <div className="border px-3 py-2 flex items-center gap-x-2 rounded-full border-slate-400">
                  <div className="text-gray-500 text-xl">
                    <IoCall />
                  </div>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Enter phone number"
                    className=" capitalize focus:outline-none w-full"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <label htmlFor="lookingFor">Looking For</label>
                <div className="border px-3 py-2 flex items-start gap-x-4 rounded-xl border-slate-400">
                  {/* <div className="text-gray-500 text-xl">
                    <IoCall />
                  </div> */}
                  <textarea
                    name="lookingFor"
                    id="lookingFor"
                    cols={30}
                    rows={4}
                    className="w-full focus:outline-none"
                    required
                  >
                    Enter your main text here...
                  </textarea>
                </div>
              </div>

              <button
                type="submit"
                className="capitalize flex gap-x-3 justify-center items-center bg-themeOrange text-white px-4 py-2 rounded-full hover:bg-white hover:text-black hover:border-themeOrange border border-themeOrange hover:border mb-4 mt-0"
              >
                <span>submit</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* contact-section  */}
        <div className="contact-section-contact py-16 lg:pt-28 pb-10 flex flex-col lg:flex-row gap-y-8 justify-between">
          <div className="lg:w-[47%] bg-[#fff] text-black p-4 flex flex-col gap-y-6">
            <h2 className="text-2xl font-medium text-themeOrange">
              Gujarat, India (HQ)
            </h2>
            <div className="">
              <Link
                href={"https://maps.app.goo.gl/cf7LSsm86BxyJ3t67"}
                className="flex gap-x-4"
              >
                <span className="text-xl text-themeOrange">
                  <FaLocationDot />
                </span>
                <div className="lg:text-[18px]">
                  408,Nalanda Enclave,Opp-Sudama Resort,Pritamnagar,Paldi,
                  <br /> Ahmedabad,Gujarat,India
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
            <h2 className="text-2xl font-medium text-themeOrange capitalize">
              connect with us
            </h2>
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
