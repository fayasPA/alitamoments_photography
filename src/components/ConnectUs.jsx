import React from "react";

const ConnectUs = () => {
  return (
    <section className="w-screen px-6 md:px-16 py-10  pt-20 flex flex-col md:flex-row items-start md:items-center justify-between">
      {/* Left Section: Large Text */}
      <div className="text-left flex-1">
        <h1 className="text-6xl md:text-9xl font-bold leading-tight">
          CONNECT <br />
          US
        </h1>
      </div>

      {/* Right Section: Contact Info */}
      <div className="flex-1 flex flex-col items-end text-right space-y-6 mt-10 md:mt-0">
        {/* Contact Information */}
        <div className="space-y-2">
          <p className="font-bold text-lg md:text-xl underline">
          alitamoments@gmail.com
          </p>
          <p className="font-bold text-lg md:text-xl">813-507-8559</p>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
          TO REACH ALITA MOMENTS STUDIO OR TO REQUEST A DETAILED COLLECTION OF OUR
          WEDDING PHOTOGRAPHY SERVICES, PLEASE FEEL FREE TO FILL OUT YOUR
          INFORMATION AND WE WILL CONTACT YOU WITHIN 24 HOURS.
        </p>
      </div>
    </section>
  );
};

export default ConnectUs;