"use client";

import React, { useEffect, useState } from "react";
import { PiGreaterThan } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

function BlogPage2() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopy = () => {
    const currentUrl = document.URL; // Using document.URL to get the current page URL
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        console.log("copied");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });

    setCopied(true);

    // Hide the "Copied" message after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-[#fcfcfc] text-black">
      {/* direction banner  */}
      <div className="bg-[#ffffff] gap-x-3 capitalize py-6 flex items-center px-5 lg:px-24 text-gray-400">
        <span>home</span>
        <span>
          <PiGreaterThan />
        </span>
        <span>blogs</span>
        <span>
          <PiGreaterThan />
        </span>
        <span className="">
          Boost Your Business Growth with Targeted PPC Campaigns
        </span>
      </div>

      {/* hero section  */}
      <div className="px-5 lg:px-[10rem] py-10 flex flex-col gap-y-10">
        <div className="top flex justify-center">
          <div className="bg-themeOrange text-white px-3 py-1 inline-flex rounded-xl">
            PPC Campaigns
          </div>
        </div>

        <h1 className="text-4xl lg:text-5xl font-medium text-center lg:leading-[3.5rem]">
          Boost Your Business Growth with Targeted PPC Campaigns
        </h1>

        {/* <div className="mt-5 flex">
            <div className="capitalize flex gap-x-2">
                <span>Published on</span>
                <span className="font-semibold">April 2,2024</span>
            </div>
        </div> */}

        <div className="blog-banner mx-auto">
          <img
            src={
              "https://res.cloudinary.com/dyvr2mbun/image/upload/v1726108566/blogs/wvakuw6brke7rgz1lvwj.jpg"
            }
            alt="blog-banner"
            height={600}
            width={600}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* publisher section  */}
      <div className="publisher-details px-5 lg:px-[10rem] flex flex-col lg:flex-row gap-y-4 justify-between items-center text-gray-500 gap-x-4">
        <div className="flex items-center gap-x-4">
          <h3 className="flex gap-x-1 capitalize">
            <span>by</span>
            <span className="font-semibold">gaurav khatri</span>
          </h3>
          <div className="text-gray-300 text-sm">
            <FaCircle />
          </div>
          <h3>12 September, 2024</h3>
        </div>

        <div className="flex gap-x-2 text-2xl">
          <div className="relative">
            <IoIosLink onClick={handleCopy} className="cursor-pointer" />

            {copied && (
              <span className="absolute top-[-20px] left-0 bg-gray-200 text-black text-sm px-2 py-1 rounded">
                Copied!
              </span>
            )}
          </div>
          <Link
            href={`https://api.whatsapp.com/send?text=Check out this page: ${currentUrl}`}
          >
            <FaWhatsapp />
          </Link>
          <Link href="https://www.instagram.com/direct/inbox/">
            <FaInstagram />
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
          >
            <FaFacebook />
          </Link>
          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
          >
            <IoLogoLinkedin />
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?text=Check out this page: ${currentUrl}`}
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>

      {/* introduction section  */}
      <div className="introduction px-5 lg:px-[10rem] pt-10 pb-4 text-lg">
        In today&apos;s fast-paced digital landscape, businesses need effective
        strategies to stand out and attract the right audience. One powerful
        tool that can significantly increase visibility and drive conversions is
        Pay-Per-Click (PPC) advertising. At Valuable Multimedia, we specialize
        in crafting targeted PPC campaigns that help businesses boost their
        growth and maximize their return on investment (ROI).
      </div>

      <div className="introduction px-5 lg:px-[10rem] pb-10 text-lg">
        In this comprehensive guide, we&apos;ll dive into how a well-executed
        PPC campaign can grow your business, the key elements of a successful
        strategy, and why Valuable Multimedia is your best partner for PPC
        management.
      </div>

      {/* title-paragraphs  */}
      <div className="title-paragraphs px-5 lg:px-[10rem] pb-10 flex flex-col gap-y-4">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          What is Pay-Per-Click (PPC) Advertising?
        </h2>

        <p className="text-lg">
          Pay-Per-Click (PPC) advertising is a digital marketing model where
          advertisers pay a fee each time their ad is clicked. Unlike organic
          traffic, PPC allows businesses to buy visits to their website, making
          it an effective way to gain visibility quickly. PPC ads can appear on
          search engines like Google through{" "}
          <Link
            href={"/services/google-ads"}
            className="text-sky-500 underline"
          >
            Google Ads services
          </Link>{" "}
          , social media platforms like Facebook and Instagram, or on
          third-party websites through display ads. By targeting the right
          keywords, audiences, and locations, PPC ads ensure that your message
          reaches potential customers actively searching for your products or
          services.
        </p>
      </div>

      {/* main blog pointers  */}
      <div className="title-subtitle-paragraphs px-5 lg:px-[10rem] py-5 flex flex-col gap-y-6">
        <h2 className=" text-3xl lg:text-4xl font-semibold">
          How PPC Campaigns Can Boost Your Business Growth
        </h2>

        <p className="text-lg">
          A well-optimized PPC campaign is more than just buying traffic;
          it&apos;s about driving relevant visitors to your site, increasing
          conversions, and ultimately, scaling your business. Here&apos;s how
          PPC campaigns can significantly impact your business growth:
        </p>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>1.</span>
            <span>Immediate Visibility on Search Engines</span>
          </h3>
          <p className="text-lg">
            One of the primary benefits of PPC is the ability to achieve instant
            visibility. Organic SEO takes time to yield results, but with PPC,
            your ads can appear at the top of search engine results pages
            (SERPs) as soon as you launch a campaign. This is especially
            valuable for businesses in competitive industries where ranking
            organically can take months, or even years.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &quot;immediate visibility on
            Google&quot;
          </p>
          <p className="text-lg">
            For example, with Valuable Multimedia, we ensure your ads gain
            immediate visibility on Google, helping you stay ahead of the
            competition.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>2.</span>
            <span>Highly Targeted Audience Reach</span>
          </h3>
          <p className="text-lg">
            PPC allows businesses to laser-focus their campaigns on specific
            demographics, locations, devices, and even user behaviors. By
            targeting the right audience, you reduce wasted ad spend and
            increase the likelihood of converting clicks into customers.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &quot;targeted audience PPC&quot;
          </p>
          <p className="text-lg">
            At Valuable Multimedia, we help you identify and target the most
            valuable audience segments, ensuring your ads are shown to people
            who are most likely to engage with your brand.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>3.</span>
            <span>Budget Control and Flexibility</span>
          </h3>
          <p className="text-lg">
            One of the standout features of PPC campaigns is the level of
            control you have over your advertising budget. Whether you&apos;re a
            small business with a limited marketing budget or an
            enterprise-level company with a large ad spend, you can adjust your
            PPC budget at any time. You only pay when someone clicks on your ad,
            making it one of the most cost-effective advertising models
            available.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &quot;PPC advertising cost&quot;
          </p>
          <p className="text-lg">
            With Valuable Multimedia, we help you manage your PPC advertising
            cost effectively, ensuring that every dollar spent is geared towards
            driving measurable results.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>4.</span>
            <span>Measurable Results and Analytics </span>
          </h3>
          <p className="text-lg">
            PPC advertising offers transparent, measurable data, allowing
            businesses to track the performance of their campaigns in real time.
            From click-through rates (CTR) to conversion rates and return on ad
            spend (ROAS), you have access to detailed reports that show how well
            your campaigns are performing.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &quot;PPC campaign performance
            metrics&quot;
          </p>
          <p className="text-lg">
            We provide in-depth reports on key performance metrics, so you can
            make data-driven decisions to optimize your campaigns and improve
            ROI.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>5.</span>
            <span>Increased Conversion Rates</span>
          </h3>
          <p className="text-lg">
            Because PPC ads can be finely tuned to target users who are actively
            searching for your products or services, they have a higher
            likelihood of converting than other advertising models. For example,
            if someone searches for &quot;best digital marketing agency near
            me&quot; and your PPC ad appears, they&apos;re more likely to click
            through and contact your business.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &quot;increase conversion rates with
            PPC&quot;
          </p>
          <p className="text-lg">
            At Valuable Multimedia, our goal is to design PPC campaigns that not
            only attract clicks but also drive conversions and increase your
            bottom line.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>6.</span>
            <span>Remarketing Opportunities</span>
          </h3>
          <p className="text-lg">
            PPC campaigns also provide excellent opportunities for remarketing.
            Remarketing targets users who have previously interacted with your
            website but didn&apos;t complete a desired action, such as making a
            purchase or filling out a contact form. By showing these users
            personalized ads as they browse the web, you can bring them back to
            your site and encourage them to convert.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &quot;PPC remarketing strategy&quot;
          </p>
          <p className="text-lg">
            Our PPC remarketing strategies at Valuable Multimedia are designed
            to re-engage potential customers and guide them through the
            buyer&apos;s journey.
          </p>
        </div>
      </div>

      {/* main blog pointers 2 */}
      <div className="title-subtitle-paragraphs px-5 lg:px-[10rem] py-5 flex flex-col gap-y-6">
        <h2 className=" text-3xl lg:text-4xl font-semibold">
          Key Elements of a Successful PPC Campaign
        </h2>

        <p className="text-lg">
          While PPC offers numerous benefits, it&apos;s essential to develop a
          comprehensive strategy to ensure success. Here are the critical
          elements that make up a high-performing PPC campaign:
        </p>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>1.</span>
            <span>Keyword Research and Selection </span>
          </h3>
          <p className="text-lg">
            Keyword research is the foundation of any successful PPC campaign.
            By identifying high-value keywords with substantial search volume
            and intent, you can ensure your ads reach the right audience. This
            includes both long-tail keywords, which are more specific and have
            lower competition, and broader, high-volume terms.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &apos;PPC keyword research&apos;
          </p>
          <p className="text-lg">
            At Valuable Multimedia, we conduct thorough keyword research to find
            the most profitable terms for your campaign.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>2.</span>
            <span>Compelling Ad Copy and Creative</span>
          </h3>
          <p className="text-lg">
            Your ad copy is what ultimately convinces users to click on your ad.
            Writing compelling, benefit-driven ad copy is crucial for increasing
            click-through rates and conversions. Pairing this with engaging
            visuals in display or social media ads can significantly enhance
            your results.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &quot;PPC ad copy best practices&quot;
          </p>
          <p className="text-lg">
            Our team at Valuable Multimedia excels in creating ad copy that
            resonates with your target audience and aligns with your campaign
            objectives.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>3.</span>
            <span>Landing Page Optimization</span>
          </h3>
          <p className="text-lg">
            The effectiveness of a PPC campaign doesn&apos;t end with a click.
            To maximize conversions, the landing page users are directed to must
            be optimized for user experience and aligned with the ad&apos;s
            message. A poorly designed landing page can result in high bounce
            rates and wasted ad spend.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &quot;PPC landing page
            optimization&quot;
          </p>
          <p className="text-lg">
            At Valuable Multimedia, we ensure that your landing pages are
            optimized for conversions, offering a seamless user experience from
            ad click to action.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-medium flex gap-x-1">
            <span>4.</span>
            <span>Continuous Campaign Optimization </span>
          </h3>
          <p className="text-lg">
            PPC is not a &apos;set it and forget it&quot; strategy. Continuous
            monitoring and optimization are essential for maximizing
            performance. This includes adjusting bids, testing ad variations,
            refining targeting, and analyzing performance data to improve ROI.
          </p>
          <p className="text-lg font-bold pt-4">
            High Search Volume Keyword: &quot;PPC campaign optimization
            techniques&quot;
          </p>
          <p className="text-lg">
            Our PPC experts at Valuable Multimedia constantly monitor and adjust
            your campaigns to ensure the best possible results
          </p>
        </div>
      </div>

      <div className="title-subtitle-paragraphs px-5 lg:px-[10rem] py-5 flex flex-col gap-y-6">
        <h2 className=" text-3xl lg:text-4xl font-semibold">
          Why Choose Valuable Multimedia for Your PPC Campaigns?
        </h2>

        <p className="text-lg">
          At Valuable Multimedia, we understand the intricacies of running
          successful PPC campaigns. Our team is committed to helping businesses
          grow by developing targeted and data-driven PPC strategies tailored to
          your unique goals. Here&apos;s what sets us apart:
        </p>

        <div className="">
          <ul className="flex flex-col gap-y-2">
            <li className="flex gap-x-2">
              <div>1.</div>
              <div className="flex gap-x-1">
                <span className="font-bold">Proven Track Record:</span>
                <span>
                  We have a history of delivering successful PPC campaigns for
                  clients across various industries.
                </span>
              </div>
            </li>
            <li className="flex gap-x-2">
              <div>2.</div>
              <div className="flex gap-x-1">
                <span className="font-bold">Customized Campaigns:</span>
                <span>
                  We create bespoke strategies based on your business objectives
                  and target audience.
                </span>
              </div>
            </li>
            <li className="flex gap-x-2">
              <div>3.</div>
              <div className="flex gap-x-1">
                <span className="font-bold">Data-Driven Approach:</span>
                <span>
                  Our decisions are backed by analytics, ensuring your campaigns
                  are continuously optimized for success.
                </span>
              </div>
            </li>
            <li className="flex gap-x-2">
              <div>4.</div>
              <div className="flex gap-x-1">
                <span className="font-bold">Expert Team:</span>
                <span>
                  Our PPC specialists stay up-to-date with the latest trends and
                  best practices to keep your campaigns competitive.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="title-subtitle-paragraphs px-5 lg:px-[10rem] py-5 flex flex-col gap-y-6">
        <h2 className=" text-3xl lg:text-4xl font-semibold">
          Conclusion: Ready to Boost Your Business Growth?
        </h2>

        <p className="text-lg">
          PPC campaigns are one of the most effective ways to drive targeted
          traffic, increase conversions, and grow your business. Whether
          you&apos;re looking to improve brand visibility, increase sales, or
          reach new audiences, &nbsp;
          <Link href={"/"} className="text-sky-500 underline">
            Valuable Multimedia
          </Link>{" "}
          is here to help.
        </p>
      </div>
    </div>
  );
}

export default BlogPage2;
