"use client"

import React from "react";
import { FreeTeam } from "./pricing-card";
// import { Content } from "@radix-ui/react-accordion";
import { PricingCardItems } from "./priceList";
import { MyButton } from "~/shared/button";

export function PricingCardBody() {


  return (
    <div className="relative bg-white mt-[130px] ">
      <div className="max-w-[1440px] mx-auto  " >
        <div className=" ">
          <div className="max-w-[556px] flex gap-[1em] text-center mx-auto">
              <img className="self-start mt-[10px] " src="/line 70.svg" alt="svg" />
            <div>
              <p className="text-[32px] text-[#141414] font-[600] leading-[48px] tracking-[2.5px]">A  <span className=" text-[#005AE2]"> price perfect </span>for your needs.</p>
                <p className="text-[16px] font-[500] ">From catering for your personal, business, event, 
                  socials needs, you can be rest assured we have you in mind in our pricing.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[1em] mt-[154px] h-[650px] ">
          {PricingCardItems.map((item)=>{
            return(
              <div key={item.id}>
                  <FreeTeam 
                    name={item.name} 
                    type={item.type} 
                    content={item.content}
                    items={item.items}
                  />
              </div>
            )
          })}
        </div>
        <div className="flex justify-center items-center gap-[12px] ">
          <MyButton text="Get Custom Pricing" color="#0065FE" bg="transparent" />
          <MyButton text="Select Pricing" color="#fff" bg="#0065FE" />
        </div>
      </div>
    </div>
  );
}
