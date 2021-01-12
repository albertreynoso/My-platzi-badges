import React, { Component } from "react";
import Logo from "../images/logo.svg";

import "./styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a href="/" className="Navbar__brand">
            <img src={Logo} alt="platzilogo" className="Navbar__brand-logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}
