import React from 'react'
import AboutHero from '../components/AboutHero'
import FromFounder from '../components/FromFounder'

const About = () => {
  return (
    <section className='bg-black'>
        <div > <AboutHero /> </div>
        <div><FromFounder /></div>
    </section>
  )
}

export default About