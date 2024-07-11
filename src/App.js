import React from "react";
import { Aside } from "./components/aside";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Contact } from "./components/contact";

const App = () => {
  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <a
          href="#"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i></i>
        </a>
        <Aside />
        <div id="colorlib-main">
          <Home />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
