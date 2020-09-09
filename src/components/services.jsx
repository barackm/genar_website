import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoIosConstruct } from "react-icons/io";
import { IconContext } from "react-icons";
import { BsAward } from "react-icons/bs";
import { GiJusticeStar } from "react-icons/gi";
class Services extends Component {
  render() {
    return (
      <section className="our_service padding_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                <h2>Nos services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xl-4">
              <div className="single_feature">
                <div className="single_service">
                  <span className="flaticon-ui"></span>
                  <h4>Ingénierie Civile</h4>
                  <div className="service-items">
                    <div className="service-icon-wrapper">
                      <IconContext.Provider
                        name="lastname"
                        value={{ className: "services-icon" }}
                      >
                        <IoIosConstruct />
                      </IconContext.Provider>
                    </div>
                    <p>Etude et exécution des projets de génie civil. </p>
                  </div>
                  <div className="service-items">
                    <div className="service-icon-wrapper">
                      <IconContext.Provider
                        name="lastname"
                        value={{ className: "services-icon" }}
                      >
                        <IoIosConstruct />
                      </IconContext.Provider>
                    </div>
                    <p>Réfection & Réhabilitation des anciens bâtiments </p>
                  </div>
                  <div className="service-items">
                    <div className="service-icon-wrapper">
                      <IconContext.Provider
                        name="lastname"
                        value={{ className: "services-icon" }}
                      >
                        <IoIosConstruct />
                      </IconContext.Provider>
                    </div>
                    <p>Consultance en génie civil</p>
                  </div>
                  <Link to="/services" className="btn_3">
                    Voir Plus
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="single_feature">
                <div className="single_service">
                  <span className="flaticon-ui"></span>
                  <h4>Architecture Moderne</h4>
                  <div className="service-items">
                    <div className="service-icon-wrapper">
                      <IconContext.Provider
                        name="lastname"
                        value={{ className: "services-icon" }}
                      >
                        <IoIosConstruct />
                      </IconContext.Provider>
                    </div>
                    <p>
                      Conception architecturale détaillée des projets
                      immobiliers{" "}
                    </p>
                  </div>
                  <div className="service-items">
                    <div className="service-icon-wrapper">
                      <IconContext.Provider
                        name="lastname"
                        value={{ className: "services-icon" }}
                      >
                        <IoIosConstruct />
                      </IconContext.Provider>
                    </div>
                    <p>Architecture intérieure et décoratio</p>
                  </div>

                  <div className="service-items">
                    <div className="service-icon-wrapper">
                      <IconContext.Provider
                        name="lastname"
                        value={{ className: "services-icon" }}
                      >
                        <IoIosConstruct />
                      </IconContext.Provider>
                    </div>
                    <p>Aménagement moderne des terrains</p>
                  </div>

                  <Link to="/services" className="btn_3">
                    Voir Plus
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="single_feature">
                <div className="single_service single_service_2">
                  <span className="flaticon-ui"></span>
                  <h4>Renforcement des capacités</h4>
                  <div className="service-items">
                    <div className="service-icon-wrapper">
                      <IconContext.Provider
                        name="lastname"
                        value={{ className: "services-icon" }}
                      >
                        <BsAward />
                      </IconContext.Provider>
                    </div>
                    <p>Formation en logiciels techniques </p>
                  </div>
                  <div className="service-items">
                    <div className="service-icon-wrapper">
                      <IconContext.Provider
                        name="lastname"
                        value={{ className: "services-icon" }}
                      >
                        <IoIosConstruct />
                      </IconContext.Provider>
                    </div>
                    <p>DAO (Dessin Assisté à l’Ordinateur) </p>
                  </div>
                  <div className="sub-selections-wrapper">
                    <div className="service-items">
                      <div className="service-icon-wrapper">
                        <IconContext.Provider
                          name="lastname"
                          value={{ className: "services-icon" }}
                        >
                          <GiJusticeStar />
                        </IconContext.Provider>
                      </div>
                      <p>AutoCAD</p>
                    </div>
                    <div className="service-items">
                      <div className="service-icon-wrapper">
                        <IconContext.Provider
                          name="lastname"
                          value={{ className: "services-icon" }}
                        >
                          <GiJusticeStar />
                        </IconContext.Provider>
                      </div>
                      <p>ArchiCAD </p>
                    </div>
                    <div className="service-items">
                      <div className="service-icon-wrapper">
                        <IconContext.Provider
                          name="lastname"
                          value={{ className: "services-icon" }}
                        >
                          <GiJusticeStar />
                        </IconContext.Provider>
                      </div>
                      <p>SketchUp Pro </p>
                    </div>
                    <div className="service-items">
                      <div className="service-icon-wrapper">
                        <IconContext.Provider
                          name="lastname"
                          value={{ className: "services-icon" }}
                        >
                          <GiJusticeStar />
                        </IconContext.Provider>
                      </div>
                      <p> AutoCAD Civil 3D </p>
                    </div>
                    <div className="service-items">
                      <div className="service-icon-wrapper">
                        <IconContext.Provider
                          name="lastname"
                          value={{ className: "services-icon" }}
                        >
                          <GiJusticeStar />
                        </IconContext.Provider>
                      </div>
                      <p> Twinmotion Render etc.) </p>
                    </div>
                  </div>

                  <Link to="/services" className="btn_3">
                    Voir Plus
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

export default Services;
