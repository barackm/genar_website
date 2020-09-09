import React, { Component } from "react";
import Header from "./header";
import About from "./about";
import Services from "./services";
import Experience from "./experience";
import Projects from "./projects";
import ProjectsCounter from "./projectsCounter";
import Clients from "./clients";
class HomeIndex extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <About />
        <Services />
        <Experience />
        <Projects />
        <ProjectsCounter />
        {/* <Clients /> */}
      </div>
    );
  }
}

export default HomeIndex;
