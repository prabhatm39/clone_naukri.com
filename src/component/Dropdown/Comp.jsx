import React from "react";
import style from "./Dropdown.module.css";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";

export const Comp = () => {
  return (
    <Flex margin="1rem">
      <Box>
        <Heading as="h4" noOfLines={1}>
          Explore categories
        </Heading>
        <Text>Unicorn</Text>
        <Text>MNCs</Text>
        <Text>Startup</Text>
        <Text>Product based</Text>
        <Text>Internet</Text>
      </Box>
      <div class={style.vl}></div>

      <Box>
        <Heading as="h4" size="4xl" noOfLines={1}>
          Explore collection
        </Heading>
        <Text>Top companies</Text>
        <Text>Fintech companies</Text>
        <Text>Edtexh companies</Text>
        <Text>Featured companies</Text>
        <Text>Sponsored companies</Text>
      </Box>
      <div class={style.vl}></div>

      <Box>
        <Heading as="h4" size="4xl" noOfLines={1}>
          Research companies{" "}
          <label className={style.lab}>
            {" "}
            <span className={style.spa}>by </span>{" "}
            <img
              src="https://static.naukimg.com/s/0/0/i/ambitionBoxLogo.png"
              className={style.img}
            />{" "}
            Ambitionbox
          </label>
        </Heading>
        <Text>Interview questions</Text>
        <Text>company salaries</Text>
        <Text>About companies</Text>
        <Text>company reviews</Text>
      </Box>
    </Flex>
  );
};
