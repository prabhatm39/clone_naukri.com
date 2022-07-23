import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import style from "./Dropdown.module.css";

export const Resource = () => {
  return (
    <Flex margin="1rem">
      <Box>
        <Heading as="h4" noOfLines={1}>
          Free resume resources
        </Heading>
        <Text>Resume maker for fresher</Text>
        <Text>Resume quality score</Text>
        <Text>Resume samples</Text>
        <Text>Job letter samples</Text>
      </Box>
      <div class={style.vl}></div>

      <Box>
        <Heading as="h4" size="4xl" noOfLines={1}>
          More resources
        </Heading>
        <Text>How to use Naukri</Text>
        <Text>Naukri blog</Text>
        <Text>FAQs</Text>
        <Text>Take home salary calculator</Text>
        <Text>
          Naukri labs <span className={style.spa}>(beta)</span>
        </Text>
      </Box>
    </Flex>
  );
};
