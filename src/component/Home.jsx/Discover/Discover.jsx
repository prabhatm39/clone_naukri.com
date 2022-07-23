

import React from 'react';
import styles from "./dis.module.css";
import { SimpleGrid, Box } from '@chakra-ui/react'

export const Discover = () => {
  return (
    <div className={styles.dis}>
    
    <div className={styles.left}>
        <img src="https://static.naukimg.com/s/0/0/i/role-collection.png" />
        <p className={styles.head}>Discover jobs across popular roles</p>
        <p className={styles.bod}>Select a role and we'll show you relevant jobs for it!</p>
    </div>
    <div className={styles.right}>
        <div className={styles.grid}>
       


















    <SimpleGrid columns={2} spacing={10} className={styles.gi}>
  <Box className={styles.bo}>
    <p className={styles.up}> Full Stack Developer</p>
    <p className={styles.do}>26.4K+ Jobsarrow-icon</p>
  </Box>
  <Box className={styles.bo}>
    <p className={styles.up}>Mobile / App Developer</p>
    <p className={styles.do}>2K+ Jobsarrow-icon</p>
  </Box>
  <Box className={styles.bo}>
    <p className={styles.up}>Front End Developer</p>
    <p className={styles.do}>2.6K+ Jobsarrow-icon</p>
  </Box>
  <Box className={styles.bo}>
    <p className={styles.up}>DevOps Engineer</p>
    <p className={styles.do}>1.6K+ Jobsarrow-icon</p>
  </Box>
  <Box className={styles.bo}>
    <p className={styles.up}>Engineering Manager</p>
    <p className={styles.do}>1.7K+ Jobsarrow-icon</p>
  </Box>
  <Box className={styles.bo}>
    <p className={styles.up}>Technical Lead</p>
    <p className={styles.do}>14.8K+ Jobsarrow-icon</p>
  </Box>
</SimpleGrid>
    </div>
    </div>
    </div>
  )
}
