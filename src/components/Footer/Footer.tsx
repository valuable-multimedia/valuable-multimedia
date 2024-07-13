"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/nav_links_data.json";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const { navLinks, mainNavLinks } = data;

  return (
    <div className="bg-black flex justify-between flex-col text-white px-[10rem] pt-10 gap-y-10 pb-2">
      <div className="flex up justify-between">
        <div className="left w-[20%]">
          <div className="up flex flex-col gap-y-8">
            <Link href={"/"}>
              <Image
                src={
                  "https://res.cloudinary.com/dyvr2mbun/image/upload/v1719909599/ll3rkhggdrnrh1yh2lzb.png"
                }
                alt="logo"
                height={200}
                width={200}
              />
            </Link>

            <p>
              Valuable Multimedia is a digital marketing agency that combines
              innovative creativity with data-driven performance to help brands
              standout.
            </p>
          </div>
        </div>

        <div className="middle w-[20%] flex flex-col gap-y-4">
          <div className="up">
            <h2 className="capitalize text-2xl font-medium border-b border-white pb-4">
              services
            </h2>
          </div>

          <div className="down">
            <ul className="flex flex-col gap-y-2">
              {navLinks.map((item, index) => (
                <li key={`nav-item-${index + 1}`}>
                  <Link
                    href={item.slug}
                    className="hover:border-b hover:border-white capitalize"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="middle-two w-[15%] flex flex-col gap-y-4">
          <div className="up">
            <h2 className="capitalize text-2xl font-medium border-b border-white pb-4">
              quick links
            </h2>
          </div>

          <div className="down">
            <ul className="flex flex-col gap-y-2 capitalize">
              {mainNavLinks.map((item, index) => (
                <li key={`nav-main-item-${index + 1}`}>
                  <Link
                    href={item.slug}
                    className="hover:border-b hover:border-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="right w-[35%] flex flex-col gap-y-4">
          <div className="up">
            <h2 className="capitalize text-2xl font-medium border-b border-white pb-4">
              contact us
            </h2>
          </div>

          <div className="down flex flex-col gap-y-6">
            <div className="address flex gap-x-4">
              <span className="text-xl">
                <FaLocationDot />
              </span>
              <div className="">
                <Link href={"https://maps.app.goo.gl/cf7LSsm86BxyJ3t67"} className="">
                  408,Nalanda Enclave,Opp-Sudama Resort, Pritamnagar,Paldi,Ahmedabad,Gujarat,India
                </Link>
              </div>
            </div>

            <div className="address">
              <Link href={"tel:+919016850552"} className="flex gap-x-4">
                <span className="text-xl">
                  <IoIosCall />
                </span>
                <div className="">+91 90168 50552</div>
              </Link>
            </div>

            <div className="address flex flex-col gap-x-4">
              <span className="text-xl capitalize border-b-[2px] pb-4">
                social media links
              </span>
              <div className="mt-4 text-3xl flex gap-x-4">
                <Link
                  href={"https://www.instagram.com/valuablemultimedia"}
                  className="hover:text-themeOrange transition-all"
                >
                  <FaInstagram />
                </Link>

                <Link
                  href={"https://www.facebook.com/valuablemultimedia"}
                  className="hover:text-themeOrange transition-all"
                >
                  <FaFacebook />
                </Link>

                <Link
                  href={"https://www.linkedin.com/company/valuablemultimedia"}
                  className="hover:text-themeOrange transition-all"
                >
                  <IoLogoLinkedin />
                </Link>

                <Link
                  href={"https://x.com/valuablemulti"}
                  className="hover:text-themeOrange transition-all"
                >
                  <FaXTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 text-sm">
        <div className="w-full h-[1px] bg-gray-500"></div>
        <div className="down flex justify-between items-center">
          <div className="capitalize">
            {" "}
            &copy; VALUABLE MULTIMEDIA 2024 - all rights reserved{" "}
          </div>
          <div className="capitalize flex items-center gap-x-4">
            <Link
              href={"/terms-and-conditions"}
              className="hover:text-themeOrange transition-all"
            >
              Terms and Conditions
            </Link>
            <div className="">|</div>
            <Link
              href={"/privacy-policy"}
              className="hover:text-themeOrange transition-all"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
