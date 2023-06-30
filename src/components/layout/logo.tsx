import Image from "next/image";
import { FC } from "react";

export const Logo: FC = () => {
  return <Image src="/Logo.png" alt="me" width="180" height="80" />;
};
