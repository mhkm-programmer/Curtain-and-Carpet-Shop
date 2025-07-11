import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const mediaGallery = [
  { type: "image", src: "https://8upload.com/image/6848e1a965718/K_Cabinet1.jpg" },
  { type: "video", src: "https://streamable.com/e/r9p50t" },
  { type: "image", src: "https://8upload.com/image/6848e1a9affad/K_Cabinet2.jpg" },
  { type: "image", src: "https://8upload.com/image/6848e1a9e8e10/K_Cabinet3.jpg" },
  { type: "image", src: "https://8upload.com/image/6848e1aa3011f/K_Cabinet4.jpg" },
  { type: "image", src: "https://8upload.com/image/6848e1aa6f893/K_Cabinet5.jpg" },
];

const KitchenCabinet = () => {
  return (
    <div className="font-sans text-[#1F1F1F] bg-white">
      <PageTitle title="Kitchen Cabinets – Tailored for Function & Style" />

      <ParallaxSection
        imagePath="https://8upload.com/image/6846ac0856e2e/Kitchen_Cabinet-min.jpg"
        title="Kitchen Cabinets That Inspire Culinary Creativity"
        subTitle="Modern. Practical. Elegant."
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#B8860B]">Custom Kitchen Cabinets for Every Taste</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you prefer a sleek modern look or a classic wood finish, our kitchen cabinets are built to optimize your space and suit your lifestyle.
        </p>
      </section>

      {/* Service Highlights */}
      <section className="bg-[#F9F9F9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-[#B8860B]">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Space Optimization", icon: "📏" },
              { title: "High-Quality Materials", icon: "🌲" },
              { title: "Elegant Finishes", icon: "🎨" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#B8860B]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
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

      {/* Why Choose Us */}
      <section className="bg-[#1F1F1F] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#B8860B]">Why Choose Our Kitchen Cabinets</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Designed for efficiency and built to impress, our kitchen cabinets elevate the heart of your home with tailored aesthetics and smart storage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg text-[#B8860B]">
            <span>✔ Smart Layouts</span>
            <span>✔ Stain & Moisture Resistant</span>
            <span>✔ Seamless Installation</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10 text-[#B8860B]">Happy Kitchen Owners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Salma R.",
                comment: "My kitchen now looks like something from a magazine! Amazing quality and space-saving design.",
              },
              {
                name: "Ahmed M.",
                comment: "They transformed our kitchen with beautiful cabinets that match our home style. Highly recommended!",
              },
            ].map((testi, idx) => (
              <div key={idx} className="p-6 border rounded-xl shadow-sm bg-[#F9F9F9]">
                <p className="italic mb-4">“{testi.comment}”</p>
                <p className="font-semibold text-[#B8860B]">– {testi.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#B8860B] py-20 text-white text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Start Your Dream Kitchen Today</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Let’s create a kitchen that inspires you to cook and gather. Contact Curtains and Carpets Shop for a free design consultation.
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

export default KitchenCabinet;
