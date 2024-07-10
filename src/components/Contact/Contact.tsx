"use client";

import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div className="contact-section-home px-[9rem] py-16">
      <div className="flex">
        <div className="left w-[45%] flex justify-center items-center">
          <div className="p-4 bg-black text-white flex flex-col gap-y-4 shadow-lg  shadow-white">
            <h2 className="w-[90%] text-4xl font-medium capitalize">
              Are you planning for growth?
            </h2>
            <p className="text-themeOrange capitalize">
              We bring you the right leads.
            </p>
            <div className="capitalize flex gap-x-3 border-t pt-6 mb-8">
              <span>contact us @</span>
              <Link href={"tel:+919016850552"}>
                <span className="text-themeOrange">+91 90168 50552</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="right w-[55%] border bg-white shadow-lg p-6 flex flex-col gap-y-6">
          <div className="up">
            <h3 className="text-themeOrange capitalize text-xl font-semibold">
              Drop us a line! We&apos;d love to hear from you.
            </h3>
          </div>

          <div className="down w-[97%] mx-auto">
            <form action="" className="flex flex-col gap-y-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="border-b-2 border-gray-500 w-full px-3 py-2 focus:outline-none focus:border-themeOrange capitalize"
                autoComplete="off"
              />

              <div className="flex gap-x-8">
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="company name"
                  className="border-b-2 border-gray-500 px-3 py-2 focus:outline-none focus:border-themeOrange capitalize w-1/2"
                  autoComplete="off"
                />

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border-b-2 border-gray-500 px-3 py-2 focus:outline-none focus:border-themeOrange capitalize w-1/2"
                  autoComplete="off"
                />
              </div>

              <div className="flex gap-x-8">
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="mobile no"
                  className="border-b-2 border-gray-500 px-3 py-2 focus:outline-none focus:border-themeOrange capitalize w-full"
                  autoComplete="off"
                />
              </div>

              <textarea
                name="message"
                id="message"
                cols={10}
                rows={5}
                className="border-b-2 border-gray-500 px-3 py-2 focus:outline-none focus:border-themeOrange capitalize w-full text-gray-500"
              >
                your message
              </textarea>

              <button
                type="submit"
                className="capitalize bg-themeOrange text-white px-4 py-2 w-[20%] hover:bg-white hover:text-black hover:border-themeOrange border border-themeOrange hover:border mb-4"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
