import React from 'react'
import HeroSection from '../components/Hero'
import AboutSection from '../components/AboutSection'
import FeatureLinks from '../components/FeatureLinks'
import TestimonialCard from '../components/Testimonials'


const Home = () => {
  return (
    <>
    <div className='bg-black'> 
    <div><HeroSection /></div>
    <div><AboutSection /></div>
    <div><FeatureLinks /></div>
    <div><AboutSection /></div>
    <div><TestimonialCard /></div>


    </div>

    </>
  )
}

export default Home