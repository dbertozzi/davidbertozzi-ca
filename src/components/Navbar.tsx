import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar: React.FC = () => {
  const navItems: { label: string; path: string }[] = [
    { label: "About", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" }
  ];
  return (
    <div
      className={css`
        display: flexbox;
        background-color: black;
        width: 100%;
      `}
    >
      <ul
        className={css`
          display: flex;
        `}
      >
        {navItems.map(item => {
          return (
            <Link to={item.path}>
              <li
                className={css`
                  list-style: none;
                  margin: 0 20px 0 0;
                `}
              >
                {item.label}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
