import React from "react";

const services = [
  {
    category: "Photography Services",
    items: [
      {
        title: "General Event Photography",
        price: "$150/hour",
        description:
          "Capture the essence of your special occasions, from birthday parties and corporate events to family gatherings. Includes high-quality edited images and professional lighting setup.",
      },
      {
        title: "Weddings & Engagements",
        price: "$200/hour",
        description:
          "Dedicated to preserving your once-in-a-lifetime moments with artistic, storytelling photography. Coverage includes ceremonies, reception, and pre-wedding details. Includes expertly edited photos and lighting equipment.",
      },
      {
        title: "Second Shooter (Additional Photographer)",
        price: "$75/hour",
        description:
          "An extra photographer ensures no moment goes unnoticed, capturing candid shots, different angles, and complementary perspectives.",
      },
      {
        title: "Proposal Shoot (2 Hours)",
        price: "$450",
        description:
          "Designed to document the surprise and joy of your proposal. Includes up to two hours of photography and beautifully edited images to cherish forever.",
      },
    ],
  },
  {
    category: "Videography Services",
    items: [
      {
        title: "Live Streaming",
        price: "$450/camera per session (up to 5 hours)",
        description:
          "Broadcast your event in real-time to loved ones who can’t attend. Each session includes setup, professional audio, and video quality. Additional charges apply for sessions exceeding 5 hours.",
      },
      {
        title: "Event Videography",
        price: "$120/hour per camera",
        description:
          "Record your event with cinematic quality. Perfect for weddings, celebrations, or promotional events. Pricing includes professional camera operation and high-quality video capture.",
      },
    ],
  },
  {
    category: "Editing Services",
    items: [
      {
        title: "Highlight Video",
        price: "$250–$350",
        description:
          "A 3–5 minute professionally edited video summarizing the best moments of your event, set to music for a cinematic feel.",
      },
      {
        title: "Full-Length Video",
        price: "$250",
        description:
          "A complete, unabridged edit of your event, perfect for reliving every moment as it unfolded.",
      },
    ],
  },
];

const ServicesList = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1> */}

        {services.map((serviceCategory, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold border-b-2 border-white mb-6 pb-2">
              {serviceCategory.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <span className="text-amber-700 text-xl">{item.price}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{item.description}</p>
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
