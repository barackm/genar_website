import React from "react";
import "./App.css";
import Footer from "./components/footer";

import Navigation from "./components/navigation";
import { Switch, Route } from "react-router-dom";
import HomeIndex from "./components/homeIndex";
import AboutPage from "./components/routes/aboutPage";
import ServicesPage from "./components/routes/servicesPage";
import ProjectsPage from "./components/routes/projectsPage";
import Contacts from "./components/routes/contacts";
import Input from "./components/routes/input";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomeIndex} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/input" component={Input} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
