import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const mediaGallery = [
  { type: "image", src: "https://8upload.com/image/6848cb36d9b9d/roller_blind1.jpg" },
  { type: "image", src: "https://8upload.com/image/6848cb372c7e7/roller_blind2.jpg" },
  { type: "image", src: "https://8upload.com/image/6848cb3775615/roller_blind3.jpg" },
  { type: "video", src: "https://8upload.com/image/6848cb37b1d89/roller_blind4.jpg" },
  { type: "image", src: "https://8upload.com/image/6848cb37eda1f/roller_blind5.jpg" },
  { type: "image", src: "https://8upload.com/image/6848cb3837732/roller_blind6.jpg" },
];

const RollerCurtains = () => {
  return (
    <div className="font-sans text-[#1F1F1F] bg-white">
      {/* Page Title with gold brand name */}
      <PageTitle>
        Roller Curtains – Minimalist & Functional Window Solutions |{" "}
        <span className="text-[#B8860B] font-semibold">Curtains and Carpets Shop</span>
      </PageTitle>

      <ParallaxSection
        imagePath="https://8upload.com/image/6846ac3ee530e/Roller_Curtains-min.png"
        title={
          <>
            Sleek Roller Curtains for Home & Office |{" "}
            <span className="text-[#B8860B] font-semibold">Curtains and Carpets Shop</span>
          </>
        }
        subTitle="Simple, Stylish & Easy to Use"
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Roller Curtains Tailored for Your Space
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our premium roller curtains that combine simplicity with durability, offering smooth operation and excellent light control.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#F9F9F9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-[#B8860B]">
            Why Choose Our Roller Curtains?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Smooth & Quiet Operation", icon: "🔄" },
              { title: "Custom Fabric Choices", icon: "🧵" },
              { title: "Easy Installation & Maintenance", icon: "🛠️" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#B8860B]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#B8860B]">
          Gallery: Our Work in Action
        </h2>
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
          <h2 className="text-3xl font-semibold mb-10 text-[#B8860B]">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Nora F.",
                comment:
                  "Roller curtains installed by the team look fantastic and operate smoothly!",
              },
              {
                name: "Faisal R.",
                comment:
                  "Great fabric options and very professional installation service.",
              },
            ].map((testi, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-xl shadow-sm bg-[#F9F9F9]"
              >
                <p className="italic mb-4">“{testi.comment}”</p>
                <p className="font-semibold text-[#B8860B]">– {testi.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#B8860B] py-20 text-white text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">
          Get Your Perfect Roller Curtains Today
        </h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Reach out now for a free consultation and explore our wide range of roller curtain options.
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

export default RollerCurtains;
