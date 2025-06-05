import { createBrowserRouter } from "react-router-dom";

// Layout
import Main from "../layouts/Main";

// Pages
import Home from "../pages/Home/Home";
import AboutMePage from "../pages/about/AboutMePage";
import ContactPage from "../pages/contact/ContactPage";
import FaqPage from "../pages/FAQ/FaqPage";
import ServicePage from "../pages/service/ServicePage";
import Terms from "../pages/terms/Terms";
import ErrorPage from "../pages/errorPage/ErrorPage";

// Products
import Curtains from "../Products/Curtains";
import OfficeCurtain from "../Products/OfficeCurtain";
import OfficeBlind from "../Products/OfficeBlind";
import RollerCurtain from "../Products/RollerCurtain";

import Cabinet from "../Products/Cabinet";
import TvCabinet from "../Products/TvCabinets";
import KitchenCabinet from "../Products/KitchenCabinet";
import BedRoomCabinet from "../Products/BedRoomCabinet";

import Carpets from "../Products/Carpets";
import Sofa from "../Products/Sofa";
import Barkia from "../Products/Barkia";
import Shifting from "../Products/Shifting";
import Wallpapers from "../Products/Wallpapers";
import Furniture from "../Products/Furniture";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Main />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      // Static Pages
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutMePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/terms", element: <Terms /> },

      // Services & Subroutes
      {
        path: "/service",
        element: <ServicePage />,
        children: [
          { path: "furniture", element: <Furniture /> },
        ],
      },

      // Curtain Products
      { path: "/curtains", element: <Curtains /> },
      { path: "/curtains/officeCurtain", element: <OfficeCurtain /> },
      { path: "/curtains/blinds", element: <OfficeBlind /> },
      { path: "/curtains/roller", element: <RollerCurtain /> },

      // Cabinet Products
      { path: "/cabinets", element: <Cabinet /> },
      { path: "/cabinets/tv", element: <TvCabinet /> },
      { path: "/cabinets/kitchen", element: <KitchenCabinet /> },
      { path: "/cabinets/bedroom", element: <BedRoomCabinet /> },

      // Other Products
      { path: "/carpet", element: <Carpets /> },
      { path: "/sofa", element: <Sofa /> },
      { path: "/barkia", element: <Barkia /> },
      { path: "/moving", element: <Shifting /> },
      { path: "/wallpaper", element: <Wallpapers /> },
    ],
  },

  // Catch-all route
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
