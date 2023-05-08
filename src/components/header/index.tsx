import React from "react";
import logo from "../../assets/images/logos/munzee-logo-home.svg";
import "./style.scss";
import { Link, } from "react-router-dom";

const Header = (): JSX.Element => {

  return (
    <div className="header">
      <div className="navbar">
        <div className="logo" onClick={() => (window.location.href = "/")}>
          <img src={logo} alt="logo" />
        </div>
        <div className="tabs">
          <ul className="links">
            <li className="list">
              <Link to="/">Calendar Home</Link>
            </li>
            <li className="list">
              <Link to="/">FAQ</Link>
            </li>
            <li className="list">
              <Link to="" target={"_blank"}>
                Pricing
              </Link>
            </li>
            <li className="list">
              <Link to="" target={"_blank"}>
                Events Map
              </Link>
            </li>
            <li className="list">
              <Link to="" target={"_blank"}>
                New Event
              </Link>
            </li>
            <li className="list">
              <Link to="" target={"_blank"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
