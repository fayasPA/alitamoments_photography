import React from "react";
import { servicesData } from "../assets/js/data";


const ServicesList = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className=" mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1> */}

        {servicesData.map((serviceCategory, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl md:text-7xl font-semibold mb-6 pb-2">
              {serviceCategory.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
              {serviceCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black p-3 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="flex justify-between items-center mb-4 md:gap-3">
                    <h3 className="text-lg md:text-4xl font-bold">{item.title}</h3>
                    <span className="hidden md:block text-[#bca55a] text-lg md:text-3xl text-right">{item.price}</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-xl">{item.description}</p>
                    <span className="block md:hidden text-[#bca55a] text-lg">{item.price}</span>
                    </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
