import React, { useEffect, useRef, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {

  const [selectedEventType, setSelectedEventType] = useState("Event Type");
  const [isopenEventTypes, setIsOpenEventTypes] = useState(false);
  const eventTypeDropdownRef = useRef(null);

  const [selectedRoleType, setSelectedRoleType] = useState("What is your role ?");
  const [isOpenRoleTypes, setIsOpenRoleTypes] = useState(false);
  const roleTypeDropdownRef = useRef(null);

  const [selectedBudget, setSelectedBudget] = useState("Budget");
  const [isOpenBudgets, setIsOpenBudgets] = useState(false);
  const budgetDropdownRef = useRef(null);

  const [selectedConnectedThrough, setSelectedConnectedThrough] = useState("How Did You Hear About Us");
  const [IsOpenConnectedThrough, setIsOpenConnectedThrough] = useState(false);
  const connectedThroughDropdownRef = useRef(null);

  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Date");
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

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setIsOpenDatePicker(false);
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
    <div className="w-full bg-formColor space-y-8 animate-slideInFromLeft mx-auto  pt-14 md:py-20      mt-32">
      <form method="POST" action="#" className="text-black">
        <div className="w-full space-y-7 md:space-y-12 grid grid-cols-1 lg:grid-cols-2 uppercase font-bold">
          {/* Full Name */}
          <div className="px-4 md:px-7 pb-2 border-b border-gray-300">
            <div className="relative">
              <input
                placeholder="John Doe"
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                required
                id="fullName"
                name="fullName"
                type="text"
              />
              <label
                htmlFor="fullName"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-2xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Full Name
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="px-4 md:px-7 pb-2 border-b border-gray-300">
            <div className="relative">
              <input
                placeholder="email@example.com"
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                required
                id="email"
                name="email"
                type="email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-2xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Email
              </label>
            </div>
          </div>

          {/* Where Do You Live */}
          <div
            className="px-4 md:px-7 pb-2 border-b border-gray-300"
          >
            <div className="relative">
              <input
                placeholder="City, Country"
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                required
                id="location"
                name="location"
                type="text"
              />
              <label
                htmlFor="location"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-2xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Where Do You Live
              </label>
            </div>
          </div>

          {/* Event Type */}
          <div
            ref={eventTypeDropdownRef}
            className="px-4 md:px-7 pb-2 border-b border-gray-300 relative"
          >
            <label
              className={`${selectedEventType !== "Event Type" ? "text-black" : "text-formTextColor"
                } text-xl md:text-2xl cursor-pointer flex items-center gap-2`}
              onClick={toggleEventTypeDropdown}
            >
              {selectedEventType}
              <BiSolidDownArrow
                className={`transition-transform duration-300 text-sm ${isopenEventTypes ? "rotate-180" : "rotate-0"
                  }`}
              />
            </label>
            {isopenEventTypes && (
              <div className="absolute left-5 md:left-7 rounded-2xl top-full w-fit pr-3 z-20 bg-white shadow-lg">
                <ul className="text-formDropdownColor space-y-2 pl-3 pr-5 py-4 text-xs md:text-base">
                  {["Wedding", "Elopement", "Engagement", "Commercial"].map(
                    (eventType) => (
                      <li
                        key={eventType}
                        className="hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setSelectedEventType(eventType);
                          setIsOpenEventTypes(false);
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


          <div
            ref={roleTypeDropdownRef}
            className="px-4 md:px-7 pb-2 border-b border-gray-300 relative"
          >
            <label
              className={`${selectedRoleType !== "What is your role ?" ? "text-black" : "text-formTextColor"
                } text-xl md:text-2xl cursor-pointer flex items-center gap-2`}
              onClick={toggleRoleTypeDropdown}
            >
              {selectedRoleType}
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
                          setSelectedRoleType(eventType);
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
          <div ref={datePickerDropdownRef} className="px-4 md:px-7 pb-2 border-b border-gray-300 relative">
            <label
              className={`${selectedDate !== "Date" ? "text-black" : "text-formTextColor"
                } text-xl md:text-2xl cursor-pointer flex items-center gap-2`}
              onClick={toggleDatePickerDropdown}
            >
              {selectedDate}
              <BiSolidDownArrow
                className={`transition-transform duration-300 text-sm ${isOpenDatePicker ? "rotate-180" : "rotate-0"}`}
              />
            </label>

            {isOpenDatePicker && (
              <div className="absolute left-5 md:left-7 rounded-2xl top-full w-[50%] z-20 bg-white shadow-lg overflow-hidden">
                <input
                  type="date"
                  className="text-formDropdownColor w-full px-4 py-2 bg-gray-300 border-none focus:outline-none"
                  onChange={handleDateChange}
                />
              </div>
            )}
          </div>

          {/* Event Location */}
          <div className="px-4 md:px-7 pb-2 border-b border-gray-300">
            <div className="relative">
              <input
                placeholder="Venue"
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                required
                id="eventLocation"
                name="eventLocation"
                type="text"
              />
              <label
                htmlFor="eventLocation"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-2xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Event Location
              </label>
            </div>
          </div>

          {/* Budget */}
          <div
            ref={budgetDropdownRef}
            className="px-4 md:px-7 pb-2 border-b border-gray-300 relative"
          >
            <label
              className={`${selectedBudget !== "Budget" ? "text-black" : "text-formTextColor"
                } text-xl md:text-2xl cursor-pointer flex items-center gap-2`}
              onClick={toggleBudgetTypeDropdown}
            >
              {selectedBudget}
              <BiSolidDownArrow
                className={`transition-transform duration-300 text-sm ${isOpenBudgets ? "rotate-180" : "rotate-0"
                  }`}
              />
            </label>
            {isOpenBudgets && (
              <div className="absolute left-5 md:left-7 rounded-2xl top-full w-fit pr-3 z-20 bg-white shadow-lg">
                <ul className="text-formDropdownColor space-y-2 pl-3 pr-5 py-4 text-xs md:text-base">
                  {["8k-20k", "20k-30k", "more than 30k"].map(
                    (eventType) => (
                      <li
                        key={eventType}
                        className="hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setSelectedBudget(eventType);
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
            className="px-4 md:px-7 pb-2 border-b border-gray-300 relative"
          >
            <label
              className={`${selectedConnectedThrough !== "How Did You Hear About Us" ? "text-black" : "text-formTextColor"
                } text-xl md:text-2xl cursor-pointer flex items-center gap-2`}
              onClick={toggleConnectedThroughDropdown}
            >
              {selectedConnectedThrough}
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
                          setSelectedBudget(eventType);
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

          {/* Bride's Insta Name */}
          <div className="px-4 md:px-7 pb-2 border-b border-gray-300">
            <div className="relative">
              <input
                placeholder="@bridesinsta"
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                required
                id="brideInsta"
                name="brideInsta"
                type="text"
              />
              <label
                htmlFor="brideInsta"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-2xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Bride's Insta Name
              </label>
            </div>
          </div>

          {/* Message */}
          <div className="px-4 md:px-7 pb-2 border-b border-gray-300 md:col-span-2">
            <div className="relative">
              <textarea
                placeholder="Write your message here..."
                className="peer text-xl md:text-2xl pt-2 md:pt-3 w-full bg-transparent placeholder-transparent focus:outline-none"
                required
                id="message"
                name="message"
              />
              <label
                htmlFor="message"
                className="absolute left-0 transition-all peer-placeholder-shown:text-formTextColor peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-2xl peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-black peer-focus:font-normal peer-placeholder-shown:top-2 peer-focus:-top-3 peer-valid:-top-3 peer-valid:font-normal"
              >
                Message
              </label>
            </div>
          </div>


          {/* Consent */}
          {/* Email */}
          

          
        </div>

        <div className="px-4 md:px-7 flex justify-between pt-5 md:pt-10">
            <div className="flex items-start  space-x-4 md:w-1/2">
              <input
                placeholder="email@example.com"
                className="peer mt-1 md:mt-2 text-xl md:text-2xl w-fit bg-transparent placeholder-transparent focus:outline-none"
                required
                id="consent"
                name="consent"
                type="checkbox"
              />
              <label
                htmlFor="consent"
                className="transition-all text-[#0007] text-[.6rem] md:text-base font-normal peer-valid:text-black"
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
              className="w-full text-black uppercase text-xl font-medium transition-all flex items-center gap-2"
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
