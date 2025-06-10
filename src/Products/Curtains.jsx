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
const Curtain = () => {
  return (
    <div className="font-sans text-[#1F1F1F] bg-white">
      <PageTitle title="Curtains – Elegance & Comfort for Every Room" />

      <ParallaxSection
        imagePath="https://8upload.com/image/6846ac07ba095/Curtains-min.jpg"
        title="Curtains That Transform Your Space"
        subTitle="Style, Privacy & Light Control"
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">High-Quality Curtains for Home and Office</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our wide selection of curtains offers perfect solutions for privacy, light filtering, and aesthetic appeal.
          Crafted from premium fabrics with a variety of styles and colors to match your decor.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#F9F9F9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-10">Why Choose Our Curtains?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Durable & Stylish Fabrics", icon: "🧵" },
              { title: "Custom Fit & Design", icon: "📐" },
              { title: "Professional Installation", icon: "🛠️" },
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

      {/* Testimonials */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Linda K.",
                comment: "Beautiful curtains with excellent fabric quality and fit. Very pleased!",
              },
              {
                name: "Ahmed S.",
                comment: "Fast and professional installation, really transformed my office space.",
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

      {/* Call to Action */}
      <section className="bg-[#B8860B] py-20 text-white text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Enhance Your Space with Our Curtains</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Contact us now for a free consultation and discover the perfect curtains tailored to your needs.
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

export default Curtain;
