import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const mediaGallery = [
  { type: "image", src: "https://8upload.com/image/684806436e651/IMG-20250531-WA0039.jpg" },
  { type: "video", src: "https://streamable.com/e/ony41k" },
  { type: "image", src: "https://8upload.com/image/684804ce2ba5a/TV_Cabinet_2.jpg" },
  // { type: "video", src: "https://streamable.com/e/a82dgf" },
  { type: "image", src: "https://8upload.com/image/68480643204cf/IMG-20250531-WA0036.jpg" },
  // { type: "video", src: "https://streamable.com/e/cxrr13" },
  { type: "image", src: "https://8upload.com/image/684804cd63c5f/1080_3.jpg" },
  { type: "image", src: "https://8upload.com/image/684804cd367bf/1080_2.jpg" },
];

const Cabinet = () => {
  return (
    <div className="font-sans text-[#1F1F1F] bg-white">
      <PageTitle title="Custom Cabinets – Kitchen, Office & More" />

      <ParallaxSection
        imagePath="https://8upload.com/image/6846ac06d62c1/Cabinet-min.jpg"
        title="Cabinets Designed to Fit Your Space"
        subTitle="Functional. Stylish. Durable."
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#B8860B]">Premium Cabinets & Expert Craftsmanship</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From kitchens to offices, our custom cabinets are built to maximize space and elevate design. High-quality materials, sleek finishes, and professional installation.
        </p>
      </section>

      {/* Service Highlights */}
      <section className="bg-[#F9F9F9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-[#B8860B]">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Free Consultation", icon: "📐" },
              { title: "Custom Build", icon: "🛠️" },
              { title: "Professional Fitting", icon: "📦" },
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
          <h2 className="text-3xl font-bold mb-6 text-[#B8860B]">Why Choose Our Cabinets</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Engineered for beauty and built to last, our cabinets combine expert design with premium hardware and precision installation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg text-[#B8860B]">
            <span>✔ Tailored Design</span>
            <span>✔ Durable Materials</span>
            <span>✔ Satisfaction Guaranteed</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10 text-[#B8860B]">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Fatima K.",
                comment: "Beautiful craftsmanship! The cabinets fit perfectly and added elegance to my kitchen.",
              },
              {
                name: "Omar S.",
                comment: "Excellent team. Delivered on time and exceeded our expectations. Highly recommend!",
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
        <h2 className="text-3xl font-bold mb-4">Let’s Build Your Dream Cabinet</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Reach out today for a free consultation and discover how we can transform your space with custom cabinet solutions.
        </p>
        <a
          href="https://wa.me/97466675946"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-[#1F1F1F]  font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#1ebe5b] transition"
        >
          Contact Us on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Cabinet;
