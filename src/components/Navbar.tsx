import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar: React.FC = () => {
  const navItems: { label: string; path: string }[] = [
    { label: "About", path: "/" },
    { label: "Software", path: "/software" },
    { label: "Mechanical", path: "/" },
    { label: "Contact", path: "/" },
    { label: "Extracurricular", path: "/" }
  ];
  return (
    <div
      className={css`
        display: flexbox;
        background-color: black;
        width: 100%;
      `}
    >
      {navItems.map(item => {
        return (
          <Link to={item.path}>
            <Button label={item.label} />
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
