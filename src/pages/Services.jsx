import React from 'react'
import EbinSection from '../components/EbinSection'
import SocialFollow from '../components/SocialFollow'
import ServicesList from '../components/ServicesList'
import ServicesHero from '../components/ServicesHero'
import ServicesFooter from '../components/ServicesFooter'

const Services = () => {
  return (
    <>
    <div > <ServicesHero /> </div>

      <div><ServicesList /></div>

      <div> <ServicesFooter /> </div>
      {/* <div><EbinSection /></div> */}
    </>
  )
}

export default Services