"use client";

import React from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-section-home px-5 lg:px-[9rem] py-5 lg:py-16">
      <div className="flex flex-col lg:flex-row">
        <div className="left lg:w-[45%] flex justify-center items-center">
          <div className="p-4 bg-black text-white flex flex-col gap-y-4 shadow-lg  shadow-white">
            <h2 className="lg:w-[90%] text-3xl lg:text-4xl font-medium capitalize">
              Are you planning for growth?
            </h2>
            <p className="text-themeOrange capitalize">
              We bring you the right leads.
            </p>
            <div className="capitalize flex gap-x-3 border-t pt-6 mb-2 lg:mb-8">
              <span>contact us @</span>
              <Link href={"tel:+919016850552"}>
                <span className="text-themeOrange">+91 90168 50552</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="right lg:w-[55%] border bg-white shadow-lg p-6 flex flex-col gap-y-6">
          <div className="up">
            <h3 className="text-themeOrange capitalize text-2xl font-semibold">
              let&apos;s get in touch
            </h3>
          </div>

          <div className="down">
            <form action="" className="flex flex-col gap-y-6">
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
                    placeholder="Enter first name"
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
                    className=" capitalize focus:outline-none w-full"
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
      </div>
    </div>
  );
}

export default Contact;
