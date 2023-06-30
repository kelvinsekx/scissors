import React from "react";
import { Flex, Icon, Link, FlexProps } from "@chakra-ui/react";

import { IconType } from "react-icons";
import { ReactText } from "react";
import { useRouter } from "next/router";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  link: string;
}
export const NavItem = ({
  icon,
  children,
  link,
  ...rest
}: NavItemProps) => {
  const router = useRouter();
  const isActive = (link: string) => {
    const path = router.asPath;
    if (link == "/") {
      return path === "/" || path === "";
    }
    const pathStart = path.split("/")[1];
    return `/${pathStart}` === `${link}`;
  };

  return (
    <Link
      href={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive(link) ? "#3c24aa" : "transparent"}
        color={isActive(link) ? "white" : "black"}
        _hover={{
          bg: "blue.300",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
