
import React from "react";
import Slider from "react-slick";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const HeroSlider = () => {
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
    {
      type: "image",
      src: "https://8upload.com/image/6841a9c551ebd/1080_13.jpg",
      title: "Luxurious Curtains Collection",
      subtitle: "Tailored elegance for modern living spaces.",
      buttons: [
        {
          label: "Visit Our Showroom",
          href: "https://g.co/kgs/TvC8hir",
          bgColor: "#B8860B",
          hoverColor: "#a97a0a",
          icon: <FaMapMarkerAlt />,
        },
        {
          label: "Chat on WhatsApp",
          href: "https://wa.me/+97466675946",
          bgColor: "#25D366",
          hoverColor: "#1ebe5b",
          icon: <FaWhatsapp />,
        },
      ],
    },
     {
      type: "image",
      src: "https://8upload.com/image/6841a9877538d/1080_2.jpg",
        title: "Customized Curtain Fabrics",
      subtitle: "Elegant & functional designs tailored for you.",
      buttons: [
        {
          label: "Visit Our Showroom",
          href: "https://g.co/kgs/TvC8hir",
          bgColor: "#B8860B",
          hoverColor: "#a97a0a",
          icon: <FaMapMarkerAlt />,
        },
        {
          label: "Chat on WhatsApp",
          href: "https://wa.me/+97466675946",
          bgColor: "#25D366",
          hoverColor: "#1ebe5b",
          icon: <FaWhatsapp />,
        },
      ],
    },
     {
      type: "image",
      src: "https://8upload.com/image/6841a98848094/1080_6.jpg",
        title: "Customized Curtain Fabrics",
      subtitle: "Elegant & functional designs tailored for you.",
      buttons: [
        {
          label: "Visit Our Showroom",
          href: "https://g.co/kgs/TvC8hir",
          bgColor: "#B8860B",
          hoverColor: "#a97a0a",
          icon: <FaMapMarkerAlt />,
        },
        {
          label: "Chat on WhatsApp",
          href: "https://wa.me/+97466675946",
          bgColor: "#25D366",
          hoverColor: "#1ebe5b",
          icon: <FaWhatsapp />,
        },
      ],
    },
    {
      type: "image",
      src: "https://8upload.com/image/6841ab2679df6/1080_2.jpg",
      title: "Premium Cabinet Designs",
      subtitle: "Soft textures, timeless comfort for every step.",
        buttons: [
        {
          label: "Visit Our Showroom",
          href: "https://g.co/kgs/TvC8hir",
          bgColor: "#B8860B",
          hoverColor: "#a97a0a",
          icon: <FaMapMarkerAlt />,
        },
        {
          label: "Chat on WhatsApp",
          href: "https://wa.me/+97466675946",
          bgColor: "#25D366",
          hoverColor: "#1ebe5b",
          icon: <FaWhatsapp />,
        },
      ],
    },
    // {
    //   type: "video",
    //   videoType: "streamable",
    //   src: "https://streamable.com/e/yfn739",
    //   title: "Live Curtain Installation",
    //   subtitle: "See how we transform your space with style.",
    //     buttons: [
    //     {
    //       label: "Visit Our Showroom",
    //       href: "https://g.co/kgs/TvC8hir",
    //       bgColor: "#B8860B",
    //       hoverColor: "#a97a0a",
    //       icon: <FaMapMarkerAlt />,
    //     },
    //     {
    //       label: "Chat on WhatsApp",
    //       href: "https://wa.me/+97466675946",
    //       bgColor: "#25D366",
    //       hoverColor: "#1ebe5b",
    //       icon: <FaWhatsapp />,
    //     },
    //   ],
    // },
    // {
    //   type: "video",
    //   videoType: "streamable",
    //   src: "https://streamable.com/e/c8ulgh",
    //   title: "Customized Curtain Fabrics",
    //   subtitle: "Elegant & functional designs tailored for you.",
    //  buttons: [
    //     {
    //       label: "Visit Our Showroom",
    //       href: "https://g.co/kgs/TvC8hir",
    //       bgColor: "#B8860B",
    //       hoverColor: "#a97a0a",
    //       icon: <FaMapMarkerAlt />,
    //     },
    //     {
    //       label: "Chat on WhatsApp",
    //       href: "https://wa.me/+97466675946",
    //       bgColor: "#25D366",
    //       hoverColor: "#1ebe5b",
    //       icon: <FaWhatsapp />,
    //     },
    //   ],
    // },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-screen overflow-hidden">
            {/* Media */}
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-screen object-cover"
                loading="lazy"
              />
            ) : (
              <iframe
                src={`${slide.src}?autoplay=1&muted=1`}
                allow="autoplay; fullscreen"
                allowFullScreen
                title={`Video ${index + 1}`}
                className="w-full h-screen object-cover"
                style={{ border: "none" }}
              />
            )}

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-10 pt-14 text-white text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
             {/* <p className="text-lg md:text-xl max-w-2xl mb-6 text-center items-centre justify-center">{slide.subtitle}</p> */}


              <div className="flex flex-wrap gap-4 justify-center">
                {slide.buttons.map((btn, btnIdx) => (
                  <a
                    key={btnIdx}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition duration-300"
                    style={{ backgroundColor: btn.bgColor }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = btn.hoverColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = btn.bgColor)}
                  >
                    {btn.icon} {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
