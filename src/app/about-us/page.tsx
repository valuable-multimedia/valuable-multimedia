"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiGreaterThan } from "react-icons/pi";
import aInformations from "@/data/aboutInformation";
import data from "@/data/about_data.json";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import homeData from "@/data/home_data.json";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";

function AboutUsPage() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { team, stats } = data;
  const { clients } = homeData;

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);

  return (
    <div className="bg-[#fcfcfc] text-black">
      {/* direction banner  */}
      <div className="bg-[#ffffff] gap-x-3 capitalize py-6 flex items-center px-24 text-gray-400">
        <span>home</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>about</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-about px-[10rem] py-16">
        <div className="heading text-center flex flex-col gap-y-6">
          <h3 className="text-themeOrange capitalize text-xl font-semibold">
            we are valuable multimedia
          </h3>
          <h1 className="text-5xl font-medium w-[85%] mx-auto leading-[4rem]">
            For your gut and For your digital growth,{" "}
            <span className="text-themeOrange">
              Choose ORGANIC, Choose VALUABLE MULTIMEDIA!{" "}
            </span>
          </h1>
        </div>

        <div className="banner mt-14">
          <Image
            src={
              "https://res.cloudinary.com/dyvr2mbun/image/upload/v1719936698/home/nykhniqssbvm5guyi4ye.webp"
            }
            alt="about-banner-img"
            height={700}
            width={870}
            className="mx-auto"
          />
        </div>
      </div>

      {/* intro section  */}
      <div className="intro-section-about px-[10rem] py-16 bg-[#ececec]">
        <div className="flex">
          <div className="left w-[30%]">
            <h1 className="capitalize text-5xl">take a dive</h1>
          </div>

          <div className="right w-[70%] flex flex-col gap-y-5">
            <p>
              Keeping it simple, we are a full-service digital marketing agency
              in Ahmedabad specializing in SEO (Search engine optimization).
            </p>
            <p>
              A specialization is an outcome of years of learning, application,
              and improvisation. Maturing with age, we earned the title of being
              the best SEO company in Ahmedabad.
            </p>
            <p>
              Though we breathe SEO, our services extend to every digital
              vertical such as Social media, PPC, App Store Optimization SEO,
              eCommerce SEO, Online reputation management, Content marketing,
              Creative Branding, UI/UX Design, Web Development and eCommerce
              Development.
            </p>
            <p>
              Individual departments at VALUABLE MULTIMEDIA endure the best talents to produce
              well-thought and qualitative work.
            </p>
            <p>
              Together, we promote your business objective with our range of
              services. Tailoring impeccable strategies, we achieve
              transformational results.
            </p>
          </div>
        </div>
      </div>

      {/* teams section  */}
      <div className="teams-section-about px-[12rem] py-16 flex flex-col gap-y-10">
        <div className="up">
          <h2 className="text-4xl font-medium capitalize">meet our team</h2>
        </div>

        <div className="down flex flex-wrap justify-center gap-x-10 gap-y-8">
          {team.map((item, index) => (
            <div className="w-[30%]" key={`team member ${index + 1}`}>
              <Image
                src={item}
                alt="team-image"
                height={300}
                width={300}
                className="rounded-xl bg-[#ececec] mx-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* show section */}
      <div className="show-section-about px-[10rem] py-16 flex flex-col gap-y-14">
        <div className="heading flex flex-col gap-y-4">
          <h3 className="text-themeOrange text-xl font-semibold">
            This characteristic sets us apart as
          </h3>
          <h1 className="text-5xl">
            an exceptional partner in driving growth.
          </h1>
        </div>

        <div className="dowm flex gap-x-4">
          {aInformations.map((item, index) => (
            <div
              className="show-box w-[20%] flex flex-col gap-y-6"
              key={`show-box-${index + 1}`}
            >
              <div className="text-5xl text-themeOrange">{item.icon}</div>
              <p className="text-gray-500 text-lg">{item.para}</p>
            </div>
          ))}
        </div>
      </div>

      {/* stats section  */}
      <div className="stats-section-about px-[10rem] pb-16 bg-[#ececec]">
        <div className="flex gap-x-10">
          <div className="left w-[35%] bg-themeOrange text-white px-8 py-10">
            <h1 className="text-4xl font-medium leading-[3rem]">
              Experience what we bring to the table
            </h1>
          </div>

          <div className="right w-[65%] flex items-center px-8">
            <div className="text-black w-full flex items-center">
              <div
                ref={ref}
                className="flex justify-center w-full items-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={controls}
                  transition={{ duration: 1 }}
                  className="flex lg:flex-wrap w-full flex-col lg:flex-row gap-x-4 gap-y-10 lg:gap-y-14 my-auto"
                >
                  {stats?.map((item, index) => (
                    <div
                      className="lg:w-[30%] text-black w-full flex flex-col gap-x-4 gap-y-6"
                      key={index}
                    >
                      <span className="text-4xl lg:text-[2.5rem] font-semibold min-w-[120px] lg:min-w-[80px] flex gap-x-4 items-center text-gray-400">
                        <CountUp
                          start={inView ? 0 : 0} // Start counting only when in view
                          end={item.number}
                          duration={4}
                          className="font-medium text-themeOrange text-7xl"
                        />
                        {item.sign}
                      </span>
                      <span className="text-xl text-gray-500 font-poppins font-normal capitalize">
                        {item.name1} <br /> {item.name2}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* clients section  */}
      <div className="clients-section-home px-[10rem] py-16 flex flex-col gap-y-14">
        <div className="up">
          <h1 className="text-black capitalize text-4xl font-semibold">
            Growing List Of Happy Clients
          </h1>
        </div>

        <div className="down flex flex-wrap justify-between gap-y-8">
          {clients.map((item, index) => (
            <div
              className="client-box w-[30%] flex justify-center items-center hover:border-b-[2px] hover:border-themeOrange border-b-[2px] border-white transition-all cursor-pointer pb-2"
              key={`client ${index + 1}`}
            >
              <Image src={item} alt="client-logo" height={100} width={300} />
            </div>
          ))}
        </div>
      </div>

      {/* testimonials section  */}
      <Testimonials />

      {/* contact section  */}
      <div className="py-4">
      <Contact />
      </div>
    </div>
  );
}

export default AboutUsPage;
