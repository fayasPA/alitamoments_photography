import React from 'react'
import AboutHero from '../components/AboutHero'
import AboutSecond from '../components/AboutSecond'
import EbinSection from '../components/EbinSection'
import SocialFollow from '../components/SocialFollow'
import ServicesList from '../components/ServicesList'

const About = () => {
  return (
    <>
    <div > <AboutHero /> </div>

      <div><ServicesList /></div>

      <div> <AboutSecond /> </div>
      {/* <div><EbinSection /></div> */}
      <div><SocialFollow/></div>
    </>
  )
}

export default About