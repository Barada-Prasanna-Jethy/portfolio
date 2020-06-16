import React from "react";

export default function ProjectCard(props) {
  return (
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
          <button className="button">Go to code Repo </button>
        </a>
      </div>
    </div>
  );
}
