import PageTitle from "../reusable/PageTitle";

import HeroSlider from "./heroBanner.jsx/HeroSlider";
import Products_Curtains from "./Products_Curtains";
import Products_Blackout from "./Products_Blackout";
import WhyChoose from "./WhyChoose";
import OurClient from "./OurClient";
import CustomerReviews from "./CustomerReviews";
import SubscreibeContact from "../contact/SubscreibeContact";

const Home = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* SEO & Page Title */}
      <PageTitle title="Home | Curtains and Carpets Shop" />

      {/* Hero Banner Slider */}
      <section aria-label="Hero Banner">
        <HeroSlider />
      </section>

      {/* Featured Products */}
      <section aria-label="Curtains Products" className="py-10">
        <Products_Curtains />
      </section>

      <section aria-label="Blackout Products" className="py-10">
        <Products_Blackout />
      </section>

      {/* Why Choose Us Section */}
      <section aria-label="Why Choose Our Services" className="py-10 bg-gray-50">
        <WhyChoose />
      </section>

      {/* Our Clients Section */}
      <section aria-label="Our Clients" className="py-10">
        <OurClient />
      </section>

      {/* Customer Reviews Section */}
      <section aria-label="Customer Reviews" className="py-10 bg-gray-50">
        <CustomerReviews />
      </section>

      {/* Subscription & Contact Section */}
      <section aria-label="Subscribe and Contact" className="py-10">
        <SubscreibeContact />
      </section>
    </main>
  );
};

export default Home;
