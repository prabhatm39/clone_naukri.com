import React from 'react'
import { Search } from './HomeComponent/Search'
import { Container, Slider } from '@chakra-ui/react'
import styles from "./Home.module.css";
import { Naukri } from './HomeComponent/Naukri';
import { Slidere } from './HomeComponent/Slidere';
import { TopCom } from './HomeComponent/top companies/TopCom';
import { Featured } from './HomeComponent/Featured/Featured.jsx';
import { Discover } from './Discover/Discover';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';



  

export const Home = () => {
   
  return (
    <Container maxW='3xl'  centerContent >
     
        <Search />
        <Naukri />
        <Slidere />
        <TopCom />
        <Featured />
        <div className={styles.view}>
        View all companies
        </div>
        <Discover />
        
       
    </Container>
  )
}
