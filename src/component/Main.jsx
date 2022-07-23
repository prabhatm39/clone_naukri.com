

import React from 'react'
import { Footer } from './Footer/Footer'
import { Home } from './Home.jsx/Home'
import { Navbar } from './Navbar/Navbar'

export const Main = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <hr />
        <Footer />
    </div>
  )
}
