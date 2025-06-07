import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const mediaGallery = [
  { type: "image", src: "https://8upload.com/image/bedroom-cabinet1.jpg" },
  { type: "image", src: "https://8upload.com/image/bedroom-cabinet2.jpg" },
  { type: "image", src: "https://8upload.com/image/bedroom-cabinet3.jpg" },
  { type: "image", src: "https://8upload.com/image/bedroom-cabinet4.jpg" },
];

const BedroomCabinet = () => {
  return (
    <div className="font-sans text-[#1F1F1F] bg-white">
      <PageTitle title="Bedroom Cabinets – Organize with Elegance" />

      <ParallaxSection
        imagePath="https://8upload.com/image/bedroom-cabinet-banner.jpg"
        title="Elegant Bedroom Cabinets for Your Personal Sanctuary"
        subTitle="Functional. Stylish. Customized."
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Tailored Bedroom Cabinets to Fit Your Lifestyle</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover bedroom cabinets designed for seamless organization, smart storage, and a sophisticated look that complements your space.
        </p>
      </section>

      {/* Service Highlights */}
      <section className="bg-[#F9F9F9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-10">Why Our Bedroom Cabinets Stand Out</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Maximized Storage", icon: "🗄️" },
              { title: "Premium Materials", icon: "🪵" },
              { title: "Custom Finishes", icon: "✨" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Gallery: Bedroom Cabinet Styles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaGallery.map((media, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={media.src}
                alt={`Bedroom Cabinet ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#1F1F1F] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Bedroom Cabinets</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Crafted for elegance and practicality, our bedroom cabinets help you keep your space clutter-free while enhancing your bedroom’s style.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
            <span>✔ Durable & Stylish</span>
            <span>✔ Tailored Designs</span>
            <span>✔ Expert Installation</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Satisfied Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Nadia K.",
                comment: "The bedroom cabinets completely transformed my room — beautiful and very functional.",
              },
              {
                name: "Rashid H.",
                comment: "Perfect fit and high-quality finish. Installation was quick and hassle-free!",
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
        <h2 className="text-3xl font-bold mb-4">Enhance Your Bedroom Storage Today</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Contact us now for a free consultation and start designing your perfect bedroom cabinet.
        </p>
        <a
          href="https://wa.me/97470373588"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#1F1F1F] font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition"
        >
          Message Us on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default BedroomCabinet;
