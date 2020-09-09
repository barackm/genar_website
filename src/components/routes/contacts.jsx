import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumb breadcrumb_bg align-items-center">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-6">
                <div className="breadcrumb_tittle text-left">
                  <h2>contact</h2>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="breadcrumb_content text-right">
                  <p>
                    Accueil<span>/</span>contacts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section section_padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Rester en Contact</h2>
              </div>
              <div className="col-lg-8">
                <form
                  className="form-contact contact_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control w-100"
                          name="message"
                          id="message"
                          cols="30"
                          rows="9"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Message'"
                          placeholder="Entrer votre Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="name"
                          id="name"
                          type="text"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter your name'"
                          placeholder="Entrer votre nom"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="email"
                          id="email"
                          type="email"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email address'"
                          placeholder="Entrer address email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="subject"
                          id="subject"
                          type="text"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Subject'"
                          placeholder="Entrer message"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button
                      onClick={(e) => e.preventDefault()}
                      type="submit"
                      className="button button-contactForm btn_1"
                    >
                      Envoyer Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-home"></i>
                  </span>
                  <div className="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-tablet"></i>
                  </span>
                  <div className="media-body">
                    <h3>00 (243) 891 779 994</h3>
                    <h3>00 (243) 821 488 865</h3>
                    <p>Lundi au Samedi 9h à 16h</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-email"></i>
                  </span>
                  <div className="media-body">
                    <h3>info@genardrc.com</h3>
                    <p>Contactez nous a tout moment</p>
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

export default Contacts;
