import React from 'react'

import NavBar from '../Components/NavBar'
import HeroImg2 from '../Components/HeroImg2'
import Footer from '../Components/Footer'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work'


const Projects = () => {
  return (
    <>
    <div>
      <NavBar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
    </>
  )
}

export default Projects