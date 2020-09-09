import React, { Component } from "react";

class ProjectsPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="breadcrumb breadcrumb_bg align-items-center">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-6">
                <div className="breadcrumb_tittle text-left">
                  <h2>project</h2>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="breadcrumb_content text-right">
                  <p>
                    Home<span>/</span>project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our_project section_padding" id="portfolio">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5 col-sm-10">
                <div className="section_tittle">
                  <h2>Nos Projects</h2>
                </div>
              </div>
              <div className="col-lg-6 col-sm-10">
                <div className="filters portfolio-filter project_menu_item">
                  <ul>
                    <li className="active" data-filter="*">
                      Tout
                    </li>
                    <li data-filter=".buildings">Construction</li>
                    <li data-filter=".rebuild">Renovation</li>
                    <li data-filter=".architecture">Architecture</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="filters-content">
              <div className="row justify-content-between portfolio-grid">
                <div className="col-lg-4 col-sm-6 all buildings">
                  <div className="single_our_project">
                    <div className="single_offer">
                      <img src="img/project_1.png" alt="offer_img_1" />
                      <div className="hover_text">
                        <p>Best Company</p>
                        <a href="#">
                          <h2>GENAR</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 all rebuild">
                  <div className="single_our_project">
                    <div className="single_offer">
                      <img src="img/project_2.png" alt="offer_img_1" />
                      <div className="hover_text">
                        <p>Best Company</p>
                        <a href="#">
                          <h2>GENAR</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 all architecture">
                  <div className="single_our_project">
                    <div className="single_offer">
                      <img src="img/project_3.png" alt="offer_img_1" />
                      <div className="hover_text">
                        <p>Best Company</p>
                        <a href="#">
                          <h2>GENAR</h2>
                        </a>
                      </div>
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

export default ProjectsPage;
