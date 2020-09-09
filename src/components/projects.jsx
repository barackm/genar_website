import React, { Component } from "react";
import image1 from "../img/project_1.png";
import image2 from "../img/project_2.png";
import image3 from "../img/project_3.png";
class Projects extends Component {
  state = {};
  render() {
    return (
      <section class="our_project section_padding" id="portfolio">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5 col-sm-10">
              <div class="section_tittle">
                <h2>Nos Projects</h2>
              </div>
            </div>
            <div class="col-lg-6 col-sm-10">
              <div class="filters portfolio-filter project_menu_item">
                <ul>
                  <li class="active" data-filter="*">
                    Tout
                  </li>
                  <li data-filter=".buildings">Construction</li>
                  <li data-filter=".rebuild">Renovation</li>
                  <li data-filter=".architecture">Architecture</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="filters-content">
            <div class="row justify-content-between portfolio-grid">
              <div class="col-lg-4 col-sm-6 all buildings">
                <div class="single_our_project">
                  <div class="single_offer">
                    <img src={image1} alt="offer_img_1" />
                    <div class="hover_text">
                      <p>Best Company</p>
                      <a href="#">
                        <h2>GENAR</h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 all rebuild">
                <div class="single_our_project">
                  <div class="single_offer">
                    <img src={image2} alt="offer_img_1" />
                    <div class="hover_text">
                      <p>Best Company</p>
                      <a href="#">
                        <h2>GENAR</h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 all architecture">
                <div class="single_our_project">
                  <div class="single_offer">
                    <img src={image3} alt="offer_img_1" />
                    <div class="hover_text">
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
    );
  }
}

export default Projects;
