import React from 'react'
import ContactForm from '../components/ContactForm'
import ConnectUs from '../components/ConnectUs'
import SocialFollow from '../components/SocialFollow'

const Contacts = () => {
  return (

    <div className='mt-24 md:mt-20'>
      <ConnectUs />


      <ContactForm />
      <SocialFollow/>
    </div>

  )
}

export default Contacts