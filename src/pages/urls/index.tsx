import {
  Button,
  HStack,
  IconButton,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { Layout } from "~/components/Layout";
import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";
import URLCard, { URLProps } from "~/components/urls/url-card";
import { useState, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import {
  Session,
  User,
  createPagesServerClient,
} from "@supabase/auth-helpers-nextjs";
import { Database } from "types/database.types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient<Database>(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  let urls: URLProps[] = [];
  const { data, error } = await supabase
    .from("urls")
    .select(`*, url_visits(created_at)`)
    .eq("user_id", session?.user.id)
    .order("created_at", { foreignTable: "url_visitors", ascending: false });

  if (data) {
    //format
    urls = data.map(
      (d) =>
        ({
          originalUrl: d.original_url,
          shortUrl: `${"baseurl"}/u/${d.short_url_code}`,
          visitCount: d.url_visits.length.toString(),
          lastVisited: dayjs(d.url_visits[0]?.created_at).fromNow(),
        } as URLProps)
    );
  } else {
    console.log("====================================");
    console.log("PG error", error);
    console.log("====================================");
  }

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      urls,
      initialSession: session,
      user: session.user,
    },
  };
};

interface PageProps {
  urls: URLProps;
  initialSession: Session;
  user: User;
}

const Urls: NextPage<PageProps> = ({ urls }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <Layout>
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          colorScheme="blue"
          position="fixed"
          aria-label="Back to Top"
          bottom={["16px", "32px", "64px"]}
          right={["16px", "32px", "64px"]}
          zIndex={2}
          icon={<BiPlus size={24} />}
        />
      )}

      <Stack spacing={2} mt={4} mb={4}>
        <Heading as="h6" size={["md", "lg"]} textAlign={"center"}>
          Hi there!
        </Heading>
        <Text fontSize={["sm", "md"]} textAlign={"center"}>
          Enter a new URL to shorten it
        </Text>
      </Stack>
      <HStack
        // flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"row"}
        w={{ base: "70%", md: "50%" }}
        mx="auto"
      >
        <Input
          type={"text"}
          placeholder={"URL to shorten"}
          color={useColorModeValue("gray.800", "gray.200")}
          bg={useColorModeValue("white", "gray.600")}
          rounded={"full"}
          border={0}
          // maxW={"400px"}
          _focus={{
            bg: useColorModeValue("gray.200", "gray.800"),
            outline: "none",
          }}
        />
        <Input
          type={"text"}
          placeholder={"Custom short code"}
          color={useColorModeValue("gray.800", "gray.200")}
          bg={useColorModeValue("white", "gray.600")}
          rounded={"full"}
          border={0}
          maxW={"180px"}
          _focus={{
            bg: useColorModeValue("gray.200", "gray.800"),
            outline: "none",
          }}
        />
        <Button
          bg={"blue.400"}
          rounded={"full"}
          color={"white"}
          flex={"1 0 auto"}
          _hover={{ bg: "blue.500" }}
          _focus={{ bg: "blue.500" }}
        >
          Go!
        </Button>
      </HStack>
      <Stack spacing={2} mt={4} mb={4}>
        <Text fontSize="sm" textAlign={"center"}>
          Here are your shortened URLs
        </Text>
      </Stack>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          // "2xl": "repeat(5, 1fr)",
        }}
        gap={8}
        m={8}
      >
        <GridItem w="100%">
          <URLCard
            originalUrl="Some sample long text which will probably be a link in production"
            shortUrl="https://www.google.com"
            visitCount="6134"
            lastVisited="6 seconds ago"
          />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Urls;
