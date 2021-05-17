import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Henkilöstön ja töiden hallintajärjestelmä
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Kirjatut työsuoritukset
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Lisää työsuoritus
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Lisää työntekijä
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/createjobsite" className="nav-link">
                Lisää työmaa
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
