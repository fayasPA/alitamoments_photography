import React, { useState } from 'react'
import { companyEmail, companyPhoneNo } from '../utils/Constants';

import { MdEmail, MdLocationOn } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';
import axios from 'axios';
import { toast } from 'react-toastify';
import { POST_ENQUIRY_FORM } from '../utils/urls';

const ContactForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formValues.name) newErrors.name = 'Name is required';
        if (!formValues.phone_number || !/^\d{10,12}$/.test(formValues.phone_number)) {
            newErrors.phone_number = 'A valid phone number with 10 to 12 digits is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        if (errors[name]) {
            const newErrors = { ...errors };
            delete newErrors[name];
            setErrors(newErrors);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const countryCode = '91'; // Default country code
                const fullPhoneNumber = `${countryCode}${formValues.phone_number}`;

                await toast.promise(
                    axios.post(POST_ENQUIRY_FORM, new URLSearchParams({
                        ...formValues
                    }).toString()),
                    {
                        pending: 'Submitting...',
                        success: 'Form submitted successfully!',
                        error: 'Error submitting form',
                    }
                );

                setFormValues({ name: '', email: '', phone_number: '', message: '' }); // Reset form fields
            } catch (error) {
                console.error("Form submission error:", error);
            }
        } else {
            toast.error("Please fill out all required fields.");
        }
    };

    return (
        <>
            <div className="bg-gray-100 p-8 min-h-screen flex flex-col items-center">
                {/* Header Section */}
                <div className="max-w-2xl text-start mb-8">
                    <h1 className="text-3xl font-light text-gray-800">LET'S CONNECT!</h1>
                    <p className="text-gray-600 mt-4">
                        Our journey towards capturing unforgettable moments begins here. Whether you're ready to book your session or simply want to discuss ideas, I'm thrilled to hear from you. Share your vision, ask questions, or inquire about availability. Every story is unique, and I'm excited to be a part of yours. Drop a message below, and let's start crafting your cherished memories together.
                    </p>
                </div>

                {/* Form Section */}
                <form className=" rounded-lg max-w-2xl w-full">
                    <div className="mb-1 md:mb-4">
                        <label className="block text-gray-700 text-sm font-extralight " htmlFor="name">
                            NAME *
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                        />
                    </div>

                    <div className="mb-1 md:mb-4">
                        <label className="block text-gray-700 text-sm font-extralight " htmlFor="email">
                            EMAIL ADDRESS *
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                        />
                    </div>

                    <div className="mb-1 md:mb-4">
                        <label className="block text-gray-700 text-sm font-extralight " htmlFor="session">
                            WHAT TYPE OF SESSION ARE YOU LOOKING FOR? *
                        </label>
                        <select
                            id="session"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                        >
                            <option value="">Select option</option>
                            <option value="wedding">Wedding</option>
                            <option value="portrait">Portrait</option>
                            <option value="event">Event</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="mb-1 md:mb-4">
                        <label className="block text-gray-700 text-sm font-extralight " htmlFor="date">
                            EVENT DATE
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                        />
                    </div>

                    <div className="mb-1 md:mb-4">
                    <label className="block text-gray-700 text-sm font-extralight " htmlFor="message">
                            MESSAGE *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formValues.message}
                            onChange={handleInputChange}
                            className="p-3 text-black focus:outline-none w-full rounded-md placeholder:text-xs md:placeholder:text-base"
                            rows="4"
                            aria-label="Your Message"
                        />
                    </div>

                    <div className="mb-1 md:mb-4">
                        <label className="block text-gray-700 text-sm font-extralight " htmlFor="session">
                        How did you hear about me? *
                        </label>
                        <select
                            id="session"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                        >
                            <option value="">Select option</option>
                            <option value="Friends/Family">Friends/Family</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Another Vendor">Another Vendor</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className='flex items-center justify-center'>
                    <button
                        type="submit"
                        className="bg-gray-800 text-white font-extralight py-2 md:py-4 px-14 md:px-20 w-fit hover:bg-gray-700 transition"
                    >
                        SUBMIT
                    </button>
                    </div>
                </form>
            </div>

            <section aria-labelledby="map-title" className='h-96 md:h-96'>
                <h2 id="map-title" className="sr-only">Our Location on Map</h2>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.1639641805045!2d-82.29279880204943!3d27.80472347584152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d3f869cd9823%3A0xef5c2d61e7851ed9!2s11707%20Summer%20Springs%20Dr%2C%20Riverview%2C%20FL%2033579%2C%20USA!5e0!3m2!1sen!2sin!4v1732608621480!5m2!1sen!2sin"
                    width="100%"
                    className="h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Google Map Location"
                ></iframe>
            </section>
        </>
    )
}

export default ContactForm
