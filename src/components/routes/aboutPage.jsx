import React, { Component } from "react";
import image1 from "../../img/about_part_img.png";
class AboutPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="breadcrumb breadcrumb_bg align-items-center">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-6">
                <div className="breadcrumb_tittle text-left">
                  <h2>A Props de nous</h2>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="breadcrumb_content text-right">
                  <p>
                    Home<span>/</span>About Us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about_part about section_padding">
          <div className="container about">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="about_part_img ">
                  <img src={image1} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="about_part_text">
                  <h2>Avec nous, Vos rêves deviennent réalité</h2>
                  <p>
                    Une entreprise de construction spécialisée dans la
                    conception, l’exécution de marchés de construction publics &
                    privés, la consultance, le Design & Build, la rénovation et
                    la fourniture des matériaux de construction (blocs, pavés,
                    bordures, etc.) mettant à votre disposition un personnel
                    qualifié des tel que les Ingénieurs Civils, Architectes et
                    Techniciens afin de répondre à vos besoins.
                  </p>
                  <ul>
                    <li>
                      <span className="flaticon-drop"></span>
                      <h3>NOTRE MISSION</h3>
                      <p>
                        Mener à bien des projets de construction de toute
                        envergure, de l’étude à l’exécution, dans la pleine
                        satisfaction des exigences des maitres d’ouvrage
                        découlant d’une bonne organisation des équipes selon
                        leurs aptitudes et expertises distinctes.
                      </p>
                    </li>
                    <li>
                      <span className="flaticon-ui"></span>
                      <h3>NOS OBJECTIFS</h3>
                      <p>
                        Être une entreprise de référence de part l’expertise
                        dans la conception, la consultance et la transparence
                        dans l’exécution des projets tant publics que privés; •
                        Maintenir la croissance de l’entreprise sous le contrôle
                        d’une saine gestion; • Fournir des matériaux de
                        construction remplissant toutes les conditions de
                        qualité, de résistance et de durabilité.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* <div className="row align-items-center justify-content-between"> */}
            <div className="col-md-12 col-lg-12 about-other-info">
              <div className="about_part_text col-md-6">
                <ul>
                  <li>
                    <span className="flaticon-drop"></span>
                    <h3>NOTRE PHILOSOPHIE</h3>
                    <p>
                      Réaliser des prestations de qualité dans une recherche
                      constante de la satisfaction du client. « Un client
                      satisfait, vaut de l’or »
                    </p>
                  </li>
                  <li>
                    <span className="flaticon-ui"></span>
                    <h3>NOS VALEURS</h3>
                    <p>
                      • Satisfaction du client • L’innovation • Collaboration •
                      Professionnalisme • Responsabilité.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="about_part_text col-md-6">
                <ul>
                  <li>
                    <span className="flaticon-drop"></span>
                    <h3>AXE METIERS</h3>
                    <p>
                      • Être un partenaire actif et être reconnu comme un acteur
                      majeur dans l’Economie Congolaise; • Anticiper, réagir et
                      s’adapter aux tendances lourdes de marché actuel et futur
                      • Augmenter nos activités de promotion immobilière •
                      Accroitre notre part de marché dans les domaines des Génie
                      Civil & Architecture moderne • Développer des projets en
                      Partenariat Public, Privé et/ou en Design & Build •
                      Sensibiliser nos clients, nos partenaires et notre
                      personnel aux nouvelles technologies de la construction
                      durable.
                    </p>
                  </li>
                  <li>
                    <span className="flaticon-ui"></span>
                    <h3>AXES ORGANISATIONNELS</h3>
                    <p>
                      • Gérer chaque projet comme un centre de profit autonome
                      et rentable • Anticiper et planifier toutes nos actions •
                      Favoriser la créativité des équipes pour optimiser nos
                      projets.
                    </p>
                  </li>
                  <li>
                    <span className="flaticon-ui"></span>
                    <h3>AXES HUMAINS</h3>
                    <p>
                      • Gérer chaque projet comme un centre de profit autonome
                      et rentable • Responsabiliser tout le personnel selon
                      l’expertise • Recruter les professionnels pour faire
                      évoluer nos métiers. • Former en continu l’ensemble du
                      personnel.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* </div> */}
          </div>
        </section>

        <section className="about_part experiance_part section_padding single_experiance_section">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="about_part_text">
                  <h2>Nous sommes experimentés dans la Construction</h2>
                  <p>
                    Their whose made waters there our, air above first give dry
                    fruit that second whose herb creeping it us light spirit
                    appear mans. So green abundantly She'd. Greater divide dry
                    bearing years ourends herb upon which open lights had
                    blessed replenish Cattle give his. Abundantly over saying
                    which beast dominion multiply behold to wateo.
                  </p>
                  <div className="about_text_iner">
                    <div className="about_text_counter">
                      <h2>10</h2>
                    </div>
                    <div className="about_iner_content">
                      <h3>
                        ans <span>d'Experience</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="about_part_img">
                  <img src={image1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutPage;
