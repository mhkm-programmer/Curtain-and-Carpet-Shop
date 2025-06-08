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
      name: "Home and Office Curtains",
      subtitle: "Premium stitched curtains for homes & offices",
      image: "https://8upload.com/image/6841a98848094/1080_6.jpg",
      link: "/curtains/officeCurtain",
    },
    {
      id: 2,
      name: "Home and Office Blinds",
      subtitle: "Elegant blinds for modern interiors",
      image: "https://8upload.com/image/684540e126a01/IMG-20250531-WA0003.jpg",
      link: "/curtains/blinds",
    },
    {
      id: 3,
      name: "Roller Curtains",
      subtitle: "Stylish roller curtains for all spaces",
      image: "https://8upload.com/image/68454116b9f13/IMG-20250531-WA0002.jpg",
      link: "/curtains/roller",
    },
    {
      id: 4,
      name: "TV Cabinets",
      subtitle: "Perfect for light control and privacy",
      image: "https://8upload.com/image/6841ab2659f11/1080_1.jpg",
      link: "/cabinets/tv",
    },
    {
      id: 5,
      name: "Bedroom Cabinets",
      subtitle: "Space-saving and stylish solutions",
      image: "https://8upload.com/image/6841ab2679df6/1080_2.jpg",
      link: "/cabinets/bedroom",
    },
    {
      id: 6,
      name: "Kitchen Cabinets",
      subtitle: "Custom cabinets for Kitchens",
      image: "https://8upload.com/image/68454759d9150/WhatsApp-Image-2024-04-22-at-1.50.19-PM-1024x768.jpeg",
      link: "/cabinets/kitchen",
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
      <div>
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-[#8C6239] tracking-wide font-medium">
            Customer Favorites
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Most Popular Products
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Explore our top-selling curtains and blinds, handpicked for their elegance, functionality, and durability—perfect for homes, kitchens, and offices.
          </p>
        </div>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-3">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition duration-300 flex flex-col h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-5 flex flex-col justify-between h-52">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">{product.subtitle}</p>
                  </div>
                  <div className="flex justify-center items-center gap-3 mt-auto">
                    <Link
                      to={product.link}
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
      </div>
    </section>
  );
};

export default MostPopularProducts;
