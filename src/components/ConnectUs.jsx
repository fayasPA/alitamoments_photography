import React from "react";
import { companyEmail, companyPhoneNo } from "../utils/Constants";

const ConnectUs = () => {
  return (
    <section className="w-full pl-2 md:pl-4 md:pr-10 pt-10 pb-5 flex flex-col md:flex-row justify-between uppercase overflow-hidden">
      {/* Left Section: Large Text */}
      <div className="text-left flex-1">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold leading-tight">
          CONNECT
        </h1>
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold leading-tight">
          US
        </h1>
      </div>

      {/* Right Section: Contact Info */}
      <div className="flex-1 flex flex-col md:items-end md:text-right space-y-14 md:space-y-20 lg:pr-10">
        {/* Contact Information */}
        <div className="flex flex-col">
          <p className="font-bold text-lg md:text-xl underline">
          {companyEmail}
          </p>
          <p className="font-bold text-lg md:text-xl underline">{companyPhoneNo}</p>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-[.9rem] md:text-sm leading-tight max-w-xs md:max-w-md">
          TO REACH ALITA MOMENTS STUDIO OR TO REQUEST A DETAILED COLLECTION OF OUR
          WEDDING PHOTOGRAPHY SERVICES, PLEASE FEEL FREE TO FILL OUT YOUR
          INFORMATION AND WE WILL CONTACT YOU WITHIN 24 HOURS.
        </p>
      </div>
    </section>
  );
};

export default ConnectUs;