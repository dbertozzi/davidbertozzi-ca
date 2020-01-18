import React from "react";
import Navbar from "./Navbar";

const Header: React.FC<{
  navItems: { label: string; path: string; class: string }[];
}> = props => {
  return (
    <div className="header-wrapper">
      <div className="logo-div">
        <div className="name-div">David Bertozzi</div>
        <div className="eng-div">Engineer</div>
      </div>
      <div className="top-right-block" />
      <Navbar navItems={props.navItems} />
    </div>
  );
};

export default Header;
