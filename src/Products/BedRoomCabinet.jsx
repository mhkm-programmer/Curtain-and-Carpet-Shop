import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const mediaGallery = [
  { type: "image", src: "https://8upload.com/image/6848e441ca318/IMG-20250531-WA0037.jpg" },
  // { type: "video", src: "https://streamable.com/e/md5pe4" },
  { type: "image", src: "https://8upload.com/image/6848e441dd146/IMG-20250531-WA0039.jpg" },
  // { type: "video", src: "https://streamable.com/e/a82dgf" },
  { type: "image", src: "https://8upload.com/image/6848e4421a09e/TV_Cabinet_2.jpg" },
  // { type: "video", src: "https://streamable.com/e/cxrr13" },
  { type: "image", src: "https://8upload.com/image/6848e4419d743/IMG-20250531-WA0036.jpg" },
  // { type: "image", src: "https://8upload.com/image/67ab0be4cf914/office6.jpg" },
];

const BedroomCabinet = () => {
  return (
    <div className="font-sans text-[#1F1F1F] bg-white">
      <PageTitle title="Curtains and Carpets Shop – Elegance for Your Home" />

      <ParallaxSection
        imagePath="https://8upload.com/image/6846ac0624b3d/Bedroom_Cabinet.jpg"
        title="Elegant Curtains and Carpets for Your Personal Sanctuary"
        subTitle="Functional. Stylish. Customized."
        titleClass="text-[#B8860B]" // Assuming ParallaxSection supports this prop; otherwise add styling inside component
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#B8860B]">
          Tailored Curtains and Carpets to Fit Your Lifestyle
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover curtains and carpets designed for seamless style, comfort, and a sophisticated look that complements your space.
        </p>
      </section>

      {/* Service Highlights */}
      <section className="bg-[#F9F9F9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-[#B8860B]">Why Our Curtains and Carpets Stand Out</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "High-Quality Fabrics", icon: "🧵" },
              { title: "Elegant Designs", icon: "🎨" },
              { title: "Custom Fits & Styles", icon: "✨" },
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
          <h2 className="text-3xl font-bold mb-6 text-[#B8860B]">Why Choose Our Curtains and Carpets</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Crafted for elegance and practicality, our curtains and carpets help you create a warm, stylish, and inviting space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
            <span>✔ Premium Quality Materials</span>
            <span>✔ Tailored Designs</span>
            <span>✔ Professional Installation</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10 text-[#B8860B]">Satisfied Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Nadia K.",
                comment: "The curtains and carpets completely transformed my living space — beautiful and very cozy.",
              },
              {
                name: "Rashid H.",
                comment: "Perfect fit and high-quality fabric. Installation was quick and hassle-free!",
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
        <h2 className="text-3xl font-bold mb-4">Enhance Your Home with Premium Curtains and Carpets</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Contact us now for a free consultation and start designing your perfect curtains and carpets.
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

export default BedroomCabinet;
