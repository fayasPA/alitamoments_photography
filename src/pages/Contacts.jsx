import React from 'react'
import ContactForm from '../components/ContactForm'
import ConnectUs from '../components/ConnectUs'
import { TransitionWrapper } from '../App'

const Contacts = () => {
  return (
    <TransitionWrapper>

    <div className='mt-10 md:mt-20'>
      <ConnectUs />


      <ContactForm />
    </div>
    </TransitionWrapper>

  )
}

export default Contacts