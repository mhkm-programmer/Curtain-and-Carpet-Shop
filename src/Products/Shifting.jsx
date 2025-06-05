
import { FaTruck, FaClock, FaShieldAlt, FaUsers, FaHandshake } from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const ShiftingMovingService = () => {
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


  return (
    <div className="font-sans text-gray-900">
      <PageTitle title="Shifting and Moving Service in Qatar | AZLAAN CONTRACTING W.L.L" />

      <ParallaxSection
        imagePath="https://8upload.com/image/684a1cc8d76d0/moving-parallax.jpg"
        title="Reliable Shifting & Moving"
        subTitle="Safe • Efficient • Professional"
      />

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4A342E]">
          Trusted Shifting and Moving Solutions Across Qatar
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          AZLAAN CONTRACTING W.L.L provides comprehensive moving services tailored for homes, offices, and commercial spaces — ensuring your possessions are handled with utmost care and delivered on time.
        </p>
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


      {/* Service Highlights */}
      <section className="bg-[#f9f7f4] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaTruck size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Moving Fleet</h3>
            <p className="text-gray-700">Equipped with spacious, clean trucks designed for safe transport of all your items.</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaClock size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Timely & Efficient</h3>
            <p className="text-gray-700">Our team ensures prompt pickups and deliveries, respecting your schedule.</p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaShieldAlt size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe Handling & Packaging</h3>
            <p className="text-gray-700">Careful packing and secure handling to prevent any damage during the move.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold text-[#4A342E] mb-10">What Our Clients Say</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-xl shadow-md italic text-gray-700">
            “AZLAAN made our office relocation seamless — professional team, careful with our equipment, and on time!”
            <br />
            <span className="block mt-4 font-semibold text-[#4A342E]">— Mohammed A., Doha</span>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl shadow-md italic text-gray-700">
            “Highly recommend their moving service. Friendly staff and everything arrived in perfect condition.”
            <br />
            <span className="block mt-4 font-semibold text-[#4A342E]">— Sara K., Al Rayyan</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f9f7f4] py-20 px-6 text-center">
        <h3 className="text-3xl font-bold text-[#4A342E] mb-10">Why Choose AZLAAN?</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaUsers size={36} className="text-[#4A342E] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Experienced Team</h4>
            <p className="text-gray-700">Skilled movers trained to handle all types of shifting with care and professionalism.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaHandshake size={36} className="text-[#4A342E] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Transparent Pricing</h4>
            <p className="text-gray-700">No hidden fees—clear and competitive rates for every moving project.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaShieldAlt size={36} className="text-[#4A342E] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Fully Insured</h4>
            <p className="text-gray-700">Protection for your belongings with insurance coverage during transit.</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-[#B8860B] py-20 text-white text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Move? Contact Us Today!</h3>
        <p className="text-lg mb-6">Get your free moving consultation and quote from AZLAAN experts now.</p>
        <a
          href="https://wa.me/97470373588"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          WhatsApp Us
        </a>
      </section>
    </div>
  );
};

export default ShiftingMovingService;
