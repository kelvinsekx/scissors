import React from "react";

export function LinkShortener() {
  return (
    <div className="relative h-[523px] w-[1440px] bg-gradient-to-b from-slate-800 to-slate-800">
      <div className="absolute left-[1119.23px] top-[-84.48px] h-[1606.47px] w-[985.90px] origin-top-left rotate-[22.10deg] opacity-70"></div>
      <div className="absolute left-[-760.20px] top-[127.05px] h-[1196.98px] w-[1272.60px] origin-top-left rotate-[-48.82deg] opacity-50"></div>
      <div className="absolute left-[482px] top-[83.50px] inline-flex flex-col items-start justify-center gap-6 rounded-xl bg-white p-[42px]">
        <div className="inline-flex flex-col items-start justify-start gap-6 self-stretch">
          <div className="flex h-[55px] w-[392px] flex-col items-start justify-center gap-2.5 rounded-xl border border border border border-blue-500 px-3 py-2">
            <div className="flex flex-col items-center justify-center gap-2.5 px-3 py-2">
              <div className="text-[12px] font-normal leading-none text-blue-500">
                Paste URL here...
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-3">
            <div className="flex h-12 w-[202px] items-center justify-start gap-2.5 rounded-xl border border border border border-blue-500 px-5 py-[18px]">
              <div className="shrink grow basis-0 text-[14px] font-normal leading-3 text-blue-500">
                Choose Domain
              </div>
              <div className="relative h-1.5 w-3" />
            </div>
            <div className="inline-flex h-12 w-[178px] flex-col items-start justify-center gap-2.5 rounded-xl border border border border border-blue-500 px-3 py-2">
              <div className="flex flex-col items-center justify-center gap-2.5 px-3 py-2">
                <div className="text-[12px] font-normal leading-none text-blue-500">
                  Type Alias here
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-start justify-start gap-3 self-stretch">
          <div className="inline-flex w-[392px] items-center justify-center gap-2.5 rounded-[100px] bg-blue-700 px-6 py-3">
            <div className="text-[14px] font-normal leading-3 text-white">
              Trim URL
            </div>
            <div className="flex items-start justify-start gap-2.5 p-1">
              <div className="relative h-4 w-4 origin-top-left rotate-180" />
            </div>
          </div>
          <div className="inline-flex w-[392px] items-center justify-start gap-2.5 p-2.5">
            <div className="w-[373px]">
              <span className="text-[14px] font-normal leading-tight text-blue-500">
                By clicking TrimURL, I agree to the{" "}
              </span>
              <span className="text-[14px] font-normal leading-tight text-blue-500">
                Terms of Service, Privacy Policy
              </span>
              <span className="text-[14px] font-normal leading-tight text-blue-500">
                {" "}
              </span>
              <span className="text-[14px] font-normal leading-tight text-blue-500">
                and Use of Cookies.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
