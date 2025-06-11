import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const mediaGallery = [
  { type: "image", src: "https://8upload.com/image/6848d28614440/Office_Curtain1.jpg" },
  // { type: "video", src: "https://streamable.com/e/kixfk8" },
  { type: "image", src: "https://8upload.com/image/6848d28699ccf/Office_Curtain3.jpg" },
  // { type: "video", src: "https://streamable.com/e/18l8jn" },
  { type: "image", src: "https://8upload.com/image/6848d286dc48f/Office_Curtain4.jpg" },
  // { type: "video", src: "https://streamable.com/e/zf5nv5" },
  { type: "image", src: "https://8upload.com/image/6848d28725190/Office_Curtain5.jpg" },

];

const BlindsCurtains = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Meta Title */}
      <PageTitle title="Blinds & Curtains | Curtains and Carpets Shop" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/6846ac0666ea4/Blind__Curtains-min__1_.png"
        title="Blinds & Curtains"
        subTitle="Minimal Design, Maximum Comfort"
        titleClassName="text-[#B8860B]"
        subTitleClassName="text-[#B8860B]"
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#B8860B] mb-6">
          Premium Blinds & Curtains for Every Space
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Transform your interiors with custom-made blinds and curtains. We offer a wide variety of materials, colors, and styles tailored to suit homes, offices, and commercial spaces across Qatar.
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

      {/* Service Highlights */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#B8860B]">Our Services at a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="shadow rounded-xl p-6 bg-white">
            <h3 className="text-xl font-semibold text-[#B8860B] mb-2">Custom Designs</h3>
            <p className="text-gray-600">Tailored curtains and blinds to match your unique style and space.</p>
          </div>
          <div className="shadow rounded-xl p-6 bg-white">
            <h3 className="text-xl font-semibold text-[#B8860B] mb-2">Professional Installation</h3>
            <p className="text-gray-600">Experienced fitters ensure perfect measurements and fittings every time.</p>
          </div>
          <div className="shadow rounded-xl p-6 bg-white">
            <h3 className="text-xl font-semibold text-[#B8860B] mb-2">After-Sales Support</h3>
            <p className="text-gray-600">Enjoy peace of mind with our customer-first service and warranty policies.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10 text-[#B8860B]">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-50 rounded-xl p-6 shadow">
            <p className="text-gray-700 italic">“Professional service from start to finish. The curtains completely transformed our office!”</p>
            <footer className="mt-4 font-semibold text-[#B8860B]">— Aisha R., Doha</footer>
          </blockquote>
          <blockquote className="bg-gray-50 rounded-xl p-6 shadow">
            <p className="text-gray-700 italic">“Great quality and fast installation. Highly recommend their blinds for any space.”</p>
            <footer className="mt-4 font-semibold text-[#B8860B]">— Omar K., Al Rayyan</footer>
          </blockquote>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#B8860B]">Why Choose Curtains and Carpets Shop?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[#B8860B]">Local Expertise</h3>
            <p className="text-gray-600">Trusted across Qatar for premium interior solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#B8860B]">Affordable Pricing</h3>
            <p className="text-gray-600">Competitive rates without compromising on quality.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#B8860B]">Quick Delivery</h3>
            <p className="text-gray-600">Fast service, reliable timelines, and on-time installations.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#B8860B] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Need Custom Blinds or Curtains?
        </h2>
        <p className="text-lg mb-6">
          Contact us today for a free consultation, fabric samples, or installation schedule across Qatar.
        </p>
        <a
          href="https://wa.me/97466675946"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-[#1F1F1F] font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#1ebe5b] transition"
        >
          Contact Us on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default BlindsCurtains;