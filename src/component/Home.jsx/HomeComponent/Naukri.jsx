

import React from 'react';
import styles from "./Naukri.module.css";
import {Container} from "@chakra-ui/react"
import { Image, Stack } from '@chakra-ui/react'

export const Naukri = () => {
  return (
    <Container>
    <div className={styles. cont}>
       <div className={styles.di}>
            <div className={styles.img}>
           
  <Image
    boxSize='34'
    border="2px solid #E3E7F1"
    borderRadius="100%"
    boxShadow="0px 7px 3px -2px rgb(0 73 203 / 12%) !important"
    objectFit='cover'
    src='https://static.naukimg.com/s/0/0/i/homepage-register/accenture-logo.png'
    alt='Dan Abramov'
  />
  <Image
    boxSize='36'
    
    border="2px solid #E3E7F1"
    borderRadius="100%"
    boxShadow="0px 7px 3px -2px rgb(0 73 203 / 12%) !important"
    objectFit='cover'
    src='https://static.naukimg.com/s/0/0/i/homepage-register/myntra-logo.png'
    alt='Dan Abramov'
  />
 
     
                </div>

                <div className={styles.text}>
                        <span className={styles.head}>Get contacted by top companies hiring on Naukri!</span>
                        <span className={styles.sub}>Your chance to build that dream career is here</span>
                </div>

                <div className={styles.reg}>
                    Register Now
                </div>
       </div>
        </div>

        
        </Container>
  )
}
