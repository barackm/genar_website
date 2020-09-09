import React, { Component } from "react";
import logo from "../img/genar.PNG";
import { Link } from "react-router-dom";
class Navigation extends Component {
  state = {};
  render() {
    return (
      <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" className="navbar-brand">
                  <img src={logo} alt="logo" />{" "}
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="ti-menu"></span>
                </button>

                <div
                  className="collapse navbar-collapse main-menu-item justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                      <Link to="/" className="nav-link" href="index.html">
                        Accueil
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link" href="about.html">
                        A propos
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services"
                        className="nav-link"
                        href="services.html"
                      >
                        services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/projects"
                        className="nav-link"
                        href="services.html"
                      >
                        Projects
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/contacts"
                        className="nav-link"
                        href="contact.html"
                      >
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navigation;
