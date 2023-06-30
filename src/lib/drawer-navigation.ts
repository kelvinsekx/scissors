import { IconType } from "react-icons";
import { FiHome, FiLink, FiStar } from "react-icons/fi";

export interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}
export const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, link: "/" },
  { name: "My URLs", icon: FiLink, link: "/urls" },
  { name: "My Visitors", icon: FiStar, link: "/visitors" },
];
