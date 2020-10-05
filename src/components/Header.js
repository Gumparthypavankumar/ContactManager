import React from "react";

const Header = (props) => {
    const { branding } = props;
  return (
      <nav className="navbar bg-danger">
        <span className="navbar-brand mb-0 h1 text-white">{branding}</span>
        <ul className="navbar-nav">
            <li className="nav-item text-white">Home</li>
        </ul>
      </nav>
  );
};

export default Header;