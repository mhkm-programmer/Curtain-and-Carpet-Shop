import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const mediaGallery = [
  { type: "image", src: "https://8upload.com/image/6847e52cb38ff/wp2.jpg" },
  { type: "video", src: "https://streamable.com/e/j23gqd" },
  { type: "image", src: "https://8upload.com/image/6847e52d5bd7e/wp4.png" },
  { type: "video", src: "https://streamable.com/e/a9i9qc" },
  { type: "image", src: "https://8upload.com/image/6847e52dc7e1d/wp5.png" },
  { type: "video", src: "https://streamable.com/e/yoi9h7" },
  
];

const Wallpapers = () => {
  return (
    <div className="font-sans text-[#1F1F1F] bg-white">
      <PageTitle title="Luxury Wallpapers – Rooms, Offices & Showrooms" />

      <ParallaxSection
        imagePath="https://8upload.com/image/6846ac4096e54/Wallpaper-2.png"
        title="Wallpapers That Redefine Interior Style"
        subTitle="We Bring Art to Your Walls"
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Elegant Wallpapers & Expert Installation</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your interiors with premium wallpaper designs. From home interiors to luxury offices, we deliver quality and style in every inch.
        </p>
      </section>

      {/* NEW: Service Highlights */}
      <section className="bg-[#F9F9F9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-10">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Free Site Visit", icon: "🛠️" },
              { title: "Customized Design", icon: "🎨" },
              { title: "Expert Installation", icon: "✅" },
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

      {/* NEW: Why Choose Us */}
      <section className="bg-[#1F1F1F] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Clients Trust Us</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            We combine design expertise, top-quality materials, and dedicated service to ensure stunning, long-lasting wallpaper installations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
            <span>✔ On-Time Delivery</span>
            <span>✔ High-End Materials</span>
            <span>✔ Affordable Pricing</span>
          </div>
        </div>
      </section>

      {/* NEW: Testimonials */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Aisha M.",
                comment: "Outstanding service! They helped me choose the perfect wallpaper and installed it beautifully.",
              },
              {
                name: "Mohammed R.",
                comment: "Very professional team. On-time, clean work, and the final result is amazing.",
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
        <h2 className="text-3xl font-bold mb-4">Ready to Beautify Your Space?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Contact us now to schedule your free design consultation and receive professional guidance tailored to your interior.
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

export default Wallpapers;
