import { NavLink } from "react-router-dom";
import Typed from "react-typed";
import { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const HeaderCurtainsFurniture = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);

  const menuItems = [
    { label: "HOME", to: "/" },
    {
      label: "CURTAINS",
      to: "/curtains",
      submenu: [
        { label: "HOME & OFFICE CURTAINS", to: "/curtains/officeCurtain" },
        { label: "HOME & OFFICE BLINDS", to: "/curtains/blinds" },
        { label: "ROLLER CURTAINS", to: "/curtains/roller" },
      ],
    },
    {
      label: "CABINETS",
      to: "/cabinets",
      submenu: [
        { label: "TV CABINETS", to: "/cabinets/tv" },
        { label: "BED ROOM CABINETS", to: "/cabinets/bedroom" },
        { label: "KITCHEN CABINETS", to: "/cabinets/kitchen" },
      ],
    },
    { label: "CARPETS", to: "/carpet" },
    { label: "SOFA & MOJLISH", to: "/sofa" },
    { label: "PVC BARKIA", to: "/barkia" },
    { label: "MOVING SHIFTING", to: "/moving" },
    { label: "WALLPAPERS", to: "/wallpaper" },
    { label: "CONTACT US", to: "/contact" },
  ];

  // Search handler to find matching text elements on page
  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      alert("Please enter a search term.");
      return;
    }

    // Select relevant elements on page to search in
    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a, input[type='number']")
    );

    // Filter elements that include the query text or match numerically
    const matches = elements.filter((el) => {
      const text = el.textContent.toLowerCase();
      const isNumeric = !isNaN(text.trim());
      return isNumeric
        ? parseFloat(text.trim()) === parseFloat(query)
        : text.includes(query);
    });

    if (matches.length) {
      // Assign unique IDs for scroll target
      matches.forEach((el, i) => (el.id = `search-result-${i}`));

      // Update search results state
      setSearchResults(
        matches.map((el, i) => ({
          text: el.textContent,
          elementId: `search-result-${i}`,
        }))
      );

      // Scroll smoothly to the first result
      setTimeout(() => {
        document
          .getElementById("search-result-0")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);

      // Highlight results briefly
      matches.forEach((el) => {
        el.style.backgroundColor = "yellow";
        setTimeout(() => {
          el.style.backgroundColor = "";
        }, 2000);
      });
    } else {
      alert("No matches found.");
      setSearchResults([]);
    }
  };

  // Clears search input and results
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  // Search on Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setMobileSubMenuOpen(null); // reset mobile submenu on toggle
  };

  // Toggle submenu in mobile menu
  const toggleMobileSubMenu = (index) => {
    setMobileSubMenuOpen((prev) => (prev === index ? null : index));
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a] shadow-lg">
      {/* Typed Banner */}
      <div className="bg-[#2b2b2b] py-3 px-4 text-center text-[#ffcc00] text-base md:text-lg font-semibold tracking-wide shadow-sm">
        <Typed
          strings={[
            "Welcome to Qatar's Premier Curtains & Carpets Store",
            "Quality Curtains & Carpets Tailored to Your Space",
            "Serving Homes & Offices Across Qatar with Style",
            "Free Delivery for Bulk Orders – Contact Us Today!",
          ]}
          typeSpeed={45}
          backSpeed={25}
          backDelay={2500}
          loop
        />
      </div>

      {/* Search Bar */}
      <div className="bg-[#1a1a1a] px-4 py-2 flex justify-center">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for curtains, carpets, furniture..."
            className="w-full px-4 py-2 rounded-md text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
            aria-label="Search products and categories"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-600 hover:text-red-500 text-3xl"
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 bottom-0 px-3 bg-[#ffcc00] rounded-r-md flex items-center justify-center"
            aria-label="Execute search"
          >
            <img
              src="https://8upload.com/image/6797eb0d03c90/glass.png"
              alt="Search Icon"
              className="w-5 h-5"
              loading="lazy"
            />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#1a1a1a] text-white">
        <div className="flex items-center justify-between px-4 py-2">
          
        {/* Logo */}
<NavLink to="/" aria-label="Homepage" className="flex-shrink-0">
  <img
    src="https://8upload.com/image/6841a8b59659f/Curtain___Carpet_logo__1_.png"
    alt="Curtains and Carpets Logo"
    className="h-12 bg-white rounded p-1"
    loading="lazy"
  />
</NavLink>


          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="relative group"
                onMouseEnter={() => setActiveSubMenu(idx)}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 font-medium ${
                      isActive ? "text-[#ffcc00]" : "hover:text-[#ffcc00]"
                    }`
                  }
                  aria-haspopup={item.submenu ? "true" : undefined}
                  aria-expanded={activeSubMenu === idx ? "true" : "false"}
                >
                  {item.label}
                  {item.submenu && <span className="ml-1">▼</span>}
                </NavLink>

                {item.submenu && activeSubMenu === idx && (
                  <ul className="absolute left-0 top-full bg-[#2a2a2a] mt-1 rounded-md shadow-md z-50 min-w-[180px]">
                    {item.submenu.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <NavLink
                          to={subItem.to}
                          className="block px-6 py-2 text-sm whitespace-nowrap hover:text-[#ffcc00] hover:bg-[#3a3a3a]"
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded bg-[#ffcc00]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <img
              src={
                isMobileMenuOpen
                  ? "https://8upload.com/image/6797ef8ebfe6e/close-button.png"
                  : "https://8upload.com/image/6797ef8eb0c46/line.png"
              }
              alt={isMobileMenuOpen ? "Close icon" : "Menu icon"}
              className="w-5 h-5"
              loading="lazy"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden px-4 pb-4 text-sm">
            {menuItems.map((item, idx) => (
              <li key={idx} className="border-b border-gray-700 last:border-b-0">
                <div className="flex justify-between items-center">
                  <NavLink
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2"
                  >
                    {item.label}
                  </NavLink>
                  {item.submenu && (
                    <button
                      onClick={() => toggleMobileSubMenu(idx)}
                      aria-label={`Toggle submenu for ${item.label}`}
                      aria-expanded={mobileSubMenuOpen === idx}
                      className="text-[#ffcc00] p-2 focus:outline-none"
                    >
                      {mobileSubMenuOpen === idx ? "▲" : "▼"}
                    </button>
                  )}
                </div>

                {item.submenu && mobileSubMenuOpen === idx && (
                  <ul className="ml-4 border-l border-gray-700">
                    {item.submenu.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <NavLink
                          to={subItem.to}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 pl-4 hover:text-[#ffcc00]"
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <section className="bg-gray-100 text-black p-4" aria-live="polite">
          <h2 className="font-bold text-lg mb-2">Search Results:</h2>
          <ul>
            {searchResults.map((result, idx) => (
              <li key={idx}>
                <a
                  href={`#${result.elementId}`}
                  className="text-blue-600 underline"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(result.elementId)
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                    clearSearch();
                  }}
                >
                  {result.text}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={clearSearch}
            className="mt-2 text-red-600 underline"
            aria-label="Close search results"
          >
            Close Results
          </button>
        </section>
      )}
    </header>
  );
};

export default HeaderCurtainsFurniture;
