import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

 const mediaGallery = [
      { type: "image", src: "https://8upload.com/image/68337d45aa60e/IMG-20250518-WA0039.jpg" },
  { type: "video", src: "https://streamable.com/e/md5pe4" },
  { type: "image", src: "https://8upload.com/image/68337cbb8461d/IMG-20250518-WA0006.jpg" },
  { type: "video", src: "https://streamable.com/e/a82dgf" },
  { type: "image", src: "https://8upload.com/image/67ab0bd2011aa/office2.jpg" },
  { type: "video", src: "https://streamable.com/e/cxrr13" },
  { type: "image", src: "https://8upload.com/image/67ab0bdb0ea7e/office4.jpg" },
  { type: "image", src: "https://8upload.com/image/67ab0be4cf914/office6.jpg" },
  ];
const TvCabinet = () => {
  return (
    <div className="font-sans text-[#1F1F1F] bg-white">
      <PageTitle title="Custom TV Cabinets – Wall Units, Stands & More" />

      <ParallaxSection
        imagePath="https://8upload.com/image/6846ac4040b83/TV_Cabinet-min.png"
        title="TV Cabinets That Match Your Style"
        subTitle="Modern. Organized. Seamless."
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Custom TV Units for a Clutter-Free Entertainment Space</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We craft modern and stylish TV cabinets designed to organize your entertainment essentials while complementing your home decor.
        </p>
      </section>

      {/* Service Highlights */}
      <section className="bg-[#F9F9F9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-10">Why Choose Our TV Cabinets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Wall-Mounted Units", icon: "🖼️" },
              { title: "Built-In Storage", icon: "📺" },
              { title: "Cable Management", icon: "🔌" },
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
        <h2 className="text-3xl font-semibold text-center mb-10">Gallery: Our Work in Action</h2>
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

      {/* Why Us */}
      <section className="bg-[#1F1F1F] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Smart Design Meets Quality Finish</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Our TV cabinets are more than furniture – they’re design statements that keep your media area functional, elegant, and clean.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
            <span>✔ Modern Aesthetics</span>
            <span>✔ Integrated Storage</span>
            <span>✔ Professional Installation</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Rania M.",
                comment: "Absolutely love the wall unit! It keeps everything neat and looks stunning in our living room.",
              },
              {
                name: "Ahmed T.",
                comment: "Professional service and top-quality finish. Our entertainment setup looks like a showroom!",
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
        <h2 className="text-3xl font-bold mb-4">Let’s Design Your Dream TV Unit</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Contact us for a free consultation and bring elegance and organization to your media space with a custom TV cabinet.
        </p>
        <a
          href="https://wa.me/97470373588"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#1F1F1F] font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition"
        >
          Contact Us on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default TvCabinet;
