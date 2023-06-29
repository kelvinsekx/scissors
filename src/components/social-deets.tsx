import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
}
export function SocialDeets({ title, description }: Props) {
  return (
    <div className="w-28">
      <Image alt="some-images" src={"/url.png"} width={56} height={56} />
      <h1 className="text-3xl text-base font-semibold">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
}
