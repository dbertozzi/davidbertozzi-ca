import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC<{
  navItems: { label: string; path: string }[];
}> = ({ navItems }) => {
  const location = useLocation();
  const navClasses = new Array(navItems.length).fill("");
  navItems.forEach((item, index) => {
    if (location.pathname === item.path) {
      navClasses[index] = "selected-nav-item";
    } else {
      navClasses[index] = "nav-item";
    }
  });
  return (
    <ul className="navbar">
      {navItems.map((item, index) => {
        return (
          <Link className="styled-link" to={item.path} key={item.label}>
            <li className={navClasses[index]}>{item.label}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Navbar;
