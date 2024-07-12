"use client";

import React from "react";
import data from "@/data/terms_and_conditions_data.json";

function TermsAndConditionsPage() {
  const { content } = data;

  return (
    <div>
      {/* banner  */}
      <div className="banner px-16 bg-[#000] text-white py-10 text-center">
        <h1 className="capitalize text-5xl font-semibold">
          terms and conditions
        </h1>
      </div>

      {/* content  */}
      <div className="content px-[10rem] py-14 flex flex-col gap-y-10">
        {content.map((item, index) => (
          <div
            className="flex flex-col gap-y-4"
            key={`content-no-${index + 1}`}
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>

            <ul className="bullets pl-4 flex flex-col gap-y-3">
              {item.data.map((subItem, index) => (
                <li key={`subitem-no-${index + 1}`}>{subItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TermsAndConditionsPage;
