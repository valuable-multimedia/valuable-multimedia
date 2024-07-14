"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      {/* for large screens  */}
      <div className="font-saira hidden lg:flex px-24 py-4 bg-themeBlue text-black justify-between items-center bg-[#fcfcfc]">
        <div className="left">
          <Link href={"/"} className="">
            <Image
              src={
                "https://res.cloudinary.com/dyvr2mbun/image/upload/v1719668005/ohioqrk8p2j27ck1wqb3.png"
              }
              alt="logo"
              height="200"
              width="200"
            />
          </Link>
        </div>

        <div className="right flex items-center">
          {/* nav links  */}
          <div className="nav-links flex items-center gap-x-20">
            <ul className="flex gap-x-10 items-center text-lg">
              <Link
                href={"/"}
                className="capitalize hover:text-themeOrange font-medium"
              >
                <li>Home</li>
              </Link>

              <Link
                href={"/about-us"}
                className="capitalize hover:text-themeOrange font-medium"
              >
                <li>about us</li>
              </Link>

              <li className="">
                <div className="flex w-full border-3 border-white items-center justify-center">
                  <div className="group relative cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="menu-hover my-2 capitalize mx-2 hover:text-themeOrange font-medium text-lg">
                        our services
                      </div>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="invisible absolute z-50 flex w-full flex-col bg-white py-1 px-4 text-gray-800 min-w-[470px] shadow-xl group-hover:visible">
                      <Link
                        className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeOrange md:mx-2 capitalize"
                        href={"/services/facebook-ads"}
                      >
                        Facebook Ads
                      </Link>
                      <Link
                        className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeOrange md:mx-2 capitalize"
                        href={"/services/instagram-ads"}
                      >
                        Instagram Ads
                      </Link>
                      <Link
                        className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeOrange md:mx-2 capitalize"
                        href={"/services/google-ads"}
                      >
                        PPC (google ads)
                      </Link>
                      <Link
                        className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeOrange md:mx-2 capitalize"
                        href={"/services/social-media-marketing"}
                      >
                        social media marketing
                      </Link>
                      <Link
                        className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeOrange md:mx-2 capitalize"
                        href={"/services/seo"}
                      >
                        search engine optimization (SEO)
                      </Link>
                      <Link
                        className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeOrange md:mx-2 capitalize"
                        href={"/services/ui-ux-designing"}
                      >
                        UI &amp; UX designing
                      </Link>
                      <Link
                        className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeOrange md:mx-2 capitalize"
                        href={"/services/website-development"}
                      >
                        website development
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <Link
                href={"/blogs"}
                className="capitalize hover:text-themeOrange font-medium"
              >
                <li>blogs</li>
              </Link>

              <Link
                href={"/contact-us"}
                className="capitalize hover:text-themeOrange font-medium"
              >
                <li>contact us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* for small screens */}
      <div className="relative lg:hidden w-full py-2 pl-3 pr-2 bg-black text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <Link href={"/"}>
              <Image
                src={
                  "https://res.cloudinary.com/dyvr2mbun/image/upload/v1719909599/ll3rkhggdrnrh1yh2lzb.png"
                }
                alt="logo"
                height="80"
                width="80"
              />
            </Link>
          </div>

          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-gray-800 text-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <Link href={"/"}>
                        <Image
                          src={
                            "https://res.cloudinary.com/dyvr2mbun/image/upload/v1719909599/ll3rkhggdrnrh1yh2lzb.png"
                          }
                          alt="logo"
                          height="80"
                          width="80"
                        />
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      <Link
                        href={"/"}
                        className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold`}
                        onClick={toggleMenu}
                      >
                        <span className="ml-0 text-base font-medium text-white">
                          Home
                        </span>
                      </Link>

                      <Link
                        href={"/about-us"}
                        className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold`}
                        onClick={toggleMenu}
                      >
                        <span className="ml-0 text-base font-medium text-white">
                          About Us
                        </span>
                      </Link>

                      <div
                        className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold`}
                      >
                        <span className="ml-0 text-base flex gap-x-2 items-center font-medium text-white">
                          Our Services{" "}
                          <span className="text-2xl hidden">
                            {" "}
                            <IoMdArrowDropdown />
                          </span>
                        </span>
                      </div>

                      <Link
                        href={"/services/facebook-ads"}
                        className={` my-1 bg-themeOrange mx-1 rounded-md p-3 text-sm font-semibold w-full`}
                        onClick={toggleMenu}
                      >
                        <span className="mx-1 ml-0 text-base font-medium text-white">
                          Facebook Ads
                        </span>
                      </Link>

                      <Link
                        href={"/services/instagram-ads"}
                        className={`bg-themeOrange mx-1 rounded-md p-3 text-sm font-semibold w-full`}
                        onClick={toggleMenu}
                      >
                        <span className="mx-1 ml-0 text-base font-medium text-white">
                          Instagram Ads
                        </span>
                      </Link>

                      <Link
                        href={"/services/google-ads"}
                        className={`bg-themeOrange mx-1 rounded-md p-3 text-sm font-semibold w-full`}
                        onClick={toggleMenu}
                      >
                        <span className="mx-1 ml-0 text-base font-medium text-white">
                          PPC (Google Ads)
                        </span>
                      </Link>

                      <Link
                        href={"/services/social-media-marketing"}
                        className={`bg-themeOrange mx-1 rounded-md p-3 text-sm font-semibold w-full`}
                        onClick={toggleMenu}
                      >
                        <span className="mx-1 ml-0 text-base font-medium text-white">
                          Social Media Marketing
                        </span>
                      </Link>

                      <Link
                        href={"/services/seo"}
                        className={`bg-themeOrange mx-1 rounded-md p-3 text-sm font-semibold w-full`}
                        onClick={toggleMenu}
                      >
                        <span className="mx-1 capitalize ml-0 text-base font-medium text-white">
                          search engine optimization (SEO)
                        </span>
                      </Link>

                      <Link
                        href={"/services/ui-ux-designing"}
                        className={`bg-themeOrange mx-1 rounded-md p-3 text-sm font-semibold w-full`}
                        onClick={toggleMenu}
                      >
                        <span className="mx-1 capitalize ml-0 text-base font-medium text-white">
                          UI & UX designing
                        </span>
                      </Link>

                      <Link
                        href={"/services/website-development"}
                        className={`bg-themeOrange mx-1 rounded-md p-3 text-sm font-semibold w-full`}
                        onClick={toggleMenu}
                      >
                        <span className="mx-1 capitalize ml-0 text-base font-medium text-white">
                          website development
                        </span>
                      </Link>

                      <Link
                        href={"/blogs"}
                        className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold`}
                        onClick={toggleMenu}
                      >
                        <span className="ml-0 text-base font-medium text-white">
                          Blogs
                        </span>
                      </Link>

                      <Link
                        href={"/contact-us"}
                        className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold`}
                        onClick={toggleMenu}
                      >
                        <span className="ml-0 text-base font-medium text-white">
                          Contact Us
                        </span>
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
