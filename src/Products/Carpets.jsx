import { FaRulerCombined, FaCogs, FaTruckMoving, FaShieldAlt, FaTools } from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import React from "react";

const Carpets = () => {
  const mediaGallery = [
    { type: "image", src: "https://8upload.com/image/68480206ed8cb/1080_5.jpg" },
    { type: "video", src: "https://streamable.com/e/kixfk8" },
    { type: "image", src: "https://8upload.com/image/6848020729e11/1080_6.jpg" },
    { type: "video", src: "https://streamable.com/e/18l8jn" },
    { type: "image", src: "https://8upload.com/image/68480207c6251/1080_7.jpg" },
    { type: "video", src: "https://streamable.com/e/zf5nv5" },
    { type: "image", src: "https://8upload.com/image/68480208388f2/1080_8.jpg" },
    { type: "image", src: "https://8upload.com/image/6848020881b61/1080_9.jpg" },
  ];

  return (
    <div className="font-sans text-gray-800">
      <PageTitle title="Carpet Supply & Installation | Curtains and Carpets Shop" />
      <ParallaxSection
        imagePath="https://8upload.com/image/6846ac072597b/Carpets-min.png"
        title="Luxury Carpet Solutions"
        subTitle="Elegant • Custom-fit • Commercial & Residential"
      />

      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#B8860B]">
          High-Quality Carpets for Offices, Homes & Hotels
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Curtains and Carpets Shop provides professional carpet supply and installation services for villas, hotels, offices, majlis, and commercial interiors across Qatar. Choose from a wide range of textures, patterns, and colors.
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

      {/* Service Features */}
      <section className="bg-[#f9f7f4] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaRulerCombined size={40} className="text-[#B8860B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Measurements</h3>
            <p className="text-gray-600">We take exact measurements to ensure perfect fit for rooms, halls, staircases, and majlis spaces.</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaCogs size={40} className="text-[#B8860B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Durable & Elegant</h3>
            <p className="text-gray-600">We use high-quality, low-maintenance carpet materials that add comfort and class to every setting.</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaTruckMoving size={40} className="text-[#B8860B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nationwide Service</h3>
            <p className="text-gray-600">We deliver and install carpets all over Qatar — residential, commercial, and industrial projects.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-[#B8860B] mb-10">Client Testimonials</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">“We got beautiful carpets installed in our majlis area — very clean work and fast service!”</p>
            <span className="block mt-4 font-semibold text-[#B8860B]">— Faisal A., Al Wakra</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">“Curtains and Carpets Shop team helped us choose the best design for our hotel lobby. Smooth installation and excellent quality.”</p>
            <span className="block mt-4 font-semibold text-[#B8860B]">— Sara M., Doha</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f9f7f4] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#B8860B] mb-10">Why Curtains and Carpets Shop?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaShieldAlt size={36} className="text-[#B8860B] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">We use only trusted carpet brands and materials that stand the test of time and usage.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaTools size={36} className="text-[#B8860B] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Professional Team</h3>
            <p className="text-gray-600">Our experienced team ensures clean, wrinkle-free installation with smooth edges and perfect finishing.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaTruckMoving size={36} className="text-[#B8860B] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick response, fast site visits, and same-week installation for most projects.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#B8860B] py-20 text-white text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Upgrade Your Space with Premium Carpets</h2>
        <p className="text-lg mb-6">Reach out for consultation, samples, and tailored carpet solutions that suit your needs.</p>
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

export default Carpets;
