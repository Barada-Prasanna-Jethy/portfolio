import React from "react";
import "./App.css";
import Landing from "./Component/Landing";
import Progressbar from "./Component/Progressbar";
import ProjectCard from "./Component/ProjectCard";

import gameflix from "./assets/gameflix.JPG";
import notehub from "./assets/notehub.JPG";
import contactmanager from "./assets/contactmanager.JPG";
import rickandmorty from "./assets/rickandmorty.JPG";

import htmlIcon from "./assets/html.svg";
import cssIcon from "./assets/css.svg";
import reactIcon from "./assets/react.svg";
import jsIcon from "./assets/js.svg";

import Image from "./assets/image.jpg";
function App() {
  return (
    <React.Fragment>
      <Landing />
      <div className="details">
        <div id="about">
          <header className="header">About</header>
          <div className="about">
            <summary className="summary">
              My name is Barada Prasanna Jethy. I'm a 23 years old Front End
              Developer based in Bangalore. I describe myself as a developer who
              loves coding, open source, and the web platform. I love travelling
              and discovering new places. Also, I enjoy playing guitar and
              playing pc games.
            </summary>
            <img className="profile-image" src={Image} alt="image" />
          </div>
        </div>
        <div id="skills">
          <header className="header">Skills</header>
          <div className="skills">
            <Progressbar title={"Javascript"} icon={jsIcon} width={"85%"} />
            <Progressbar title={"HTML"} icon={htmlIcon} width={"80%"} />
            <Progressbar title={"CSS"} icon={cssIcon} width={"85%"} />
            <Progressbar title={"React.js"} icon={reactIcon} width={"85%"} />
          </div>
        </div>
        <div id="projects">
          <header className="header">Projects</header>
          <div className="card-container">
            <ProjectCard
              cardTitle="Gamefilx"
              cardDetails="This application contains a list of available games where the user can search and filter with multiple criteria such as price,rating etc.This application is also responsive in nature."
              cardBackground={gameflix}
              website="https://gameflix.netlify.app/#/"
              github="https://github.com/Barada-Prasanna-Jethy/gameflix"
            />
            <ProjectCard
              cardTitle="Notehub"
              cardDetails="This application contains a list of available games where the user can search and filter with multiple criteria such as price,rating etc.This application is also responsive in nature."
              cardBackground={notehub}
              website="https://notehub.netlify.app/#/"
              github="https://github.com/Barada-Prasanna-Jethy/Note-manager"
            />
            <ProjectCard
              cardTitle="Contact Manager"
              cardDetails="This application contains a list of available games where the user can search and filter with multiple criteria such as price,rating etc.This application is also responsive in nature."
              cardBackground={contactmanager}
              website="https://contact-manager-1-0.herokuapp.com/"
              github="https://github.com/Barada-Prasanna-Jethy/contact-manager"
            />
            <ProjectCard
              cardTitle="Rick and Morty"
              cardDetails="This application contains a list of available games where the user can search and filter with multiple criteria such as price,rating etc.This application is also responsive in nature."
              cardBackground={rickandmorty}
              website="https://rick-and-morty-barada.netlify.app/"
              github="https://github.com/Barada-Prasanna-Jethy/rick-and-morty"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
