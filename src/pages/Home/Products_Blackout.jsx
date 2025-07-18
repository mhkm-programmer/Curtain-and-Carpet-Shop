import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";

const MostPopularServices = () => {
  const services = [
    {
      id: 1,
      name: "Carpets",
      subtitle: "Luxurious floor carpets with elegant designs",
      image: "https://8upload.com/image/6841aaf069a93/1080_6.jpg",
      link: "/carpet",
    },
    {
      id: 2,
      name: "Sofa & Mojlish",
      subtitle: "Stylish and comfortable seating for every space",
      image: "https://8upload.com/image/6841a90f0ce5e/1080_4.jpg",
      link: "/sofa",
    },
    {
      id: 3,
      name: "PVC Barkia",
      subtitle: "Durable PVC flooring and wall paneling",
      image: "https://8upload.com/image/6841ac3bf38db/1080_6.jpg",
      link: "/barkia",
    },
    {
      id: 4,
      name: "Moving & Shifting",
      subtitle: "Safe and professional relocation services",
      image: "https://8upload.com/image/6841d82d83d48/shifting2.jpg",
      link: "/moving",
    },
    {
      id: 5,
      name: "Wallpapers",
      subtitle: "Premium wallpaper designs for a stylish interior",
      image: "https://8upload.com/image/68459f80b2944/IMG-20250531-WA0050.jpg",
      link: "/wallpaper",
    },
  ];

  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white text-gray-700 rounded-full shadow-lg cursor-pointer hover:bg-gray-200 transition"
    >
      <FaArrowRight size={18} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white text-gray-700 rounded-full shadow-lg cursor-pointer hover:bg-gray-200 transition"
    >
      <FaArrowLeft size={18} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: "-30px" }}>
        <ul className="flex justify-center gap-2 mt-6">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-700 transition-all duration-300"></div>
    ),
  };

  return (
    <section className="bg-[#F9F5F1] py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm uppercase text-[#8C6239] tracking-wide font-semibold">
          Top Rated Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          Home Improvement Solutions
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Discover our best-selling services, trusted by homeowners and businesses alike, designed to elevate your interiors with quality and care.
        </p>
        <p className="text-[#B8860B] font-medium mt-2">
          Excellence in comfort, design, and reliability.
        </p>
      </div>

      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="px-3">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition duration-300 flex flex-col h-full">
              <img
                src={service.image}
                alt={`${service.name} service`}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5 flex flex-col justify-between h-52">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500">{service.subtitle}</p>
                </div>
                <div className="flex justify-center items-center gap-3 mt-4">
                  <Link
                    to={service.link}
                    className="bg-[#B8860B] hover:bg-[#a97a0a] text-white px-4 py-2 rounded-full text-sm font-medium transition"
                  >
                    View Details
                  </Link>
                  <a
                    href="https://wa.me/97466675946"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-4 py-2 rounded-full text-sm font-medium transition"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MostPopularServices;
