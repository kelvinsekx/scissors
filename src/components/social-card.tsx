import * as React from "react";


export function SocialCard() {
  return (
      <div>
          <div className="flex justify-between gap-[1em] ">
             <img className="self-start" src="/line 70.svg" alt="svg" />
             <div className="flex flex-col gap-[24px]">
                <div className="flex">
                  <h2 className="text-3xl text-base font-bold text-gray-900 dark:text-white md:text-2xl xl:text-3xl">
                    Why choose{" "}
                    <span className="dark:text text-brand-300"> Scissors</span>
                  </h2>
              </div>
              <div className="max-w-[310px]">
                <p className="text-s h-48  break-words text-[##141414] leading-[24px] font-[400] " >
                  Scissors is the hub of everything that has to do with your link
                  management. We shorten your URLs, allow you creating custom ones
                  for your personal, business, event usage. Our swift QR code
                  creation, management and usage tracking with advance analytics for
                  all of these is second to none.{" "}
                </p>
              </div>
             </div>
          </div>
      </div>
  );
}
