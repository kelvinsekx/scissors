import {
  Box,
  Card,
  Divider,
  HStack,
  IconButton,
  Link,
  Stack,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { Layout } from "~/components/Layout";
import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FiEye } from "react-icons/fi";
import { FaRegCopy, FaRegTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import React from "react";

export interface URLProps {
  originalUrl: string;
  shortUrl: string;
  visitCount: string;
  lastVisited: string;
}

function URLCard({ originalUrl, shortUrl, visitCount, lastVisited }: URLProps) {
  return (
    <motion.div
      // key={selectedTab ? selectedTab.label : "empty"}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GridItem w="100%">
        <Card>
          <Stack p={4} gap={4} borderRadius={4}>
            <Text noOfLines={1} fontSize={"sm"}>
              {originalUrl}
            </Text>
            <Link color={"blue"} href={shortUrl} isExternal>
              {shortUrl} <ExternalLinkIcon mx="2px" />
            </Link>
            <HStack>
              <HStack gap={2}>
                <FiEye></FiEye>
                <Text fontSize={"sm"} fontWeight={"bold"} fontStyle={"italic"}>
                  {visitCount}
                </Text>
              </HStack>
              <Divider orientation="vertical" />
              <Text fontSize={"sm"} fontWeight={"thin"} fontStyle={"italic"}>
                {lastVisited}
              </Text>
              <Link color="blue">
                <FaRegCopy />
              </Link>
              <Link color="red">
                <FaRegTrashAlt />
              </Link>
            </HStack>
          </Stack>
        </Card>
      </GridItem>
    </motion.div>
  );
}

export default URLCard;
