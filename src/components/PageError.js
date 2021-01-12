import React from "react";

import AstroLogo from "../images/astronautas.svg";
import "./styles/PageError.css";

export default function PageError(props) {
  return (
    <div className="errorElement">
      <img src={AstroLogo} alt="astronautas" style={{ width: " 30vw" }} />
      <h4>{props.error}</h4>
    </div>
  );
}
