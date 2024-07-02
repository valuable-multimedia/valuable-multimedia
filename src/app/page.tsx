"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/home_data.json";
import informations from "@/data/homeInformation";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const {
    homeServices,
    toolsOne,
    toolsTwo,
    industries,
    clients,
    blogs,
    testimonials,
  } = data;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <main className="flex flex-col bg-[#fcfcfc]">
      {/* hero section  */}
      <div className="flex justify-center items-center hero-section-home px-24 py-16 min-h-[80vh] bg-[#ececec] hero-bg-gradient">
        <div className="left flex flex-col gap-y-16 w-[55%]">
          <h1 className="flex flex-col gap-y-2">
            <span className="text-2xl text-themeOrange font-medium">
              Driving the next wave of
            </span>
            <span className="text-6xl leading-[4.5rem]">
              marketing with integrated strategy, design{" "}
              <span className="text-themeOrange">&amp;</span> technology.
            </span>
          </h1>

          <Link href={"/"} className="mr-auto">
            <button className="bg-black text-white hover:bg-white hover:border-b hover:border-themeOrange transition-all hover:text-black font-medium px-4 py-3 text-lg">
              See what We do
            </button>
          </Link>
        </div>

        <div className="right flex justify-center items-center w-[45%] border border-red-500 font-bold min-h-full h-[50vh]">
          Banner Image
        </div>
      </div>

      {/* content section */}
      <div className="content-section-home px-[10rem] py-16">
        <div className="flex gap-y-6 flex-col">
          <div className="up">
            <h1 className="text-5xl capitalize">
              We&apos;re Result Driven Digital Marketing Agency
            </h1>
          </div>
          <div className="down flex">
            <div className="left w-[80%] flex flex-col gap-y-3">
              <h4 className="text-2xl">Why sweat online presence?</h4>
              <p className="text-justify">
                over years of rigor, consistency, sincerity, and dedication.
                With our gamut of fully integrated digital marketing services,
                we provide significant, sustainable, and measurable business
                growth. Maintaining the intrinsic value of your brand digitally
                and making sure that your customers can experience it at every
                touchpoint is our motto. It is right to say that we are
                result-oriented, as we wholeheartedly love and practice SEO.
              </p>
            </div>
            <div className="right w-[20%] flex justify-center items-center">
              <ul className="flex flex-col gap-y-2 text-lg text-themeOrange font-semibold capitalize">
                <Link href={"/about-us"}>
                  <li>about</li>
                </Link>
                <Link href={"/blogs"}>
                  <li>our blogs</li>
                </Link>
                <Link href={"/contact-us"}>
                  <li>contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* services section  */}
      <div className="service-section-home px-[10rem] pb-24 py-20 bg-[#ececec] flex flex-col gap-y-8">
        <div className="up">
          <h1 className="text-themeOrange text-xl font-semibold">
            what we are best at
          </h1>
        </div>

        <div className="lower flex gap-y-10 justify-between border flex-wrap">
          {homeServices.map((item, index) => (
            <Link
              href={item.slug}
              key={`service-item-[${index}]`}
              className="link-item capitalize text-3xl font-light w-[30%] leading-[2.7rem] border-b border-themeOrange pb-4 hover:text-themeOrange transition-all ease-in-out"
            >
              <div className="">{item.name}</div>
              <div className="">{item.name2}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* info section  */}
      <div className="info-section-home flex flex-col gap-y-16 px-[10rem] py-14">
        <div className="up flex flex-col gap-y-3">
          <h3 className="text-themeOrange text-xl font-semibold">
            Tailored Solutions for our clients
          </h3>
          <h1 className="capitalize text-5xl">
            Take Your Business To Newer Heights
          </h1>
        </div>

        <div className="down flex flex-wrap justify-between gap-y-8">
          {informations.map((item, index) => (
            <div
              className="item-detail-box flex flex-col gap-y-4 w-[30%]"
              key={`info ${index + 1}`}
            >
              <div className="text-6xl text-themeOrange">{item.icon}</div>
              <h2 className="text-3xl capitalize flex flex-col">
                <span>{item.title}</span>
                <span>{item.title2}</span>
              </h2>
              <p className="text-justify">{item.description}</p>
              <div className=""></div>
            </div>
          ))}
        </div>
      </div>

      {/* tools section  */}
      <div className="tools-section-home px-[10rem] py-16 flex flex-col gap-y-10">
        <div className="up flex flex-col gap-y-4">
          <h1 className="text-5xl font-medium">Tools of the Trade</h1>
          <p className="text-gray-500">
            Using top tools for optimal outcomes and deeper insights.
          </p>
        </div>

        <div className="down">
          <div className="top flex justify-between border-b border-gray-300 pb-4">
            {toolsOne.map((item, index) => (
              <Image
                src={item}
                alt="tools-icon"
                height={110}
                width={110}
                key={`tools-one-image ${index + 1}`}
              />
            ))}
          </div>

          <div className="bottom flex justify-between pb-4">
            {toolsTwo.map((item, index) => (
              <Image
                src={item}
                alt="tools-icon"
                height={110}
                width={110}
                key={`tools-one-image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* poster section  */}
      <div className="poster-section-home border-[2px] border-themeOrange mx-16 mb-16 py-10 px-32">
        <div className="flex">
          <div className="left flex flex-col gap-y-6 justify-center pr-8 w-1/2">
            <div className="up">
              <h1 className="capitalize text-5xl font-medium leading-[3.2rem] text-themeOrange">
                we understand your love for heights
              </h1>
            </div>

            <p>
              Specialization doesn&apos;t happen without passion. We breathe SEO
              and hence we are known for being the best SEO service in
              Ahmedabad. We are elated every time we find ourselves on the top
              of searches when someone looks for the &quot;top SEO company in
              Ahmedabad&quot;. Having said that, we thrive to give the same
              taste of success to our clientele. If heights give you an
              adrenaline rush then AONE SEO is the place for you.
            </p>
          </div>

          <div className="right w-1/2">
            <Image
              src="https://res.cloudinary.com/dyvr2mbun/image/upload/v1719813878/bw0vaqxgx7wvhcsy8g0l.webp"
              alt="hand-image"
              height={400}
              width={600}
            />
          </div>
        </div>
      </div>

      {/* sectors section  */}
      <div className="sectors-section-home bg-[#ececec] px-[10rem] py-16">
        <div className="flex">
          <div className="left w-[40%] flex flex-col justify-center gap-y-6">
            <h3 className="text-themeOrange capitalize text-xl font-semibold">
              Delivering services
            </h3>

            <h1 className="text-5xl w-[60%] border font-medium leading-[3.4rem]">
              Across Multiple Industries
            </h1>
          </div>

          <div className="right bg-white w-[60%] gap-y-8 p-8 rounded-lg flex flex-wrap justify-between">
            {industries.map((item, index) => (
              <div
                className="item-box w-[15%] flex flex-col gap-y-2 justify-center items-center"
                key={`industry ${index + 1}`}
              >
                <Image
                  src={item.imgUrl}
                  alt="industry-icon"
                  height={50}
                  width={50}
                />
                <h4 className="capitalize text-sm">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* clients section  */}
      <div className="clients-section-home px-[10rem] py-16 flex flex-col gap-y-10">
        <div className="up">
          <h3 className="text-themeOrange capitalize text-xl font-semibold">
            Serving distinct &amp; influential businesses
          </h3>
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
      <div className="testimonials-section-home flex bg-[#ececec] mx-10 rounded-xl px-[8rem] pt-16 pb-12">
        <div className="left w-[20%]">
          <Image
            src={
              "https://res.cloudinary.com/dyvr2mbun/image/upload/v1719837575/home/uetf6qm9tnh5j3mosphg.webp"
            }
            alt="test-hand-image"
            width={200}
            height={200}
          />
        </div>

        <div className="middle w-[60%] flex flex-col gap-y-16">
          <h2 className="text-4xl text-gray-400 text-center">
            That&apos;s what our Clients said!
          </h2>

          <div className=" w-[80%] mx-auto">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={`testimonial ${index + 1}`} className="testimonial">
                  <p className="text-center text-lg">
                    <span className="border-b border-themeOrange leading-[2rem] pb-1">
                      {testimonial.feedback}
                    </span>
                  </p>

                  <div className="mt-16 text-center capitalize">
                    <h2 className="text-xl text-themeOrange font-medium">
                      hirem patel
                    </h2>
                    <div className="text-gray-400 text-xl">
                      {testimonial.client}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="right w-[20%]">
          <Image
            src={
              "https://res.cloudinary.com/dyvr2mbun/image/upload/v1719837577/home/fjgc1awtgm9v4eum5txy.webp"
            }
            alt="test-hand-image"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* blogs section  */}
      <div className="blogs-section-home px-[10rem] py-16 flex flex-col gap-y-10">
        <div className="up">
          <h2 className="capitalize text-3xl">recent blogs</h2>
        </div>

        <div className="down flex justify-between w-full">
          {blogs.map((item, index) => (
            <Link
              href={item.slug}
              key={`blogs ${index + 1}`}
              className="w-[30%]"
            >
              <div className="blog-card flex flex-col gap-y-6 w-full">
                <div className="up">
                  <Image
                    src={item.imgUrl}
                    alt="blog-image"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="down flex flex-col gap-y-3">
                  <div className="date text-sm capitalize">{item.date}</div>
                  <div className="text-xl font-semibold">{item.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* contact section  */}
      <div className="contact-section-home px-[9rem] py-16">
        <div className="flex">
          <div className="left w-[45%] flex justify-center items-center">
            <div className="p-4 bg-black text-white flex flex-col gap-y-4 shadow-lg  shadow-white">
              <h2 className="w-[90%] text-4xl font-medium">
                Are you planning for growth?
              </h2>
              <p className="text-themeOrange">We bring you the right leads.</p>
              <div className="capitalize flex gap-x-3 border-t pt-6 mb-8">
                <span>contact us @</span>
                <span className="text-themeOrange">+91 85113 93399</span>
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
                    className="border-b-2 border-gray-500 px-3 py-2 focus:outline-none focus:border-themeOrange capitalize w-1/2"
                    autoComplete="off"
                  />

                  <input
                    type="email"
                    name="text"
                    id="text"
                    placeholder="website URL"
                    className="border-b-2 border-gray-500 px-3 py-2 focus:outline-none focus:border-themeOrange capitalize w-1/2"
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
                  className="capitalize bg-themeOrange text-white px-4 py-2 w-[20%] hover:bg-white hover:text-black hover:border-themeOrange hover:border mb-4"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
