import React from "react";
import { FaRug, FaShippingFast, FaShieldAlt, FaThumbsUp } from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const Carpets = () => {
 const mediaGallery = [
      { type: "image", src: "https://8upload.com/image/68337d45aa60e/IMG-20250518-WA0039.jpg" },
  { type: "video", src: "https://streamable.com/e/md5pe4" },
  { type: "image", src: "https://8upload.com/image/68337cbb8461d/IMG-20250518-WA0006.jpg" },
  { type: "video", src: "https://streamable.com/e/a82dgf" },
  { type: "image", src: "https://8upload.com/image/67ab0bd2011aa/office2.jpg" },
  { type: "video", src: "https://streamable.com/e/cxrr13" },
  { type: "image", src: "https://8upload.com/image/67ab0bdb0ea7e/office4.jpg" },
  { type: "image", src: "https://8upload.com/image/67ab0be4cf914/office6.jpg" },
  ];
  return (
    <div className="font-sans text-gray-900">
      <PageTitle title="Carpets Service in Qatar | AZLAAN CONTRACTING W.L.L" />

      <ParallaxSection
        imagePath="https://8upload.com/image/carpets-parallax.jpg"
        title="Premium Carpets Services"
        subTitle="Comfort • Style • Quality"
      />

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4A342E]">
          Quality Carpets Installation & Sales in Qatar
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          AZLAAN CONTRACTING W.L.L offers premium carpets tailored to enhance your home or office with durable, stylish, and comfortable flooring solutions.
        </p>
      </section>

     {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Gallery: Our Work in Action</h2>
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
            <FaRug size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Wide Range of Carpets</h3>
            <p className="text-gray-700">Various styles and materials to suit any interior design and preference.</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaShippingFast size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery & Installation</h3>
            <p className="text-gray-700">Efficient services ensuring quick setup without compromising quality.</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaShieldAlt size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Durability Guaranteed</h3>
            <p className="text-gray-700">High-quality carpets that withstand wear & tear while retaining beauty.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold text-[#4A342E] mb-10">What Our Clients Say</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-xl shadow-md italic text-gray-700">
            “The carpets we purchased from AZLAAN are stunning and really elevated our office ambiance. Highly recommended!”
            <br />
            <span className="block mt-4 font-semibold text-[#4A342E]">— Aisha M., Doha</span>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl shadow-md italic text-gray-700">
            “Professional service and quick installation. Our living room carpet is both beautiful and comfortable.”
            <br />
            <span className="block mt-4 font-semibold text-[#4A342E]">— Youssef K., Al Rayyan</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f9f7f4] py-20 px-6 text-center">
        <h3 className="text-3xl font-bold text-[#4A342E] mb-10">Why Choose AZLAAN?</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaRug size={36} className="text-[#4A342E] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Expert Carpet Selection</h4>
            <p className="text-gray-700">Guidance on choosing carpets that fit your needs and style perfectly.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaThumbsUp size={36} className="text-[#4A342E] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Customer Satisfaction</h4>
            <p className="text-gray-700">We ensure your full satisfaction with quality products and service.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaShieldAlt size={36} className="text-[#4A342E] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Reliable Aftercare</h4>
            <p className="text-gray-700">Support and maintenance advice to keep your carpets looking new.</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-[#B8860B] py-20 text-white text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Space with Beautiful Carpets!</h3>
        <p className="text-lg mb-6">Contact AZLAAN CONTRACTING W.L.L for premium carpet solutions tailored to you.</p>
        <a
          href="https://wa.me/97470373588"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          WhatsApp Us
        </a>
      </section>
    </div>
  );
};

export default Carpets;
