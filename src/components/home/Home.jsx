import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Hero from '../hero/Hero'
import Services from '../services/Services'
import Experience from '../experience/Experience'

function Home() {
  return (
    <>
        {/* <Sidebar/> */}
        <Hero/>
        <Services/>
        <Experience/>
    </>
  )
}

export default Home
