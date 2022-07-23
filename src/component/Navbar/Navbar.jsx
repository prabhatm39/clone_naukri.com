import { Box, Text, Flex, Spacer, Image, Button } from "@chakra-ui/react";
import React from "react";
import { Comp } from "../Dropdown/Comp";
import { Jobs } from "../Dropdown/Jobs";
import { Resource } from "../Dropdown/Resource";
import { Service } from "../Dropdown/Service";
import styles from "./Navbar.module.css";
import { Icon } from '@chakra-ui/react';
import { ChevronDownIcon} from "@chakra-ui/icons";
import { Employ } from "../Dropdown/Employ";



export const Navbar = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" margin="1.5rem">
        <Box>
          <Image
            height="31"
            width="186"
            src="https://static.naukri.com/s/4/100/i/naukri_Logo.png"
            alt="Dan Abramov"
          />
        </Box>

        <Box>
          <Flex gap="1rem">
            {/* -------------------------------------JOBS------------------------------ */}
            <div class={styles.dropdown}>
              <Button color="teal" variant="link" border="none" bg="white" fontSize="15px" >
                Jobs
              </Button>
              <div class={styles.dropdowncontent}>
                <Jobs />
              </div>
            </div>
            {/* -------------------------------------Comapnies------------------------------ */}
            <div class={styles.dropdown}>
              <Button color="teal" variant="link" border="none" bg="white" fontSize="15px" >
                Companies
              </Button>
              <div class={styles.dropdowncontent}>
                <Comp />
              </div>
            </div>

            {/* -------------------------------------Servieces------------------------------ */}
            <div class={styles.dropdown}>
              <Button color="teal" variant="link" border="none" bg="white" fontSize="15px" >
                Servieces
              </Button>
              <div class={styles.dropdowncontent}>
                <Service />
              </div>
            </div>

            {/* -------------------------------------Resources------------------------------ */}
            <div class={styles.dropdown}>
              <Button color="teal" variant="link" border="none" bg="white" fontSize="15px" >
                Resources
              </Button>
              <div class={styles.dropdowncontent}>
                <Resource />
              </div>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex gap="1rem">
            <Box className={styles.login}>
              <Button>Login</Button>
            </Box>
            <Box className={styles.register}>
              <Button>Register</Button>
            </Box>
          </Flex>
        </Box>
        <div class={styles.vl}></div>
        <Box>

        <div class={styles.dropdownE}>
              <Button color="teal" variant="link" border="none" bg="white" fontSize="15px" fontWeight="bold">
                
          For employers <ChevronDownIcon />

              </Button>
              <div class={styles.dropdowncontentE}>
                <Employ />
              </div>
            </div>
    
        </Box>
      </Flex>
    </Box>
  );
};
