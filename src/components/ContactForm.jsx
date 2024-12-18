import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { POST_ENQUIRY_FORM } from "../utils/urls";
import { toast } from "react-toastify";

const ContactForm = () => {

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    location: "",
    eventType: "Event Type",
    roleType: "What is your role ?",
    eventDate: "Date",
    eventLocation: "",
    budget: "Budget",
    connectedThrough: "How Did You Hear About Us",
    brideInsta: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formValues===", formValues)

    if (!formValues.consent) {
      toast.error("You must agree to the consent checkbox.");
      return;
    }

    try {
      await toast.promise(
        axios.post(
          POST_ENQUIRY_FORM,
          new URLSearchParams({
            ...formValues,
          }).toString()
        ),
        {
          pending: "Submitting...",
          success: "Enquiry submitted successfully!",
          error: "Error submitting form",
        }
      );

      // Reset form values after successful submission
      setFormValues({
        fullName: "",
        email: "",
        location: "",
        eventType: "Event Type",
        roleType: "What is your role ?",
        eventDate: "Date",
        eventLocation: "",
        budget: "Budget",
        connectedThrough: "How Did You Hear About Us",
        brideInsta: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Submission error.");
    }
  };

  const [isopenEventTypes, setIsOpenEventTypes] = useState(false);
  const eventTypeDropdownRef = useRef(null);

  const [isOpenRoleTypes, setIsOpenRoleTypes] = useState(false);
  const roleTypeDropdownRef = useRef(null);

  const [isOpenBudgets, setIsOpenBudgets] = useState(false);
  const budgetDropdownRef = useRef(null);

  const [IsOpenConnectedThrough, setIsOpenConnectedThrough] = useState(false);
  const connectedThroughDropdownRef = useRef(null);

  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const datePickerDropdownRef = useRef(null);


  const handleClickOutside = (event) => {
    if (eventTypeDropdownRef.current && !eventTypeDropdownRef.current.contains(event.target)) {
      setIsOpenEventTypes(false);
    }

    if (roleTypeDropdownRef.current && !roleTypeDropdownRef.current.contains(event.target)) {
      setIsOpenRoleTypes(false);
    }

    if (budgetDropdownRef.current && !budgetDropdownRef.current.contains(event.target)) {
      setIsOpenBudgets(false);
    }
    if (connectedThroughDropdownRef.current && !connectedThroughDropdownRef.current.contains(event.target)) {
      setIsOpenConnectedThrough(false);
    }

    if (datePickerDropdownRef.current && !datePickerDropdownRef.current.contains(event.target)) {
      setIsOpenDatePicker(false);
    }
  };

  const toggleDatePickerDropdown = () => {
    setIsOpenDatePicker(!isOpenDatePicker);
  };

  const toggleEventTypeDropdown = () => {
    setIsOpenEventTypes(!isopenEventTypes);
  };

  const toggleRoleTypeDropdown = () => {
    setIsOpenRoleTypes(!isOpenRoleTypes);
  };

  const toggleBudgetTypeDropdown = () => {
    setIsOpenBudgets(!isOpenBudgets);
  };

  const toggleConnectedThroughDropdown = () => {
    setIsOpenConnectedThrough(!IsOpenConnectedThrough);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="w-full bg-formColor animate-slideInFromLeft mx-auto  pt-14 py-10 md:py-20">
      <form onSubmit={handleSubmit} className="text-black" aria-label="Contact form">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 uppercase font-bold">
          {/* Full Name */}
          <div className=" my-2 md:my-3 px-4 md:px-7 pb-2 border-b border-gray-300">
            <div className="relative">
              <input
                placeholder="John Doe"
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                required
                id="fullName"
                name="fullName"
                type="text"
                value={formValues.fullName}
                onChange={handleChange}
              />
              <label
                htmlFor="fullName"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-3xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Full Name
              </label>
            </div>
          </div>

          {/* Email */}
          <div className=" my-2 md:my-3 px-4 md:px-7 pb-2 border-b border-gray-300">
            <div className="relative">
              <input
                placeholder="email@example.com"
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                required
                id="email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-3xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Email
              </label>
            </div>
          </div>

          {/* Where Do You Live */}
          <div
            className=" my-2 md:my-3 px-4 md:px-7 pb-2 border-b border-gray-300"
          >
            <div className="relative">
              <input
                placeholder="City, Country"
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                required
                id="location"
                name="location"
                type="text"
                value={formValues.location}
                onChange={handleChange}
              />
              <label
                htmlFor="location"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-3xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Where Do You Live
              </label>
            </div>
          </div>

          {/* Event Type */}
          <div
            ref={eventTypeDropdownRef}
            className=" my-2 md:my-3 px-4 md:px-7 pb-2 border-b border-gray-300 relative"
          >
            <label
              className={`${formValues.eventType !== "Event Type" ? "text-black" : "text-formTextColor"
                } text-xl md:text-3xl cursor-pointer flex items-center gap-2`}
              onClick={toggleEventTypeDropdown}
            >
              {formValues.eventType}
              <BiSolidDownArrow
                className={`transition-transform duration-300 text-sm ${isopenEventTypes ? "rotate-180" : "rotate-0"
                  }`}
              />
            </label>
            {isopenEventTypes && (
              <div className="absolute left-5 md:left-7 rounded-2xl top-full w-fit pr-3 z-20 bg-white shadow-lg">
                <ul className="text-formDropdownColor space-y-2 pl-3 pr-5 py-4 text-xs md:text-base">
                  {["Wedding", "Elopement", "Engagement", "Commercial"].map(
                    (et) => (
                      <li
                        key={et}
                        className="hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setFormValues((prevValues) => ({
                            ...prevValues,
                            eventType: et,
                          }));
                          setIsOpenEventTypes(false);
                        }}
                      >
                        {et}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Role Type */}
          <div
            ref={roleTypeDropdownRef}
            className=" my-2 md:my-3 px-4 md:px-7 pb-2 border-b border-gray-300 relative"
          >
            <label
              className={`${formValues.roleType !== "What is your role ?" ? "text-black" : "text-formTextColor"
                } text-xl md:text-3xl cursor-pointer flex items-center gap-2`}
              onClick={toggleRoleTypeDropdown}
            >
              {formValues.roleType}
              <BiSolidDownArrow
                className={`transition-transform duration-300 text-sm ${isOpenRoleTypes ? "rotate-180" : "rotate-0"
                  }`}
              />
            </label>
            {isOpenRoleTypes && (
              <div className="absolute left-5 md:left-7 rounded-2xl top-full w-fit pr-3 z-20 bg-white shadow-lg">
                <ul className="text-formDropdownColor space-y-2 pl-3 pr-5 py-4 text-xs md:text-base">
                  {["Bride", "Groom", "Wedding Planner", "Other"].map(
                    (eventType) => (
                      <li
                        key={eventType}
                        className="hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setFormValues((prevValues) => ({
                            ...prevValues,
                            roleType: eventType,
                          }));
                          setIsOpenRoleTypes(false);
                        }}
                      >
                        {eventType}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Event Date */}
          <div ref={datePickerDropdownRef} className=" my-2 md:my-3 px-4 md:px-7 pb-2 border-b border-gray-300 relative">
            <label
              className={`${formValues.eventDate !== "Date" ? "text-black" : "text-formTextColor"
                } text-xl md:text-3xl cursor-pointer flex items-center gap-2`}
              onClick={toggleDatePickerDropdown}
            >
              {formValues.eventDate}
              <BiSolidDownArrow
                className={`transition-transform duration-300 text-sm ${isOpenDatePicker ? "rotate-180" : "rotate-0"}`}
              />
            </label>

            {isOpenDatePicker && (
              <div className="absolute left-5 md:left-7 rounded-2xl top-full w-[50%] z-20 bg-white shadow-lg overflow-hidden">
                <input
                  name="eventDate"
                  type="date"
                  className="text-formDropdownColor w-full px-4 py-2 bg-gray-300 border-none focus:outline-none"
                  // onChange={handleChange}
                  onChange={(e) => {
                    handleChange(e);
                    setIsOpenDatePicker(false)
                  }}
                />
              </div>
            )}
          </div>

          {/* Event Location */}
          <div className=" my-2 md:my-3 px-4 md:px-7 pb-2 border-b border-gray-300">
            <div className="relative">
              <input
                placeholder="Venue"
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                required
                id="eventLocation"
                name="eventLocation"
                type="text"
                value={formValues.eventLocation}
                onChange={handleChange}
              />
              <label
                htmlFor="eventLocation"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-3xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Event Location
              </label>
            </div>
          </div>

          {/* Budget */}
          <div
            ref={budgetDropdownRef}
            className=" my-2 md:my-3 px-4 md:px-7 pb-2 border-b border-gray-300 relative"
          >
            <label
              className={`${formValues.budget !== "Budget" ? "text-black" : "text-formTextColor"
                } text-xl md:text-3xl cursor-pointer flex items-center gap-2`}
              onClick={toggleBudgetTypeDropdown}
            >
              {formValues.budget}
              <BiSolidDownArrow
                className={`transition-transform duration-300 text-sm ${isOpenBudgets ? "rotate-180" : "rotate-0"
                  }`}
              />
            </label>
            {isOpenBudgets && (
              <div className="absolute left-5 md:left-7 rounded-2xl top-full w-fit pr-3 z-20 bg-white shadow-lg">
                <ul className="text-formDropdownColor space-y-2 pl-3 pr-5 py-4 text-xs md:text-base">
                  {["Less than 1k","1k-10k", "10k-20k", "more than 20k"].map(
                    (eventType) => (
                      <li
                        key={eventType}
                        className="hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setFormValues((prevValues) => ({
                            ...prevValues,
                            budget: eventType,
                          }));
                          setIsOpenBudgets(false);
                        }}
                      >
                        {eventType}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* How Did You Hear About Us */}
          <div
            ref={connectedThroughDropdownRef}
            className=" my-2 md:my-3 px-4 md:px-7 pb-2 border-b border-gray-300 relative"
          >
            <label
              className={`${formValues.connectedThrough !== "How Did You Hear About Us" ? "text-black" : "text-formTextColor"
                } text-xl md:text-3xl cursor-pointer flex items-center gap-2`}
              onClick={toggleConnectedThroughDropdown}
            >
              {formValues.connectedThrough}
              <BiSolidDownArrow
                className={`transition-transform duration-300 text-sm ${IsOpenConnectedThrough ? "rotate-180" : "rotate-0"
                  }`}
              />
            </label>
            {IsOpenConnectedThrough && (
              <div className="absolute left-5 md:left-7 rounded-2xl top-full w-fit pr-3 z-20 bg-white shadow-lg">
                <ul className="text-formDropdownColor space-y-2 pl-3 pr-5 py-4 text-xs md:text-base">
                  {["Instagram", "Twitter", "Advertisement", "Friends"].map(
                    (eventType) => (
                      <li
                        key={eventType}
                        className="hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setFormValues((prevValues) => ({
                            ...prevValues,
                            connectedThrough: eventType,
                          }));
                          setIsOpenConnectedThrough(false);
                        }}
                      >
                        {eventType}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Bride's Insta Name */}
          <div className=" my-2 md:my-3 px-4 md:px-7 pb-2 border-b border-gray-300">
            <div className="relative">
              <input
                placeholder="@bridesinsta"
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                required
                id="brideInsta"
                name="brideInsta"
                type="text"
                value={formValues.brideInsta}
                onChange={handleChange}
              />
              <label
                htmlFor="brideInsta"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-3xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Bride's Insta Name
              </label>
            </div>
          </div>


          {/* Message */}
          <div className=" my-2 md:my-3 px-4 md:px-7 pb-2 border-b border-gray-300 md:col-span-2">
            <div className="relative">
              <textarea
                placeholder="Write your message here..."
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                id="message"
                name="message"
                onChange={handleChange}
              />
              <label
                htmlFor="message"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-3xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Message
              </label>
            </div>
          </div>

        </div>

        {/* Consent */}
        <div className=" my-2 md:my-3 px-4 md:px-7 flex justify-between pt-5 md:pt-10">
          <div className="flex items-start  space-x-4 md:w-1/2">
            <input
              placeholder="email@example.com"
              className="peer mt-1 md:mt-2 text-xl md:text-2xl w-fit bg-transparent placeholder-transparent focus:outline-none"
              id="consent"
              name="consent"
              type="checkbox"
              onChange={handleChange}
            />
            <label
              htmlFor="consent"
              className="transition-all text-formTextColor text-[.6rem] md:text-base font-normal peer-checked:text-black"
            >
              I consent for the information submitted above to be recorded and
              stored for the purposes of providing services relating to my inquiry.
              I agree that registration on or use of the Bottega 53 site
              constitutes agreement to its User Agreement &amp; Privacy Policy.
            </label>
          </div>

          <div className="hidden md:flex pr-10">
            <button
              type="submit"
              className="w-full text-black uppercase text-xl font-medium transition-all flex items-center gap-2 hover:opacity-50 duration-1000"
            >
              Send <FaArrowRight className="font-bold text-8xl" />
            </button>
          </div>

        </div>

        {/* Submit Button mobile */}
        <div className="pt-5 px-7 block md:hidden md:col-span-2">
          <button
            type="submit"
            className="w-full bg-black text-white uppercase py-3 text-xl font-bold hover:bg-gray-800 transition-all"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
