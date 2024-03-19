import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { RightSidebarData } from "./RightSideBar";
import { IconContext } from "react-icons";
import { DiAptana } from "react-icons/di";
import { LeftSidebarData } from "./LeftSidebar";

function Navbar() {
  const [leftSidebar, setLeftSidebar] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(false);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const toggleLeftSidebar = () => setLeftSidebar(!leftSidebar);
  const toggleRightSidebar = () => setRightSidebar(!rightSidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className={scroll ? "navbar sticky" : "navbar"}>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={toggleLeftSidebar} />
          </Link>
          <div className="navbar-title"><span>Sam Swerczek</span></div>
          <Link to="#" className="menu-bars">
            <DiAptana onClick={toggleRightSidebar} />
          </Link>
        </div>

        <nav className={leftSidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={toggleLeftSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {LeftSidebarData.map((item, index) => {
              return (
                <li key={index} className="nav-text">
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav className={rightSidebar ? "nav-menu right active" : "nav-menu right"}>
          <ul className="nav-menu-items" onClick={toggleRightSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {RightSidebarData.map((item, index) => {
              return (
                <li key={index} className="nav-text">
                  <Link to={item.path} target="_blank">
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;