import React, { Component } from "react";
import svg1 from "../img/icon/Icon_1.svg";
import svg2 from "../img/icon/Icon_2.svg";
import svg3 from "../img/icon/Icon_3.svg";
import svg4 from "../img/icon/Icon_4.svg";

class ProjectsCounter extends Component {
  state = {};
  render() {
    return (
      <section className="member_counter padding_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single_counter_icon">
                <img src={svg1} alt="" />
              </div>
              <div className="single_member_counter">
                <span className="counter">60</span>
                <h4>
                  {" "}
                  <span>Clients</span> Satisfaits
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_counter_icon">
                <img src={svg2} alt="" />
              </div>
              <div className="single_member_counter">
                <span className="counter">10</span>
                <h4>
                  <span>Worldwide</span> Branches
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_counter_icon">
                <img src={svg3} alt="" />
              </div>
              <div className="single_member_counter">
                <span className="counter">80</span>
                <h4>
                  <span>Projects </span> Total
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_counter_icon">
                <img src={svg4} alt="" />
              </div>
              <div className="single_member_counter">
                <span className="counter">24</span>
                <h4>
                  {" "}
                  <span>Projects </span> Finis
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectsCounter;
