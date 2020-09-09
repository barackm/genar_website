import React, { Component } from "react";
import client1 from "../img/client/client_2.png";
import client2 from "../img/client/client_1.png";
import client3 from "../img/client/client_2.png";
import client4 from "../img/client/client_1.png";

class Clients extends Component {
  state = {};
  render() {
    return (
      <section className="review_part section_padding">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-5 col-xl-4">
              <div className="tour_pack_text">
                <h2>Some Feedback From Client</h2>
                <p>
                  Which cattle fruitful he fly visi won not let above lesser
                  stars fly form wonder every let third form two air seas after
                  us said day won lso together midst two female she
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="review_part_cotent owl-carousel">
                <div className="single_review_part">
                  <img src={client1} alt="" />
                  <div className="tour_pack_content">
                    <p>
                      Life open fifth midst lesser place light after unto move
                      that make had void and whales. So after void called whose
                      were cattle fourth seed Image yielding is given every own
                      tree Image
                    </p>
                    <h4>Sawpalo, Brasil</h4>
                  </div>
                </div>
                <div className="single_review_part">
                  <img src={client2} alt="" />
                  <div className="tour_pack_content">
                    <p>
                      {" "}
                      Life open fifth midst lesser place light after unto move
                      that make had void and whales. So after void called whose
                      were cattle fourth seed Image yielding is given every own
                      tree Image
                    </p>
                    <h4>Sawpalo, Brasil</h4>
                  </div>
                </div>
                <div className="single_review_part">
                  <img src={client3} alt="" />
                  <div className="tour_pack_content">
                    <p>
                      Life open fifth midst lesser place light after unto move
                      that make had void and whales. So after void called whose
                      were cattle fourth seed Image yielding is given every own
                      tree Image
                    </p>
                    <h4>Sawpalo, Brasil</h4>
                  </div>
                </div>
                <div className="single_review_part">
                  <img src={client4} alt="" />
                  <div className="tour_pack_content">
                    <p>
                      Life open fifth midst lesser place light after unto move
                      that make had void and whales. So after void called whose
                      were cattle fourth seed Image yielding is given every own
                      tree Image
                    </p>
                    <h4>Sawpalo, Brasil</h4>
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

export default Clients;
