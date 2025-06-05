import { FaRulerCombined, FaCogs, FaTruckMoving, FaShieldAlt, FaTools } from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import React from "react";

const Barkia = () => {
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
    <div className="font-sans text-gray-800">
      <PageTitle title="SPVC | PVC | Wooden Flooring | AZLAAN CONTRACTING W.L.L" />
      <ParallaxSection
        imagePath="https://8upload.com/image/67a7f51fa667f/Flooring-min.jpg"
        title="Flooring Solutions"
        subTitle="SPVC • Wooden • PVC • Laminate"
      />

      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4A342E]">
          Stylish & Durable Flooring for Every Space
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From modern SPVC and laminate options to classic wooden finishes — AZLAAN CONTRACTING W.L.L provides top-quality flooring supply and installation services across Qatar for homes, offices, and commercial projects.
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

      {/* Service Features */}
      <section className="bg-[#f9f7f4] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaRulerCombined size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Precision Cutting</h3>
            <p className="text-gray-600">Flooring measured and cut precisely to fit every corner and space of your interior.</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaCogs size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Durable Materials</h3>
            <p className="text-gray-600">We offer SPVC, PVC, and wooden options that are waterproof, scratch-resistant, and built to last.</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaTruckMoving size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Qatar-Wide Service</h3>
            <p className="text-gray-600">Full delivery and professional installation services anywhere in Qatar — residential or commercial.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-[#4A342E] mb-10">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">“AZLAAN transformed our office flooring in just two days — neat work and premium quality.”</p>
            <span className="block mt-4 font-semibold text-[#4A342E]">— Khalid M., Doha</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">“We got wooden flooring installed in our villa — elegant finish and very professional team.”</p>
            <span className="block mt-4 font-semibold text-[#4A342E]">— Mariam R., Al Rayyan</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f9f7f4] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#4A342E] mb-10">Why Choose AZLAAN for Flooring?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaShieldAlt size={36} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">We stand behind every material we use with full quality assurance.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaTools size={36} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expert Installation</h3>
            <p className="text-gray-600">Our technicians are trained to install flooring with precision and care.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaTruckMoving size={36} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Turnaround</h3>
            <p className="text-gray-600">From quote to installation, we deliver your flooring project quickly and cleanly.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#B8860B] py-20 text-white text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Flooring Upgrade Today!</h2>
        <p className="text-lg mb-6">Contact us for expert consultation, free measurements, and personalized flooring options.</p>
        <a
          href="https://wa.me/97470373588"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Contact via WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Barkia;
