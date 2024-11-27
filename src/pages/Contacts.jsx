import React from 'react'
import ContactForm from '../components/ContactForm'

const Contacts = () => {
  return (
    <div>
      <header
        className="aboutus h-64 md:h-96 bg-gray-300 text-2xl font-bold flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.pixieset.com/38661386/444ec0952a4734cfccb31fb863fae105-xxlarge.jpg)"
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <span className="text-2xl md:text-3xl text-white">Contact Us</span>
          <p className="text-xs md:text-sm font-light text-white">House of used cars</p>
        </div>
      </header>


      <ContactForm />
    </div>
  )
}

export default Contacts