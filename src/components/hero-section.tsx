import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { HeroCard } from "./hero-card";
export function HeroSection() {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative ml-auto pt-36">
          <div className="mx-auto text-center lg:w-2/3">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl xl:text-4xl">
              Optimize Your Online Experience with Our{"\n"}
              <span className="text-primary dark:text-white">
                Advanced{" "}
                <span className="dark:text text-brand-300">
                  URL Shortening{" "}
                </span>{" "}
                Solution
              </span>
            </h1>
            <Image
              src="/underline.svg"
              alt="me"
              width="124"
              height="64"
              className="inset-50"
            />
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              options to reinforce your brand presence and enhance user
              engagement.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Sign Up
                </span>
              </a>
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Learn more
                </span>
              </a>
            </div>
            <div className=" mt-16 hidden justify-between border-y border-gray-100 px-36 py-8 dark:border-gray-800 sm:flex">
              <Image
                src="/egg_shaped_thingy.svg"
                alt="Egg shaped thingy"
                width={240}
                className=""
                height={250}
              />
              <div className="absolute left-4/10">
                <HeroCard />
              </div>
            </div>
            {/* <div> */}
            <img
              alt="hero base"
              src={"/hero_base.svg"}
              width={"100%"}
              height={93}
            />
            {/* </div> */}
          </div>
          {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/microsoft.svg"
                className="mx-auto h-12 w-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/airbnb.svg"
                className="mx-auto h-12 w-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="flex p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/google.svg"
                className="m-auto h-9 w-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/ge.svg"
                className="mx-auto h-12 w-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="flex p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/netflix.svg"
                className="m-auto h-8 w-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="./images/clients/google-cloud.svg"
                className="mx-auto h-12 w-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
}
