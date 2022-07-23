import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import style from "./Dropdown.module.css";

export const Jobs = () => {
  return (
    <Flex margin="1rem">
      <Box>
        <Heading as="h4" noOfLines={1}>
          Popular categories
        </Heading>
        <Text>IT jobs</Text>
        <Text>Sales jobs</Text>
        <Text>Marketing jobs</Text>
        <Text>Data Science jobs</Text>
        <Text>HR jobs</Text>
        <Text>Engineering jobs</Text>
        <Text>Sales jobs</Text>
      </Box>
      <div class={style.vl}></div>

      <Box>
        <Heading as="h4" size="4xl" noOfLines={1}>
          Jobs in demand
        </Heading>
        <Text>Fresher jobs</Text>
        <Text>MNC jobs</Text>
        <Text>Remote jobs</Text>
        <Text>Work from home jobs</Text>
        <Text>Walk-in jobs</Text>
        <Text>Part-time jobs</Text>
      </Box>
      <div class={style.vl}></div>

      <Box>
        <Heading as="h4" size="4xl" noOfLines={1}>
          Explore more jobs
        </Heading>
        <Text>Jobs by category</Text>
        <Text>Jobs by skill</Text>
        <Text>Jobs by location</Text>
        <Text>Jobs by designation</Text>
        <Text>Create free job alert</Text>
      </Box>

      <div class={style.vl}></div>

      <Box>
        <Heading as="h4" size="4xl" noOfLines={1}>
          Jobs by location
        </Heading>
        <Text>Jobs in Delhi</Text>
        <Text>Jobs in Mumbai</Text>
        <Text>Jobs in Banglore</Text>
        <Text>Jobs in Hyderabad</Text>
        <Text>Jobs in Chennai</Text>
        <Text>Jobs in Pune</Text>
      </Box>
    </Flex>
  );
};
