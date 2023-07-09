import React from "react";
import slugify from "slugify";
interface Props {
  title: string;
  price: string;
  description: string;
  info: string[];
}

export function Pricing({ title, price, description, info }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <p>{description}</p>
      <ul>
        {info.map((infoItem) => {
          const key = slugify(infoItem, { lower: true }) as string;
          return <li key={key}>{infoItem}</li>;
        })}
      </ul>
    </div>
  );
}
