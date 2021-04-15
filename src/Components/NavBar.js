import React from "react";
import avatar from "../img/logo-header.png";
import { NavLink , Link } from "react-router-dom";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              Les lieux incontournables
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" exact activeClassName="active">
              Marchés et foires
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Actualités
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="icons">
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </div>

        <button className="btn">INFORMATION</button>

        <footer className="footer">
          <p>@2021 Copyright Arsim Sejdiu</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;
