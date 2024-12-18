import React from "react";
import { servicesData } from "../assets/js/data";


const ServicesList = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1> */}

        {servicesData.map((serviceCategory, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl md:text-8xl font-semibold border-b-2 border-white mb-6 pb-2">
              {serviceCategory.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="flex justify-between items-center mb-4 md:gap-3">
                    <h3 className="text-lg md:text-5xl font-bold">{item.title}</h3>
                    <span className="text-amber-700 text-xl md:text-4xl">{item.price}</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-2xl">{item.description}</p>
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
