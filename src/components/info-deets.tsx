import React from "react";

interface Props {
  title: string;
  description: string;
}
export function InfoDeets({ title, description }: Props) {
  return (
    <div className="max-w-[143px] flex flex-col gap-[16px] font-[500] "  >
      <h1 className="text-[32px] text-base font-[500]">{title}</h1>
      <p className="text-[16px] font-[400]">{description}</p>
    </div>
  );
}
