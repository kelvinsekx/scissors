import React from "react";
import { GetStaticProps } from "next";
import { Layout } from "../components/Layout";
import {
  Box,
  Heading,
  HStack,
  Stack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { QuickStatsCard } from "~/components/stats/QuickStatsCard";
import { BsPerson } from "react-icons/bs";
import { FiUsers, FiUserCheck, FiUserPlus } from "react-icons/fi";
import { LiaRouteSolid } from "react-icons/lia";
import { RxLink2 } from "react-icons/rx";
import { LineChart } from "~/components/stats/LineChart";
import { faker } from "@faker-js/faker";
import { ChartData, ChartOptions } from "chart.js";
import { colors } from "~/styles/chakraTheme";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { feed: [] },
  };
};

type Props = {
  feed: [];
};

export const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Total monthly visits (12 months)",
      font: {
        size: 16,
      },
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data: ChartData<"line"> = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.float({ min: 0, max: 10000 })),
      borderColor: colors.brand[300],
      backgroundColor: colors.brand[50],
      fill: true,
      tension: 0.5,
    },
  ],
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Box className="page" pt={5}>
        <Stack direction={{ base: "column", md: "row" }} mt={5} spacing={5}>
          <QuickStatsCard
            title={"Last 24 hours"}
            stat={"5000"}
            icon={<LiaRouteSolid size={"3em"} />}
            description="New user lookups"
          />
          <QuickStatsCard
            title={"Last 24 hours"}
            stat={"5000"}
            icon={<RxLink2 size={"3em"} />}
            description="returning users"
          />
          <QuickStatsCard
            title={"Last 24 hours"}
            stat={"5000"}
            icon={<FiUsers size={"3em"} />}
            description="Total lookups"
          />
        </Stack>
        <Box
          my={8}
          shadow={"xl"}
          border={"1px solid"}
          borderColor={useColorModeValue("gray.800", "gray.500")}
          rounded={"lg"}
          bg={"white"}
        >
          <LineChart options={options} data={data} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Blog;
