import { faCog, faHome, faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "home",
      path: "/",
      icon: faHome,
    },
    {
      name: "recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          f<span>oo</span>diesHub
        </a>
        <div className="nav-links">
          {links?.map((item) => (
            <a
              href={item?.path}
              key={item?.name}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item?.name}
            </a>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
};

export default NavBar;
