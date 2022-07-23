

import { Box, Select } from '@chakra-ui/react'
import React from 'react';
import styles from "./Search.module.css";


export const Search = () => {
   return(
    <Box >
        <h1 className={styles.tit}>Find your dream job now</h1>
        <div className={styles.tet}>5 lakh+ jobs for you to explore</div>
        <div className={styles.qsb}>
                <img src="https://static.naukimg.com/s/7/103/i/search.9ec0e1ac.svg" className={styles.searchIcon} />
                <div className={styles.inputbox}>
                    <input type="text" className={styles.input}
                    placeholder="Enter Skill / designations / companies"
                    tabIndex="0" />
                </div>
                <div className={styles.pipe}></div>

               <div className={styles.seldiv}>
                <Select placeholder='Select experiance' className={styles.sele}>
                <option>Fresher <span className={styles.spa}>(less than one year)</span></option>
                    <option>1 year</option>
                    <option>2 years</option>
                    <option>3 years</option>
                    <option>4 years</option>
                    <option>5 years</option>
                    <option>6 years</option>
                    <option>7 years</option>
                    <option>8 years</option>
                    <option>9 years</option>
                    <option>10 years</option>
                    <option>11 years</option>
                    <option>12 years</option>
                    <option>13 years</option>
                    <option>14 years</option>
                    <option>15 years</option>
                    <option>16 years</option>
                    <option>17 years</option>
                    <option>18 years</option>
                    <option>19 years</option>
                    <option>20 years</option>
                    <option>21 years</option>
                    <option>22 years</option>
                    <option>23 years</option>
                    <option>24 years</option>
                    <option>25 years</option>
                    <option>26 years</option>
                    <option>27 years</option>
                    <option>28 years</option>
                    <option>29 years</option>
                    <option>30 years</option>
                </Select>
               </div>
               
               <div className={styles.pipe}></div>

               <div className={styles.inputbo}>
                    <input type="text" className={styles.input}
                    placeholder="Enter location"
                    tabIndex="0" />
                </div>

                <div className={styles.sub}>Submit</div>
              
        </div>
    </Box>
  )
}
