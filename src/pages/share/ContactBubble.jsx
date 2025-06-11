import {
  FaArrowDown,
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";

const ContactBubble = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      setShowScrollTop(scrollTop > 100);
      setShowScrollBottom(scrollTop + clientHeight < scrollHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll handlers
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  // Bubble icon size
  const iconSize = isMobile ? 22 : 26;

  // Reusable button class
  const baseBtnClass =
    "p-3 md:p-4 rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-300";

  return (
    <>
      {/* 📞 Contact Buttons */}
      <div className="fixed bottom-32 right-4 md:right-6 flex flex-col items-center space-y-3 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+97466675946"
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseBtnClass} bg-green-500 hover:bg-green-600`}
        >
          <FaWhatsapp size={iconSize} />
        </a>

        {/* Phone */}
        <a
          href="tel:+97466675946"
          className={`${baseBtnClass} bg-blue-500 hover:bg-blue-600`}
        >
          <FaPhoneAlt size={iconSize} />
        </a>

        {/* Email */}
        <a
          href="mailto:rashed.khan.rk143@gmail.com"
          className={`${baseBtnClass} bg-red-500 hover:bg-red-600`}
        >
          <FaEnvelope size={iconSize} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/curtineshop?igsh=aTF3dHd0eTJjMjB0&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseBtnClass} bg-pink-500 hover:bg-pink-600`}
        >
          <FaInstagram size={iconSize} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1Ha8SMLh1B/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseBtnClass} bg-blue-700 hover:bg-blue-800`}
        >
          <FaFacebook size={iconSize} />
        </a>
      </div>

      {/* 🔼 Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 md:right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 hover:scale-110 transition-transform duration-300 z-50"
        >
          <FaArrowUp size={22} />
        </button>
      )}

      {/* 🔽 Scroll to Bottom */}
      {showScrollBottom && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-5 right-4 md:right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 hover:scale-110 transition-transform duration-300 z-50"
        >
          <FaArrowDown size={22} />
        </button>
      )}
    </>
  );
};

export default ContactBubble;
