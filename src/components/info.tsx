import React from "react";
import { InfoDeets } from "~/components/info-deets";
export function Info() {
  return (
    <div className="bg-[#F9FBFD] bg:text-white  flex flex-row justify-evenly px-24 py-12">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl xl:text-3xl">
        One Stop. <br />
        <span className="text-primary dark:text-white">
          Four <span className="dark:text text-brand-300"> Possibilities</span>{" "}
        </span>
      </h2>
      <div className=" flex w-3/4 max-w-screen- items-start gap-[16px] justify-end">
        <div className="px-4">
          <InfoDeets title="3M" description="Active Users" />
        </div>
        <div className="px-4">
          <InfoDeets title="60M" description="Links & QR codes created" />
        </div>
        <div className="px-4">
          <InfoDeets title="1B" description="Clicked & signed connections" />
        </div>
        <div className="px-4">
          <InfoDeets title="300k" description="App integrations" />
        </div>
      </div>
    </div>
  );
}
