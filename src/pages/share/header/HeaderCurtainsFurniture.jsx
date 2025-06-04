import { NavLink } from "react-router-dom";
import Typed from "react-typed";
import { useState } from "react";

const HeaderCurtainsFurniture = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const leftMenuItems = [
    { label: "HOME", to: "/" },
    {
      label: "CURTAINS ▼",
      to: "/curtains",
      submenu: [
        { label: "HOME & OFFICE CURTAINS", to: "/curtains/curtain" },
        { label: "HOME & OFFICE BLINDS", to: "/curtains/blinds" },
        { label: "ROLLER CURTAINS", to: "/curtains/roller" },
      ],
    },
    {
      label: "CABINETS ▼",
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

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return alert("Please enter a search term.");

    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a, input[type='number']")
    );

    const matches = elements.filter((el) => {
      const textContent = el.textContent.toLowerCase();
      const isNumeric = !isNaN(textContent.trim());
      return isNumeric
        ? parseFloat(textContent.trim()) === parseFloat(query)
        : textContent.includes(query);
    });

    if (matches.length > 0) {
      matches.forEach((match, index) => (match.id = `search-result-${index}`));

      setSearchResults(
        matches.map((match, index) => ({
          text: match.textContent,
          elementId: `search-result-${index}`,
        }))
      );

      const firstResultId = `search-result-0`;
      setTimeout(() => {
        document.getElementById(firstResultId)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);

      matches.forEach((el) => {
        el.style.backgroundColor = "yellow";
        setTimeout(() => (el.style.backgroundColor = ""), 2000);
      });
    } else {
      setSearchResults([]);
      alert("No matches found.");
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="sticky top-0 z-50 bg-[#1a1a1a] shadow-lg">
      {/* Header Typing Banner */}
      <div className="bg-[#333333] py-2 text-center text-[#ffcc00] text-sm md:text-base font-medium">
        <Typed
          strings={[
            "Welcome to Curtains and Carpets Shop in Qatar",
            "Your One-Stop Shop for Quality Curtains & Carpets",
            "Curtains, Carpets & Custom Interiors Across Qatar",
            "Free Delivery for Bulk Orders – Contact Us Now!",
          ]}
          typeSpeed={50}
          backSpeed={30}
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
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-12 text-gray-600 hover:text-red-500 text-3xl"
            >
              &times;
            </button>
          )}
          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 bottom-0 px-3 bg-[#ffcc00] rounded-r-md flex items-center justify-center"
          >
            <img
              src="https://8upload.com/image/6797eb0d03c90/glass.png"
              alt="Search"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-[#1a1a1a] text-white">
        <div className="flex items-center justify-between px-4 py-2">
          <NavLink to="/">
            <img
              src="https://8upload.com/image/67979661192f3/AL-FWZ_Tradign_Contracting_Logo.png"
              alt="Logo"
              className="h-10"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {leftMenuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveSubMenu(index)}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ffcc00] px-3 py-2 font-medium"
                      : "px-3 py-2 hover:text-[#ffcc00] font-medium"
                  }
                >
                  {item.label}
                </NavLink>
                {item.submenu && activeSubMenu === index && (
  <div className="absolute bg-[#2a2a2a] mt-1 rounded-md shadow-md z-50">
    <div className="flex flex-col">
      {item.submenu.map((sub, i) => (
        <NavLink
          key={i}
          to={sub.to}
          className="px-6 py-2 text-sm whitespace-nowrap hover:text-[#ffcc00] hover:bg-[#3a3a3a]"
        >
          {sub.label}
        </NavLink>
      ))}
    </div>
  </div>
)}


              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded bg-[#ffcc00]"
          >
            <img
              src={
                isMobileMenuOpen
                  ? "https://8upload.com/image/6797ef8ebfe6e/close-button.png"
                  : "https://8upload.com/image/6797ef8eb0c46/line.png"
              }
              alt="Menu"
              className="w-5 h-5"
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden px-4 pb-4 text-sm">
            <ul className="space-y-2">
              {leftMenuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    onClick={toggleMobileMenu}
                    className="block px-4 py-2 rounded hover:bg-[#333]"
                  >
                    {item.label}
                  </NavLink>
                  {item.submenu && (
                    <ul className="ml-4">
                      {item.submenu.map((sub, i) => (
                        <li key={i}>
                          <NavLink
                            to={sub.to}
                            onClick={toggleMobileMenu}
                            className="block px-4 py-1 hover:text-[#ffcc00]"
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-gray-100 text-black p-4">
          <h2 className="font-bold text-lg mb-2">Search Results:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <a
                  href={`#${result.elementId}`}
                  className="text-blue-600 underline"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(result.elementId)?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                    clearSearch();
                  }}
                >
                  {result.text}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={clearSearch} className="mt-2 text-red-600 underline">
            Close Results
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderCurtainsFurniture;
