import React, { useState } from "react";
import Slider from "react-slick";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const HeroSlider = () => {
  const [showOptions, setShowOptions] = useState(false);

  const colors = {
    background: "#F9F5F1",
    primaryText: "#FFFFFF",
    subtitle: "#FFFFFF",
    accent: "#8C6239",
    buttonBase: "#5A4438",
    buttonHover: "#6B5847",
  };

  const handleShowOptions = () => setShowOptions(true);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    adaptiveHeight: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  const slides = [
    { type: "image", src: "https://8upload.com/image/6841a9c551ebd/1080_13.jpg" },
    { type: "video", videoType: "streamable", src: "https://streamable.com/e/yfn739" },
    { type: "video", videoType: "streamable", src: "https://streamable.com/e/hi2vs6" },
    { type: "video", videoType: "streamable", src: "https://streamable.com/e/c8ulgh" },
    { type: "video", videoType: "streamable", src: "https://streamable.com/e/7tf8q3" },
    { type: "image", src: "https://8upload.com/image/6841a9877538d/1080_2.jpg" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Slider */}
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-screen">
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={`Hero slide ${index + 1}`}
                className="w-full h-screen object-cover"
                loading="lazy"
              />
            ) : (
              <iframe
                src={`${slide.src}?autoplay=1&muted=1`}
                allow="autoplay; fullscreen"
                allowFullScreen
                title={`Hero video ${index + 1}`}
                className="w-full h-screen border-0"
              />
            )}
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: colors.primaryText }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl">
          Elegant Curtains & Carpets for Home & Office
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl" style={{ color: colors.subtitle }}>
          <strong>Curtains and Carpets Shop</strong> offers premium custom-made{" "}
          <strong>curtains</strong> and <strong>carpets</strong> that elevate your
          interior with elegance and functionality.
        </p>

        {/* CTA Section */}
        <div className="mt-6">
          {!showOptions ? (
            <button
              onClick={handleShowOptions}
              className="bg-[#B8860B] hover:bg-[#a97a0a] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
            >
              Get a Free Measurement
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://g.co/kgs/TvC8hir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#B8860B] hover:bg-[#a97a0a] text-white px-5 py-3 rounded-lg font-medium transition duration-300"
              >
                <FaMapMarkerAlt /> Visit Our Showroom
              </a>
              <a
                href="https://wa.me/+97466675946"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-5 py-3 rounded-lg font-medium transition duration-300"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
