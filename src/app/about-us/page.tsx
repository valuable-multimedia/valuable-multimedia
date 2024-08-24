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
      <div className="bg-[#ffffff] gap-x-3 capitalize py-6 flex items-center px-5 lg:px-24 text-gray-400">
        <span>home</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>about</span>
      </div>

      {/* hero section  */}
      <div className="hero-section-about px-5 lg:px-[10rem] py-10 lg:py-16">
        <div className="heading text-center flex flex-col gap-y-4 lg:gap-y-6">
          <h3 className="text-themeOrange capitalize text-lg lg:text-xl font-semibold">
            we are valuable multimedia
          </h3>
          <h1 className="text-3xl lg:text-5xl font-medium w-[85%] mx-auto leading-[2.5rem] lg:leading-[4rem]">
            For your brand and For your digital growth,{" "}
            <span className="text-themeOrange">
              Choose ORGANIC, Choose VALUABLE MULTIMEDIA!{" "}
            </span>
          </h1>
        </div>

        <div className="banner mt-6 lg:mt-14">
          <img
            src={
              "https://res.cloudinary.com/dyvr2mbun/image/upload/v1720759373/about-us/gpnvwcom6ro5gf3olibd.jpg"
            }
            alt="about-banner-img"
            height={700}
            width={1570}
            className="mx-auto"
          />
        </div>
      </div>

      {/* intro section  */}
      <div className="intro-section-about px-5 lg:px-[10rem] py-10 lg:py-16 bg-[#ececec]">
        <div className="flex flex-col lg:flex-row gap-y-6">
          <div className="left lg:w-[30%]">
            <h1 className="capitalize text-3xl lg:text-5xl">take a dive</h1>
          </div>

          <div className="right lg:w-[70%] flex flex-col gap-y-5">
            <p>
              Valuable Multimedia is dedicated to delivering exceptional ROI in
              digital marketing by optimizing your budget for maximum
              effectiveness. Our expertise lies in crafting campaigns that not
              only meet but exceed your business goals while minimizing costs.
              We strategically leverage platforms like Facebook and Google Ads
              to ensure your investment yields significant returns.
            </p>
            <p>
              With our proven track record, we focus on driving results that
              matter most to your bottom line. Whether it&apos;s through
              targeted Facebook Ads that engage your ideal audience or Google
              Ads campaigns that attract high-quality traffic, we prioritize
              efficiency and impactful outcomes.
            </p>
            <p>
              At Valuable Multimedia, we understand the importance of money
              spent, which is why we continuously refine our strategies based on
              data-driven insights. This approach not only enhances campaign
              performance but also ensures that your marketing efforts are
              aligned with your specific objectives.
            </p>
            <p>
              Choose Valuable Multimedia for digital marketing solutions that
              promise superior ROI, empowering your business to thrive and
              succeed in today&apos;s competitive landscape.
            </p>
          </div>
        </div>
      </div>

      {/* teams section  */}
      <div className="teams-section-about px-5 lg:px-[12rem] py-10 lg:py-16 flex flex-col gap-y-6 lg:gap-y-10">
        <div className="up">
          <h2 className="text-3xl lg:text-4xl font-medium capitalize">
            meet our team
          </h2>
        </div>

        <div className="down flex flex-wrap justify-evenly lg:justify-center lg:gap-x-10 gap-y-8">
          {team.map((item, index) => (
            <div
              className="w-[45%] lg:w-[30%]"
              key={`team member ${index + 1}`}
            >
              <img
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
      <div className="show-section-about px-5 lg:px-[10rem] py-10 lg:py-16 flex flex-col gap-y-14">
        <div className="heading flex flex-col gap-y-4">
          <h3 className="text-themeOrange text-lg lg:text-xl font-semibold">
            This characteristic sets us apart as
          </h3>
          <h1 className="text-3xl lg:text-5xl capitalize">
            an exceptional partner in driving growth.
          </h1>
        </div>

        <div className="dowm flex flex-wrap justify-evenly gap-y-8 lg:justify-start gap-x-4">
          {aInformations.map((item, index) => (
            <div
              className="show-box w-[40%] lg:w-[20%] flex flex-col gap-y-6"
              key={`show-box-${index + 1}`}
            >
              <div className="text-4xl lg:text-5xl text-themeOrange">
                {item.icon}
              </div>
              <p className="text-gray-500 lg:text-lg">{item.para}</p>
            </div>
          ))}
        </div>
      </div>

      {/* stats section  */}
      <div className="stats-section-about px-5 lg:px-[10rem] pb-10 lg:pb-16 bg-[#ececec]">
        <div className="flex flex-col lg:flex-row gap-y-6 gap-x-10">
          <div className="left lg:w-[35%] bg-themeOrange text-white px-8 py-10">
            <h1 className="text-4xl font-medium capitalize leading-[3rem]">
              Experience what we bring to the table
            </h1>
          </div>

          <div className="right lg:w-[65%] flex items-center px-2 lg:px-8">
            <div className="text-black w-full flex items-center">
              <div
                ref={ref}
                className="flex justify-center flex-wrap w-full items-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={controls}
                  transition={{ duration: 1 }}
                  className="flex justify-center lg:justify-start flex-wrap w-full flex-row gap-x-4 gap-y-10 lg:gap-y-14 my-auto"
                >
                  {stats?.map((item, index) => (
                    <div
                      className="w-[30%] lg:w-[30%] text-black flex flex-col gap-x-4 gap-y-4 lg:gap-y-6"
                      key={index}
                    >
                      <span className="text-4xl lg:text-[2.5rem] font-semibold min-w-[120px] lg:min-w-[80px] flex gap-x-4 items-center text-gray-400">
                        <CountUp
                          start={inView ? 0 : 0} // Start counting only when in view
                          end={item.number}
                          duration={4}
                          className="font-medium text-themeOrange text-4xl lg:text-7xl"
                        />
                        {item.sign}
                      </span>
                      <span className=" lg:text-xl text-gray-500 font-poppins font-normal capitalize">
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
      <div className="clients-section-home px-5 lg:px-[10rem] py-10 lg:py-16 flex flex-col gap-y-8 mb-4 lg:mb-0 lg:gap-y-14">
        <div className="up">
          <h1 className="text-black capitalize text-3xl lg:text-4xl font-semibold">
            Growing List Of Happy Clients
          </h1>
        </div>

        <div className="down flex flex-wrap justify-between gap-y-8">
          {clients.map((item, index) => (
            <div
              className="client-box w-[45%] lg:w-[30%] flex justify-center items-center hover:border-b-[2px] hover:border-themeOrange border-b-[2px] border-white transition-all cursor-pointer pb-2"
              key={`client ${index + 1}`}
            >
              <img src={item} alt="client-logo" height={100} width={300} />
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
