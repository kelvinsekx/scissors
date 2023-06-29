import React from "react";

interface Props {
  title: string;
  description: string;
}
export function InfoDeets({ title, description }: Props) {
  return (
    <div className="w-28">
      <h1 className="text-3xl text-base font-semibold">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
}
