import React from "react";

const WhyChoose = () => {
  const features = [
    {
      title: "Luxury Curtains",
      description: "Elegant, tailor-made curtains crafted from premium fabrics to enhance your interiors.",
      image: "https://8upload.com/image/67a000235804f/Premium_Furniture.jpg",
    },
    {
      title: "Blackout Solutions",
      description: "Stylish blackout curtains designed for privacy, insulation, and light control.",
      image: "https://8upload.com/image/67a000233869c/Skilled_Upholstery.jpg",
    },
    {
      title: "Custom Carpets",
      description: "Durable and decorative carpets customized to match your home or office aesthetics.",
      image: "https://8upload.com/image/67a0002314733/Modern_Interior_Design.jpg",
    },
    {
      title: "Affordable Excellence",
      description: "Superior quality products and services at competitive, customer-friendly prices.",
      image: "https://8upload.com/image/67a00022e0e7f/Affordable_Pricing.jpg",
    },
  ];

  return (
    <section className="px-6 py-16 bg-[#f9f7f3] dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img
          src="https://8upload.com/image/67a01c3b4ad22/Al-FWZ.jpg"
          alt="Curtains and Carpets Logo"
          className="h-20 w-20 rounded-full shadow-lg ring-2 ring-[#6B4226]"
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Why Choose <span className="text-[#6B4226]">Curtains and Carpets Shop</span>
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Trusted by homeowners and interior designers alike, we provide high-quality curtains, carpets,
          and interior solutions tailored to your style and space.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-[#eee0d0] dark:bg-[#b55e2c] transition-colors duration-300 group-hover:bg-[#a97a0a]">
              <img
                src={feature.image}
                alt={`${feature.title} Icon`}
                className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
