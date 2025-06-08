import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      image: "https://8upload.com/image/67a01a1ccc5a5/Ahmed_Al-Ansari.jpg",
      quote: "Their custom curtains added a luxurious feel to our villa—precise fitting and top-notch fabric.",
      name: "Ahmed Al-Ansari",
      title: "Property Owner, Doha",
    },
    {
      image: "https://8upload.com/image/67a01a1ca7613/Noor_Fatima.jpg",
      quote: "Beautiful carpets and professional installation—our office now looks elegant and welcoming.",
      name: "Noor Fatima",
      title: "HR Manager, Qatar Tech Solutions",
    },
    {
      image: "https://8upload.com/image/67a01a1c849be/Mohammed_Khalifa.jpg",
      quote: "Outstanding craftsmanship and fast service. The best curtains and carpet solutions in town!",
      name: "Mohammed Khalifa",
      title: "CEO, Khalifa Enterprises",
    },
    {
      image: "https://8upload.com/image/67a01a1c6130d/Sara_Ibrahim.jpg",
      quote: "From consultation to installation—everything was smooth and highly professional.",
      name: "Sara Ibrahim",
      title: "Interior Designer, Doha",
    },
  ];

  const items = reviews.map((review, index) => (
    <div
      key={index}
      className="flex flex-col items-center w-full p-6 space-y-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 dark:bg-gray-900 dark:text-gray-100"
    >
      <img
        src={review.image}
        alt={review.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-[#B8860B] transition-all duration-300 transform hover:scale-110"
      />
      <blockquote className="text-lg italic font-medium text-center text-gray-700 dark:text-gray-300">
        “{review.quote}”
      </blockquote>
      <div className="text-center">
        <p className="font-semibold text-[#B8860B] dark:text-[#8B5A2B]">{review.name}</p>
        <p className="text-gray-500 dark:text-gray-400">{review.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="py-12 bg-[#FAF8F0] dark:bg-gray-800">
      <div className="container px-6 mx-auto">
        <h2 className="text-4xl font-bold text-[#6B4226] text-center mb-6">
          Client Testimonials
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Discover how our curtains and carpets have transformed spaces across Qatar.
        </p>
        <div className="max-w-5xl mx-auto">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={4000}
            infinite
            animationDuration={1200}
            disableButtonsControls
            disableDotsControls={false}
            responsive={{
              0: { items: 1 },
              640: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
