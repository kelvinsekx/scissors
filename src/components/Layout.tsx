import React, { ReactNode, useEffect, useState } from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Spinner,
  Flex,
} from "@chakra-ui/react";

import { MobileNav } from "./layout/MobileNav";
import { SidebarContent } from "./layout/SidebarContent";
import { useUser, useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

type Props = {
  children: ReactNode;
};

export interface UserType {
  email: string;
  name: string;
  image?: string;
}

export function Layout({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const supabaseUser = useUser();
  const { isLoading } = useSessionContext();
  const router = useRouter();
  useEffect(() => {
    if (supabaseUser) {
      setUser({
        email: supabaseUser.email,
        name: supabaseUser.user_metadata["username"],
        image: supabaseUser.user_metadata["image"],
      });
    } else {
      //redirect to auth or landing page
    }
  }, [supabaseUser]);

  const [user, setUser] = useState<Partial<UserType>>({});
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      justifyContent={"center"}
      alignItems="center"
      margin="auto"
    >
      {isLoading ? (
        <Flex
          flex={1}
          position={"absolute"}
          width="100%"
          top={"50%"}
          justifyContent={"center"}
          alignItems="center"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <>
          <SidebarContent
            onClose={() => onClose}
            display={{ base: "none", md: "block" }}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav onOpen={onOpen} user={user} />
          <Box ml={{ base: 0, md: 60 }} pt="2" pb="2" pl="8" pr="8">
            {children}
          </Box>
        </>
      )}
    </Box>
  );
}
