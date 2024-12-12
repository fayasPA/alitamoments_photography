import React from 'react'
import FeatureLinks from '../components/FeatureLinks'
import TestimonialCard from '../components/Testimonials'
import HomeHero from '../components/HomeHero'
import FromFounder from '../components/FromFounder'


const Home = () => {
  return (
<div className='bg-black'>
  <div > <HomeHero /> </div>
    <div><FromFounder /></div>
    <div><FeatureLinks /></div>
    <div><TestimonialCard /></div>
</div>
  )
}

export default Home