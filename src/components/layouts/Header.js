import React from "react";
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { branding } = props;
  return (
      <nav className="navbar navbar-expand-lg bg-danger">
        <span className="navbar-brand mb-0 h1 text-white">{branding}</span>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item text-white">
              <Link to='/' className="nav-link text-white"><i className="fa fa-home"></i>Home</Link>
            </li>
            <li className="nav-item text-white">
              <Link to='/about' className="nav-link text-white"><i className="fa fa-question"></i>About</Link>
            </li>
            <li className="nav-item text-white">
              <Link to='/contacts/add' className="nav-link text-white"><i className="fa fa-plus"></i>Add</Link>
            </li>
        </ul>
      </nav>
  );
};

export default Header;