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
      {/* Page Meta Title */}
      <PageTitle title="Home | Curtains and Carpets Shop" />

      {/* =================== Hero Banner =================== */}
      <section aria-label="Hero Banner">
        <HeroSlider />
      </section>

      {/* =================== Why Choose Us =================== */}
      <section aria-label="Why Choose Us" className="py-14 bg-gray-50">
        <WhyChoose />
      </section>

      {/* =================== Curtains Products =================== */}
      <section aria-label="Curtains Collection" className="py-14">
        <Products_Curtains />
      </section>

      {/* =================== Blackout Curtains =================== */}
      <section aria-label="Blackout Curtain Products" className="py-14 bg-gray-50">
        <Products_Blackout />
      </section>

      {/* =================== Our Clients =================== */}
      <section aria-label="Our Clients" className="py-14">
        <OurClient />
      </section>

      {/* =================== Customer Testimonials =================== */}
      <section aria-label="Customer Testimonials" className="py-14 bg-gray-50">
        <CustomerReviews />
      </section>

      {/* =================== Subscribe & Contact =================== */}
      <section aria-label="Newsletter and Contact" className="py-14">
        <SubscreibeContact />
      </section>
    </main>
  );
};

export default Home;
