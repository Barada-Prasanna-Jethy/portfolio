import React from "react";

import facebook from "../assets/socialMediaIcons/facebook.svg";
import linkedin from "../assets/socialMediaIcons/linkedin.svg";
import google from "../assets/socialMediaIcons/google.svg";
import phone from "../assets/socialMediaIcons/phone.svg";

export default function Contact() {
  return (
    <div className="contact-me">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/barada.prasannajethy"
      >
        <img class="icon" alt="icon" src={facebook}></img>
        <h1>Barada Prasanna Jethy</h1>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/barada-jethy/"
      >
        <img class="icon" alt="icon" src={linkedin}></img>
        <h1>barada-jethy</h1>
      </a>
      <span>
        <img class="icon" alt="icon" src={google}></img>
        <h1>baradajethy@gmail.com</h1>
      </span>
      <span>
        <img class="icon" alt="icon" src={phone}></img>
        <h1>+91-7978027116</h1>
      </span>
    </div>
  );
}
