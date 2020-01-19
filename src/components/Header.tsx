import React from "react";
import Navbar from "./Navbar";

const Header: React.FC<{
  navItems: { label: string; path: string; class: string }[];
}> = ({ navItems }) => {
  return (
    <div className="header-wrapper">
      <div className="logo-div">
        <h1 className="name-div">David Bertozzi</h1>
        <div className="eng-div">Engineer</div>
      </div>
      <Navbar navItems={navItems} />
    </div>
  );
};

export default Header;
