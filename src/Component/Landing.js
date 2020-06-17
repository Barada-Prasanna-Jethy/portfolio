import React from "react";

export default function Landing() {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">I am a </span>
          <div className="line">Frontend Developer</div>
          {/* <span className="line">
            <span className="color">&</span> code.
          </span> */}
        </h1>
        <div className="buttons">
          <a href="#about" className="button">
            About me
          </a>
          <a href="#skills" className="button">
            Skills
          </a>
          <a href="#projects" className="button">
            My Projects
          </a>
        </div>
      </div>
    </header>
  );
}
