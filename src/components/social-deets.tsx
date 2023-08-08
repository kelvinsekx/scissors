import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
}
export function SocialDeets({ title, description }: Props) {
  return (
    <div className="flex flex-col gap-[40px] max-w-[270px] w-30">
      <div>
          <Image alt="some-images" src={"/url.png"} width={56} height={56} />
      </div>
      <div>
        <h1 className="xl:text-[24px] text-[#141414] text-base font-semibold">{title}</h1>
        <p className="h-24  mt-4 text-sm">{description}</p>
      </div>
    </div>
  );
}
