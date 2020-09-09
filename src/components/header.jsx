import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <section className="banner_part">
        <div className="container banner">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-6" style={{ marginTop: -100 }}>
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h1>
                    Better<span>Build </span> world our pride
                  </h1>
                  <p></p>
                  <Link to="/projects" className="btn_1">
                    Nos project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
