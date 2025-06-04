import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Curtains & Blinds",
      links: [
        { label: "Home & Office Curtains", to: "/curtains/curtain" },
        { label: "Home & Office Blinds", to: "/curtains/blinds" },
        { label: "Roller Curtains", to: "/curtains/roller" },
      ],
    },
    {
      title: "Cabinet Solutions",
      links: [
        { label: "TV Cabinets", to: "/cabinets/tv" },
        { label: "Bedroom Cabinets", to: "/cabinets/bedroom" },
        { label: "Kitchen Cabinets", to: "/cabinets/kitchen" },
      ],
    },
    {
      title: "Interior Services",
      links: [
        { label: "Carpets", to: "/carpet" },
        { label: "Sofa & Mojlish", to: "/sofa" },
        { label: "PVC Barkia", to: "/barkia" },
        { label: "Wallpapers", to: "/wallpaper" },
      ],
    },
    {
      title: "Other Solutions",
      links: [
        { label: "Moving & Shifting", to: "/moving" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Company Info */}
        <div className="md:col-span-2">
          <NavLink to="/" className="flex items-center space-x-3 mb-6">
            <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center shadow-lg">
              <img
                src="https://8upload.com/image/67979661192f3/AL-FWZ_Tradign_Contracting_Logo.png"
                alt="AL-FWZ Logo"
                className="w-12"
              />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Curtains and Carpets Shop
            </h2>
          </NavLink>
          <p className="text-sm leading-relaxed text-gray-400">
            Trusted name in Qatar for Curtains, Blinds, Cabinets, Carpets, and
            Interior Decor. We deliver quality with professionalism and passion.
          </p>
        </div>

        {/* Dynamic Footer Links */}
        {footerSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold text-white mb-4">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.to}
                    className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-16 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p className="mb-4 md:mb-0 text-center">
          &copy; {new Date().getFullYear()}{" "}
          <NavLink to="/" className="hover:text-violet-400 font-medium">
             Curtains and Carpets Shop
          </NavLink>{" "}
          - All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <a href="tel:+97455760872" className="hover:text-violet-400">
            <FaPhoneAlt size={18} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61573137238181&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/rokibwin?igsh=anU3ejd4dHFneDhi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://wa.me/+97455760872"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="mailto:qatarwintrading@gmail.com"
            className="hover:text-violet-400"
          >
            <FaGoogle size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
