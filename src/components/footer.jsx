import React, { Component } from "react";
import { IconContext } from "react-icons";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaFacebookSquare,
} from "react-icons/fa";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer font-small mdb-color lighten-3 pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
              <h5 className="font-weight-bold text-uppercase mb-4 text-white">
                Qui sommes nous ?
              </h5>

              <p className="text text-white">
                Genar est Une entreprise de construction spécialisée dans la
                conception, l’exécution de marchés de construction publics &
                privés, la consultance, le Design & Build, la rénovation et la
                fourniture des matériaux de construction...
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 className="font-weight-bold text-uppercase mb-4 text-white">
                A propos
              </h5>

              <ul className="list-unstyled">
                <li>
                  <p>
                    <Link to="/projects">PROJECTS</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link to="/services">SERVICES</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link to="/about">ABOUT US</Link>
                  </p>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 className="font-weight-bold text-uppercase mb-4 text-white">
                Address
              </h5>

              <ul className="list-unstyled">
                <li>
                  <p>
                    <i className="fas fa-home mr-3"></i> Goma / RDC, N 136
                    KATINDO Av. La Frontiere,
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@genardrc.com
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 243 891 779 994
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 243 821 488 865
                  </p>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 col-lg-2 text-center mx-auto my-4 footer-icons">
              <h5 className="font-weight-bold text-uppercase mb-4 text-white">
                Suivez Nous
              </h5>
              <div className="icons-wrapper-footer">
                <a
                  href="https://www.facebook.com"
                  type="button"
                  className="btn-floating btn-fb"
                >
                  <IconContext.Provider
                    value={{ className: "footer-media-icons" }}
                  >
                    <FaFacebookSquare />
                  </IconContext.Provider>
                </a>

                <a
                  href="https://www.whatsapp.com"
                  type="button"
                  className="btn-floating btn-tw"
                >
                  <IconContext.Provider
                    value={{ className: "footer-media-icons" }}
                  >
                    <FaWhatsappSquare />
                  </IconContext.Provider>
                </a>

                <a
                  href="https://www.instagram.com"
                  type="button"
                  className="btn-floating btn-gplus"
                >
                  <IconContext.Provider
                    value={{ className: "footer-media-icons" }}
                  >
                    <FaInstagramSquare />
                  </IconContext.Provider>
                </a>

                <a href="" type="button" className="btn-floating btn-dribbble">
                  <IconContext.Provider
                    value={{ className: "footer-media-icons" }}
                  >
                    <FaTwitterSquare />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <Link to="/" href="https://fidbagraphics.com/" target="blank">
            {" "}
            Fidba Graphics
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
