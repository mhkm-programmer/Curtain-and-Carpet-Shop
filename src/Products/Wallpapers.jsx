import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    src: "https://8upload.com/image/68337d45aa60e/IMG-20250518-WA0039.jpg",
  },
  {
    type: "video",
    videoType: "streamable",
    src: "https://streamable.com/e/md5pe4",
  },
  {
    type: "video",
    videoType: "streamable",
    src: "https://streamable.com/e/cxrr13",
  },
  {
    type: "video",
    videoType: "streamable",
    src: "https://streamable.com/e/a82dgf",
  },
  {
    type: "image",
    src: "https://8upload.com/image/68337cbb8461d/IMG-20250518-WA0006.jpg",
  },
];

const wallpaperGallery = [
  "https://8upload.com/image/67ab0bce5e3e5/office1.jpg",
  "https://8upload.com/image/67ab0bd2011aa/office2.jpg",
  "https://8upload.com/image/67ab0bd57aaae/office3.jpg",
  "https://8upload.com/image/67ab0bdb0ea7e/office4.jpg",
  "https://8upload.com/image/67ab0be06d35b/office5.jpg",
  "https://8upload.com/image/67ab0be4cf914/office6.jpg",
];

const Wallpapers = () => {
  return (
    <div className="font-sans text-gray-800">
      <PageTitle title="Luxury Wallpapers for Rooms & Offices in Qatar" />

      {/* Hero Banner */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab0ba8e2452/office-banner.jpg"
        title="Premium Wallpaper Installation"
        subTitle="Transform Your Space with Style & Precision"
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
          Enhance Your Interior with High-End Wallpaper Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover a collection of elegant wallpapers designed for both modern homes and professional offices. We bring you superior craftsmanship, durable finishes, and stylish textures tailored to your needs in Qatar.
        </p>
      </section>

      {/* Project Showcase */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-center text-[#2C2C2C] mb-10">
          Recent Work: Images & Video Showcase
        </h2>
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md">
              {slide.type === "image" ? (
                <img
                  src={slide.src}
                  alt={`Wallpaper Image ${index + 1}`}
                  className="w-full h-[420px] object-cover"
                />
              ) : (
                <iframe
                  src={slide.src}
                  title={`Video ${index}`}
                  className="w-full h-[420px]"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ))}
        </Slider>
      </section>

      {/* Wallpaper Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-center text-[#2C2C2C] mb-10">
          Gallery: Completed Wallpaper Installations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wallpaperGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2C2C2C] py-20 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Schedule Your Free Site Visit Today
        </h2>
        <p className="text-lg mb-6">
          Let our experts help you choose the perfect wallpaper for your room or office. We provide customized options, professional fitting, and prompt service across Qatar.
        </p>
        <a
          href="https://wa.me/97470373588"
          className="inline-block bg-white text-[#2C2C2C] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Get in Touch on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Wallpapers;
