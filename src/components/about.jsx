import React, { Component } from "react";
import aboutImg from "../img/about_part_img.png";
class About extends Component {
  state = {};
  render() {
    return (
      <section className="about_part section_padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className="about_part_img">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="about_part_text">
                <h2>Avec nous, Vos rêves deviennent réalité</h2>
                <p>
                  Une entreprise de construction spécialisée dans la conception,
                  l’exécution de marchés de construction publics & privés, la
                  consultance, le Design & Build, la rénovation et la fourniture
                  des matériaux de construction (blocs, pavés, bordures, etc.)
                  mettant à votre disposition un personnel qualifié des tel que
                  les Ingénieurs Civils, Architectes et Techniciens afin de
                  répondre à vos besoins.
                </p>
                <ul>
                  <li>
                    <span className="flaticon-drop"></span>
                    <h3>NOTRE MISSION</h3>
                    <p>
                      Mener à bien des projets de construction de toute
                      envergure, de l’étude à l’exécution, dans la pleine
                      satisfaction des exigences des maitres d’ouvrage découlant
                      d’une bonne organisation des équipes selon leurs aptitudes
                      et expertises distinctes.
                    </p>
                  </li>
                  <li>
                    <span className="flaticon-ui"></span>
                    <h3>NOS OBJECTIFS</h3>
                    <p>
                      Être une entreprise de référence de part l’expertise dans
                      la conception, la consultance et la transparence dans
                      l’exécution des projets tant publics que privés; •
                      Maintenir la croissance de l’entreprise sous le contrôle
                      d’une saine gestion; • Fournir des matériaux de
                      construction remplissant toutes les conditions de qualité,
                      de résistance et de durabilité.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
