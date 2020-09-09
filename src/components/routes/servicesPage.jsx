import React, { Component } from "react";
import { IoIosConstruct } from "react-icons/io";
import { IconContext } from "react-icons";
import { BsAward } from "react-icons/bs";
import { GiJusticeStar } from "react-icons/gi";
class ServicesPage extends Component {
  state = {
    elements: {
      elementShown1: false,
      elementShown2: false,
      elementShown3: false,
      elementShown4: false,
      elementShown5: false,
    },
  };
  handleShowHidenElements = (element) => {
    const elements = { ...this.state.elements };
    // console.log(elements[element]);
    elements[element] = !elements[element];
    this.setState({ elements });
  };
  render() {
    const {
      elementShown1,
      elementShown2,
      elementShown3,
      elementShown4,
      elementShown5,
    } = this.state.elements;
    return (
      <div>
        <section className="breadcrumb breadcrumb_bg align-items-center">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-6">
                <div className="breadcrumb_tittle text-left">
                  <h2>services</h2>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="breadcrumb_content text-right">
                  <p>
                    Home<span>/</span>services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our_service section_padding single_page_services">
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

                    <span
                      onClick={() =>
                        this.handleShowHidenElements("elementShown1")
                      }
                      className="btn_3 read-more"
                    >
                      {elementShown1 ? "Voir moins" : "Voir plus"}
                    </span>
                    <div
                      className={
                        elementShown1
                          ? "other-element-service visible"
                          : "other-element-service"
                      }
                    >
                      <div className="service-items">
                        <div className="service-icon-wrapper">
                          <IconContext.Provider
                            name="lastname"
                            value={{ className: "services-icon" }}
                          >
                            <IoIosConstruct />
                          </IconContext.Provider>
                        </div>
                        <p>WASH (Eau, Hygiène & Assainissement). </p>
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
                          Fourniture en Main d’œuvre qualifiée tout domaine (
                          maçonnerie, menuiserie, plomberie, électricité,
                          ajustage, ferraillage etc.).
                        </p>
                      </div>
                    </div>
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

                    <span
                      onClick={() =>
                        this.handleShowHidenElements("elementShown2")
                      }
                      className="btn_3 read-more"
                    >
                      {elementShown2 ? "Voir moins" : "Voir plus"}
                    </span>
                    <div
                      className={
                        elementShown2
                          ? "other-element-service visible"
                          : "other-element-service"
                      }
                    >
                      <div className="service-items">
                        <div className="service-icon-wrapper">
                          <IconContext.Provider
                            name="lastname"
                            value={{ className: "services-icon" }}
                          >
                            <IoIosConstruct />
                          </IconContext.Provider>
                        </div>
                        <p>Rénovation et réhabilitation des bâtiments </p>
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
                        <p>Consultance en architecture.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="single_feature">
                  <div className="single_service">
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

                    <span
                      onClick={() =>
                        this.handleShowHidenElements("elementShown3")
                      }
                      className="btn_3 read-more"
                    >
                      {elementShown3 ? "Voir moins" : "Voir plus"}
                    </span>
                    <div
                      className={
                        elementShown3
                          ? "other-element-service visible"
                          : "other-element-service"
                      }
                    >
                      <div className="service-items">
                        <div className="service-icon-wrapper">
                          <IconContext.Provider
                            name="lastname"
                            value={{ className: "services-icon" }}
                          >
                            <IoIosConstruct />
                          </IconContext.Provider>
                        </div>
                        <p>Dimensionnement des ouvrages</p>
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
                          <p>Robot Structural Analysis (RSA Pro) </p>
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
                          <p>Covadis </p>
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
                          <p>Epanet </p>
                        </div>
                      </div>

                      <div className="service-items">
                        <div className="service-icon-wrapper">
                          <IconContext.Provider
                            name="lastname"
                            value={{ className: "services-icon" }}
                          >
                            <BsAward />
                          </IconContext.Provider>
                        </div>
                        <p>
                          Formation en nouvelle technologie dans le domaine de
                          construction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-4">
                <div className="single_feature">
                  <div className="single_service">
                    <span className="flaticon-ui"></span>
                    <h4>Fourniture en matériaux et matériels</h4>
                    <div className="service-items">
                      <div className="service-icon-wrapper">
                        <IconContext.Provider
                          name="lastname"
                          value={{ className: "services-icon" }}
                        >
                          <BsAward />
                        </IconContext.Provider>
                      </div>
                      <p>Vente en gros de blocs ciment de dimensions</p>
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
                        <p>0,15m*0,20m*0,40m </p>
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
                        <p>0,10m*0,20m*0,40m </p>
                      </div>
                    </div>

                    <span
                      onClick={() =>
                        this.handleShowHidenElements("elementShown4")
                      }
                      className="btn_3 read-more"
                    >
                      {elementShown4 ? "Voir moins" : "Voir plus"}
                    </span>
                    <div
                      className={
                        elementShown4
                          ? "other-element-service visible"
                          : "other-element-service"
                      }
                    >
                      <div className="service-items">
                        <div className="service-icon-wrapper">
                          <IconContext.Provider
                            name="lastname"
                            value={{ className: "services-icon" }}
                          >
                            <BsAward />
                          </IconContext.Provider>
                        </div>
                        <p> Location de: </p>
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
                          <p>Coffrage Métallique (plaques & pieds droits) </p>
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
                          <p>Vibreur ou Aiguille pour vibrer le béton </p>
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
                          <p> Moto-Soudeuse </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                          <BsAward />
                        </IconContext.Provider>
                      </div>
                      <p> Ajustage sur chantier </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ServicesPage;
