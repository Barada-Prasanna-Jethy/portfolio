import React from "react";
import { useSpring, animated } from "react-spring";
import Bounce from "react-reveal/Bounce";

export default function Progressbar(props) {
  const width = useSpring({
    from: { width: "0%", background: "#5c5a1a" },
    to: { width: props.width, background: "#cfcb3e" }
  });

  return (
    <Bounce left opposite={true}>
      <div className="skill">
        <h2>
          {props.title} <img className="icon" alt="icon" src={props.icon}></img>
        </h2>
        <div class="progress">
          <animated.div class="progress-bar" style={width}></animated.div>
        </div>
      </div>
    </Bounce>
  );
}
