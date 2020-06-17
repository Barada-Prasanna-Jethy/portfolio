import React from "react";
import Bounce from "react-reveal/Bounce";

export default function ProjectCard(props) {
  return (
    <Bounce left>
      <div
        className="card"
        style={{ backgroundImage: `url( ${props.cardBackground}) ` }}
      >
        <div className="card-details">
          <header>{props.cardTitle}</header>
          <summary>{props.cardDetails}</summary>

          <a target="_blank" href={props.website}>
            <button className="button">Go to website </button>
          </a>
          <a target="_blank" href={props.github}>
            <button className="button">Github</button>
          </a>
        </div>
      </div>
    </Bounce>
  );
}
