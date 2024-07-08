"use client";

import React, { useEffect, useState } from "react";
import { PiGreaterThan } from "react-icons/pi";
import Image from "next/image";
import data from "@/data/blogs_data.json";

function BlogPage({ params }: any) {
  const id = params.id;
  const { blogs } = data;

  const [blogData, setBlogData] = useState({
    id: "",
    imgUrl: "",
    keyword: "",
    date: "",
    title: "",
    slug: "",
    content: [
      {
        data: "",
      },
      {
        title: "",
        data: "",
      },
      {
        bulks: [
          {
            mainTitle: "",
            subBulks: [
              {
                title: "",
                description: "",
              },
            ],
          },
        ],
      },
    ],
  });

  const fetchBlogFromId = async (id: any) => {
    const blog = await blogs.filter((blog: any) => {
      return blog.id === id;
    });

    console.log(blog[0]);

    return blog[0];
  };

  useEffect(() => {
    const fetchData = async () => {
      const blog: any = await fetchBlogFromId(id);
      await setBlogData(blog);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#fcfcfc] text-black">
      {/* direction banner  */}
      <div className="bg-[#ffffff] gap-x-3 capitalize py-6 flex items-center px-24 text-gray-400">
        <span>home</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>blogs</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>{blogData.title}</span>
      </div>

      {/* hero section  */}
      <div className="px-[10rem] py-10 flex flex-col gap-y-10">
        <div className="top flex justify-center">
          <div className="bg-themeOrange text-white px-3 py-1 inline-flex rounded-xl">
            {blogData.keyword}
          </div>
        </div>

        <h1 className="text-5xl font-medium text-center leading-[3.5rem]">
          {blogData.title}
        </h1>

        {/* <div className="mt-5 flex">
            <div className="capitalize flex gap-x-2">
                <span>Published on</span>
                <span className="font-semibold">April 2,2024</span>
            </div>
        </div> */}

        <div className="blog-banner mx-auto">
          <Image
            src={blogData.imgUrl}
            alt="blog-banner"
            height={1000}
            width={1000}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* introduction section  */}
      <div className="introduction px-[10rem] py-10 text-lg">
        {blogData.content[0].data}
      </div>

      {/* title-paragraphs  */}
      <div className="title-paragraphs px-[10rem] pb-5 flex flex-col gap-y-4">
        <h2 className="text-4xl font-semibold">{blogData.content[1].title}</h2>
        <p className="text-lg">{blogData.content[1].data}</p>
      </div>

      {blogData.content[2]?.bulks?.map((item, index) => (
        <div
          className="title-subtitle-paragraphs px-[10rem] py-5 flex flex-col gap-y-6"
          key={`bumper-content-${index + 1}`}
        >
          <h2 className="text-4xl font-semibold">{item.mainTitle}</h2>

          {item.subBulks?.map((item, index) => (
            <div
              className="flex flex-col gap-y-2"
              key={`mini-content-${index + 1}`}
            >
              <h3 className="text-2xl font-medium">{`${index+1}.`} &nbsp; {item.title}</h3>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
