import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    where: '',
    eventType: '',
    role: '',
    date: '',
    eventLocation: '',
    budget: '',
    hearAboutUs: '',
    brideInstagram: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, consent: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-formColor p-10 rounded-lg shadow-lg w-full space-y-8 ">
      {/* Form Header */}
      <h2 className="text-2xl font-bold text-gray-700 text-center">Contact Us</h2>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group">
          <label htmlFor="fullName" className="absolute top-2 left-3 text-sm text-gray-500 transition-all duration-200 group-focus-within:scale-75 group-focus-within:-translate-y-4 group-focus-within:text-gray-800">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 text-lg py-2 px-3"
          />
        </div>
        <div className="relative group">
          <label htmlFor="email" className="absolute top-2 left-3 text-sm text-gray-500 transition-all duration-200 group-focus-within:scale-75 group-focus-within:-translate-y-4 group-focus-within:text-gray-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 text-lg py-2 px-3"
          />
        </div>
        <div className="relative group">
          <label htmlFor="where" className="absolute top-2 left-3 text-sm text-gray-500 transition-all duration-200 group-focus-within:scale-75 group-focus-within:-translate-y-4 group-focus-within:text-gray-800">
            Where do you live?
          </label>
          <input
            id="where"
            name="where"
            type="text"
            value={formData.where}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 text-lg py-2 px-3"
          />
        </div>
        <div className="relative group">
          <label htmlFor="eventType" className="absolute top-2 left-3 text-sm text-gray-500 transition-all duration-200 group-focus-within:scale-75 group-focus-within:-translate-y-4 group-focus-within:text-gray-800">
            Event Type
          </label>
          <input
            id="eventType"
            name="eventType"
            type="text"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 text-lg py-2 px-3"
          />
        </div>
        <div className="relative group">
          <label htmlFor="role" className="absolute top-2 left-3 text-sm text-gray-500 transition-all duration-200 group-focus-within:scale-75 group-focus-within:-translate-y-4 group-focus-within:text-gray-800">
            Your Role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={formData.role}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 text-lg py-2 px-3"
          />
        </div>
        <div className="relative group">
          <label htmlFor="date" className="absolute top-2 left-3 text-sm text-gray-500 transition-all duration-200 group-focus-within:scale-75 group-focus-within:-translate-y-4 group-focus-within:text-gray-800">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="text"
            value={formData.date}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 text-lg py-2 px-3"
            placeholder=""
          />
        </div>
        <div className="relative group">
          <label htmlFor="eventLocation" className="absolute top-2 left-3 text-sm text-gray-500 transition-all duration-200 group-focus-within:scale-75 group-focus-within:-translate-y-4 group-focus-within:text-gray-800">
            Event Location
          </label>
          <input
            id="eventLocation"
            name="eventLocation"
            type="text"
            value={formData.eventLocation}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 text-lg py-2 px-3"
          />
        </div>
        <div className="relative group">
          <label htmlFor="budget" className="absolute top-2 left-3 text-sm text-gray-500 transition-all duration-200 group-focus-within:scale-75 group-focus-within:-translate-y-4 group-focus-within:text-gray-800">
            Budget
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 text-lg py-2 px-3"
          />
        </div>
        <div className="relative group">
          <label htmlFor="hearAboutUs" className="absolute top-2 left-3 text-sm text-gray-500 transition-all duration-200 group-focus-within:scale-75 group-focus-within:-translate-y-4 group-focus-within:text-gray-800">
            How did you hear about us?
          </label>
          <input
            id="hearAboutUs"
            name="hearAboutUs"
            type="text"
            value={formData.hearAboutUs}
            onChange={handleChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 text-lg py-2 px-3"
          />
        </div>
      
      </div>

      {/* Bride's Instagram */}
      <div className="relative group">
        <label htmlFor="brideInstagram" className="absolute top-2 left-3 text-sm text-gray-500 transition-all duration-200 group-focus-within:scale-75 group-focus-within:-translate-y-4 group-focus-within:text-gray-800">
          Bride's Instagram Name
        </label>
        <input
          id="brideInstagram"
          name="brideInstagram"
          type="text"
          value={formData.brideInstagram}
          onChange={handleChange}
          className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 text-lg py-2 px-3"
        />
      </div>

      {/* Message */}
      <div className="relative group">
        <label htmlFor="message" className="absolute top-2 left-3 text-sm text-gray-500 transition-all duration-200 group-focus-within:scale-75 group-focus-within:-translate-y-4 group-focus-within:text-gray-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 text-lg py-2 px-3 h-32 resize-none"
          placeholder=""
        />
      </div>

      {/* Consent and Submit */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-4 md:space-y-0">
        <label className="flex items-center text-sm text-gray-600">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          I consent to have my data stored for service purposes.
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;