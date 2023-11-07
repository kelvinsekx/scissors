import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";
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
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "types/database.types";
import dayjs from "dayjs";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createPagesServerClient<Database>(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const past24Hours = dayjs().subtract(1, 'day');

  const [
    {count: totalLookup, error: totalCountError},
    {count: newUsers, error: newUserCountError},
  ] = await Promise.all([
    supabase.from('url_visits').select('*', {count: 'exact', head: true}).gt('created_at', past24Hours.toDate()),
    supabase.from('distinct_user').select('*', {count: 'exact', head: true, }).gt('created_at', past24Hours.toDate())
  ])

  console.log('====================================');
  console.log("totalLookup", totalLookup);
  console.log('====================================');

  if (totalCountError || newUserCountError) {
    // Some error occurred
  }
  const returningUsers = (totalLookup || 0) - (newUsers || 0);
  return {
    props: { stats: {
      totalLookup: totalLookup || 0,
      newUsers: newUsers || 0,
      returningUsers: returningUsers || 0,
    } },
  };
};

type Props = {
  stats: {
    totalLookup: number,
    newUsers: number,
    returningUsers: number
  };
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

const Dashboard: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Box className="page" pt={5}>
        <Stack direction={{ base: "column", md: "row" }} mt={5} spacing={5}>
          <QuickStatsCard
            title={"Last 24 hours"}
            stat={props.stats.newUsers.toFixed()}
            icon={<LiaRouteSolid size={"3em"} />}
            description="New user lookups"
          />
          <QuickStatsCard
            title={"Last 24 hours"}
            stat={props.stats.returningUsers.toFixed()}
            icon={<RxLink2 size={"3em"} />}
            description="returning users"
          />
          <QuickStatsCard
            title={"Last 24 hours"}
            stat={props.stats.totalLookup.toFixed()}
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

export default Dashboard;
