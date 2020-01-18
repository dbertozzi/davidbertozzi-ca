import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC<{
  navItems: { label: string; path: string; class: string }[];
}> = props => {
  let location = useLocation();
  props.navItems.forEach(item => {
    if (location.pathname === item.path) {
      item.class = "selected-nav-item";
    } else {
      item.class = "nav-item";
    }
  });
  return (
    <ul className="navbar">
      {props.navItems.map((item, index) => {
        return (
          <Link className="styled-link" to={item.path} key={item.label}>
            <li className={item.class}>{item.label}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Navbar;
