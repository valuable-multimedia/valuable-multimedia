"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/nav_links_data.json";

function Footer() {
  const { navLinks, mainNavLinks } = data;

  return (
    <div className="bg-black flex justify-between text-white px-[10rem] py-10">
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
            Wolfable is a digital marketing agency that combines innovative
            creativity with data-driven performance to help brands standout.
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
                  className="hover:border-b hover:border-white"
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
          <ul className="flex flex-col gap-y-2">
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

      <div className="right w-[35%] border flex flex-col gap-y-4">
        <div className="up">
          <h2 className="capitalize text-2xl font-medium border-b border-white pb-4">
            contact us
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
