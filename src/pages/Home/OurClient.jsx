import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import React from "react";

const OurClient = () => {
  const logos = [
    { src: "https://8upload.com/image/67a012759526a/logo1.png", alt: "Client 1" },
    { src: "https://8upload.com/image/67a0127588f6f/logo2.png", alt: "Client 2" },
    { src: "https://8upload.com/image/67a012757822f/logo3.png", alt: "Client 3" },
    { src: "https://8upload.com/image/67a01275685b3/logo4.png", alt: "Client 4" },
    { src: "https://8upload.com/image/67a012755c112/logo5.png", alt: "Client 5" },
    { src: "https://8upload.com/image/67a012754d00c/logo6.png", alt: "Client 6" },
    { src: "https://8upload.com/image/67a01275404f1/logo7.png", alt: "Client 7" },
    { src: "https://8upload.com/image/67a012752aa7e/logo8.png", alt: "Client 8" },
    { src: "https://8upload.com/image/67a012751e270/logo9.png", alt: "Client 9" },
    { src: "https://8upload.com/image/67a012750d508/logo10.png", alt: "Client 10" },
    { src: "https://8upload.com/image/67a013aaa8575/logo11.png", alt: "Client 11" },
    { src: "https://8upload.com/image/67a013aa913da/logo12.png", alt: "Client 12" },
    { src: "https://8upload.com/image/67a013aa84ff4/logo13.png", alt: "Client 13" },
    { src: "https://8upload.com/image/67a013aa7a8ce/logo14.png", alt: "Client 14" },
    { src: "https://8upload.com/image/67a013aa6d86e/logo15.png", alt: "Client 15" },
  ];

  const items = logos.map((logo, index) => (
    <div
      key={index}
      className="flex justify-center items-center p-4"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="w-36 h-20 object-contain rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out bg-white"
      />
    </div>
  ));

  return (
    <section className="py-16 bg-[#F9F5F1] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5C3A1E] mb-4">
          Trusted by Qatar’s Top Interiors & Furnishing Brands
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          We are proud to serve some of the most respected names in curtains, carpets, upholstery, and interior design. Their trust is our biggest reward.
        </p>

        <div className="mt-10">
          <AliceCarousel
            autoPlay
            autoPlayInterval={1800}
            infinite
            disableButtonsControls
            disableDotsControls
            mouseTracking
            items={items}
            responsive={{
              0: { items: 2 },
              640: { items: 3 },
              768: { items: 4 },
              1024: { items: 5 },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurClient;
