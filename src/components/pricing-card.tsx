import React from "react";

export function PricingCard() {
  return (
    <div className="relative h-[1073px] w-[1440px] space-x-0 bg-white">
      <div className="absolute left-[176px] top-[218px] ">
        <div className="absolute left-0 top-[86px] h-[455px] w-[379px] rounded-xl border border border border border-blue-700 bg-white shadow">
          <div className="absolute left-[87px] top-[24px] text-center text-[24px] font-normal leading-loose text-neutral-900">
            Basic
          </div>
          <div className="absolute left-[87px] top-[90px] inline-flex flex-col items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="text-center text-[40px] font-normal leading-10 text-neutral-900">
                Free
              </div>
              <div className="text-center text-[20px] font-normal leading-loose text-neutral-900">
                Free plan for all users
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-6">
              <div className="inline-flex items-center justify-center gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-neutral-900">
                  Unlimited URL Shortening
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-neutral-900">
                  Basic Link Analytics
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-black">
                  Customizable Short Links
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-black">
                  Standard Support
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-black">
                  Ad-supported
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[709px] top-[86px] h-[455px] w-[379px] rounded-xl border border border border border-blue-700 bg-white shadow">
          <div className="absolute left-[80px] top-[26px] text-center text-[24px] font-normal leading-loose text-neutral-900">
            Teams
          </div>
          <div className="absolute left-[86px] top-[92px] inline-flex flex-col items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="text-center">
                <span className="text-[40px] font-normal leading-10 text-neutral-900">
                  $25/
                </span>
                <span className="text-[40px] font-normal leading-10 text-neutral-900">
                  month
                </span>
              </div>
              <div className="text-center text-[20px] font-normal leading-loose text-neutral-900">
                Share with up to 10 users
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-6">
              <div className="inline-flex items-center justify-center gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-neutral-900">
                  Team Collaboration
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-neutral-900">
                  User Roles and Permissions
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-neutral-900">
                  Enhanced Security
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-neutral-900">
                  API Access
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-neutral-900">
                  Dedicated Account Manager
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[339px] top-0 h-[627px] w-[410px] rounded-xl bg-gradient-to-b from-slate-800 to-slate-800 shadow">
          <div className="absolute left-[65px] top-[95px] text-center text-[24px] font-normal leading-loose text-white">
            Professional
          </div>
          <div className="absolute left-[65px] top-[151px] inline-flex flex-col items-start justify-start gap-6">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="text-center">
                <span className="text-[40px] font-normal leading-10 text-white">
                  $15/
                </span>
                <span className="text-[40px] font-normal leading-10 text-white">
                  month
                </span>
              </div>
              <div className="text-center text-[20px] font-normal leading-loose text-white">
                Ideal for business creators
              </div>
            </div>
            <div className="flex h-[216px] flex-col items-start justify-start gap-6">
              <div className="inline-flex items-center justify-center gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-white">
                  Enhanced Link Analytics
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-white">
                  Custom Branded Domains
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-white">
                  Advanced Link Customization
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-white">
                  Priority Support
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-2">
                <div className="relative h-4 w-4" />
                <div className="text-center text-[14px] font-normal leading-normal text-white">
                  Ad-free Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[514px] top-[913px] inline-flex items-start justify-start gap-3">
        <div className="flex h-12 w-[200px] items-center justify-center gap-2.5 rounded-[100px] border border border border border-blue-600 px-6 py-3">
          <div className="text-[16px] font-normal leading-3 text-blue-600">
            Get Custom Pricing
          </div>
        </div>
        <div className="flex h-12 w-[200px] items-center justify-center gap-2.5 rounded-[100px] bg-blue-600 px-6 py-3">
          <div className="text-[16px] font-normal leading-3 text-white">
            Select Pricing
          </div>
        </div>
      </div>
      <div className="absolute left-[432px] top-[42px] inline-flex items-start justify-start gap-4">
        <div className="inline-flex flex-col items-center justify-start gap-2">
          <div className="text-center">
            <span className="text-[40px] font-normal leading-10 text-neutral-900">
              A{" "}
            </span>
            <span className="text-[40px] font-normal leading-10 text-blue-700">
              price perfect
            </span>
            <span className="text-[40px] font-normal leading-10 text-neutral-900">
              {" "}
              for your needs.
            </span>
          </div>
          <div className="h-[52px] w-[556px] text-center text-[16px] font-normal leading-normal text-neutral-900">
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </div>
        </div>
      </div>
    </div>
  );
}
