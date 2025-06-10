import React from "react";
import { FaCouch, FaPalette, FaStar, FaUsers, FaHandshake } from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const SofaMojlishService = () => {
  const mediaGallery = [
    { type: "image", src: "https://8upload.com/image/6847fd0e958b3/1080_5.jpg" },
    { type: "video", src: "https://streamable.com/e/1sh4bj" },
    { type: "image", src: "https://8upload.com/image/6847fd0ed9c34/1080_6.jpg" },
    { type: "video", src: "https://streamable.com/e/1xxs1g" },
    { type: "image", src: "https://8upload.com/image/6847fd0f24a0d/1080_7.jpg" },
    { type: "video", src: "https://streamable.com/e/smyhrw" },
    { type: "image", src: "https://8upload.com/image/6847fd0f59190/1080_8.jpg" },
    { type: "image", src: "https://8upload.com/image/6847fd0f7504f/1080_9.jpg" },
  ];

  return (
    <div className="font-sans text-gray-900">
      <PageTitle title="Sofa & Mojlish Service in Qatar | Curtains and Carpets Shop" />

      <ParallaxSection
        imagePath="https://8upload.com/image/6846ac3fe00b1/Sofa__Mojlish-min.png"
        title="Elegant Sofa & Mojlish Solutions"
        subTitle="Comfort • Style • Craftsmanship"
      />

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#B8860B]">
          Premium Sofa & Mojlish Services Across Qatar
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Curtains and Carpets Shop specializes in exquisite sofa and mojlish design, repair, and installation, combining traditional craftsmanship with modern comfort to transform your living spaces.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#B8860B]">Gallery: Our Work in Action</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaGallery.map((media, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={`Media ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-64 overflow-hidden">
                  <iframe
                    src={media.src}
                    title={`Video ${index + 1}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Service Highlights */}
      <section className="bg-[#f9f7f4] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaCouch size={40} className="text-[#B8860B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#B8860B]">Custom Sofa Designs</h3>
            <p className="text-gray-700">Tailored to your style and comfort preferences using premium materials.</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaPalette size={40} className="text-[#B8860B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#B8860B]">Traditional Mojlish Craftsmanship</h3>
            <p className="text-gray-700">Handcrafted mojlish fittings that add cultural elegance to your spaces.</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaStar size={40} className="text-[#B8860B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#B8860B]">Durability & Comfort</h3>
            <p className="text-gray-700">Quality craftsmanship ensuring long-lasting furniture with superior comfort.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold text-[#B8860B] mb-10">What Our Clients Say</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-xl shadow-md italic text-gray-700">
            “Curtains and Carpets Shop transformed our living room with elegant sofas and mojlish — outstanding quality and craftsmanship!”
            <br />
            <span className="block mt-4 font-semibold text-[#B8860B]">— Fatima H., Doha</span>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl shadow-md italic text-gray-700">
            “Excellent service and attention to detail. Our mojlish looks beautiful and fits perfectly.”
            <br />
            <span className="block mt-4 font-semibold text-[#B8860B]">— Khalid S., Al Wakrah</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f9f7f4] py-20 px-6 text-center">
        <h3 className="text-3xl font-bold text-[#B8860B] mb-10">Why Choose Curtains and Carpets Shop?</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaUsers size={36} className="text-[#B8860B] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-[#B8860B]">Skilled Artisans</h4>
            <p className="text-gray-700">Experienced craftsmen passionate about preserving traditional techniques with modern comfort.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaHandshake size={36} className="text-[#B8860B] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-[#B8860B]">Customer Satisfaction</h4>
            <p className="text-gray-700">Committed to delivering excellence with transparent communication and aftercare support.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaStar size={36} className="text-[#B8860B] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-[#B8860B]">Premium Materials</h4>
            <p className="text-gray-700">Only the best fabrics, wood, and finishes to ensure durability and aesthetic appeal.</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-[#B8860B] py-20 text-white text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Beautify Your Space? Contact Us Now!</h3>
        <p className="text-lg mb-6">Get expert consultation and custom sofa & mojlish solutions tailored for you.</p>
       <a
          href="https://wa.me/97466675946"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-[#1F1F1F]  font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#1ebe5b] transition"
        >
          Contact Us on WhatsApp
        </a>

      </section>
    </div>
  );
};

export default SofaMojlishService;
