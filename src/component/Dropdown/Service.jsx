import React from "react";
import style from "./Dropdown.module.css";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";

export const Service = () => {
  return (
    <Flex margin="1rem">
      <Box>
        <Heading as="h4" noOfLines={1}>
          Resume writing
        </Heading>
        <Text>Text resume</Text>
        <Text>Resume critique</Text>
        <br />
        <Heading as="h4" noOfLines={1}>
          Find jobs
        </Heading>
        <Text>Jobs4u</Text>
        <Text>Priority applicant</Text>
      </Box>
      <div class={style.vl}></div>

      <Box>
        <Heading as="h4" size="4xl" noOfLines={1}>
          Get recuiter's attention
        </Heading>
        <Text>Resume display</Text>
        <Text>Recruiter connection</Text>
        <Text>Job search booster</Text>
        <br />
        <Heading as="h4" size="4xl" noOfLines={1}>
          Monthly subscriptions
        </Heading>
        <Text>Basic & premium plans</Text>
      </Box>
      <div class={style.vl}></div>

      <Box>
        <Heading as="h4" size="4xl" noOfLines={1}>
          Learn & upskill
        </Heading>
        <Text>DAta Science course</Text>
        <Text>Technology course</Text>
        <Text>Mangagment courses</Text>
        <Text>Finance courses</Text>
        <Text>Design courses</Text>
        <Text>Healthcare courses</Text>
        <Text>Degree programs</Text>
      </Box>
    </Flex>
  );
};
