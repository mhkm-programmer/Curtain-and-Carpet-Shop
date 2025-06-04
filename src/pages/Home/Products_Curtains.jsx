import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";

const MostPopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "Blackout Curtains",
      image: "/images/curtain1.jpg",
      link: "/curtains/blackout",
    },
    {
      id: 2,
      name: "Bedroom Curtains",
      image: "/images/curtain2.jpg",
      link: "/curtains/bedroom",
    },
    {
      id: 3,
      name: "Wave Style Curtains",
      image: "/images/curtain3.jpg",
      link: "/curtains/wave",
    },
    {
      id: 4,
      name: "Living Room Curtains",
      image: "/images/curtain4.jpg",
      link: "/curtains/livingroom",
    },
    {
      id: 5,
      name: "Kitchen Cabinets",
      image: "/images/cabinet1.jpg",
      link: "/cabinets/kitchen",
    },
    {
      id: 6,
      name: "Wall Cabinets",
      image: "/images/cabinet2.jpg",
      link: "/cabinets/wall",
    },
    {
      id: 7,
      name: "Bathroom Cabinets",
      image: "/images/cabinet3.jpg",
      link: "/cabinets/bathroom",
    },
    {
      id: 8,
      name: "Storage Cabinets",
      image: "/images/cabinet4.jpg",
      link: "/cabinets/storage",
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
      <div >
          <div className="text-center mb-12">
            <p className="text-sm uppercase text-[#8C6239] tracking-wide font-medium">
              Customer Favorites
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Most Popular Products
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
              Explore our top-selling curtains and cabinets, handpicked for
              elegance, function, and durability — perfect for homes, kitchens,
              and offices.
            </p>
          </div>
        <Slider {...settings}>
          {products.map((service) => (
            <div key={service.id} className="px-3">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition duration-300 flex flex-col h-full">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-5 flex flex-col justify-between h-48">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {service.name}
                  </h3>
                  <div className="flex justify-center items-center gap-3 mt-auto">
                    <Link
                      to={service.link}
                      className="bg-[#5A4438] hover:bg-[#6B5847] text-white px-4 py-2 rounded-full text-sm font-medium transition"
                    >
                      View Details
                    </Link>
                    <a
                      href="https://wa.me/97470373588"
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
      </div>
    </section>
  );
};

export default MostPopularProducts;
