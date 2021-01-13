import React, { Component } from "react";
import confImage from "../images/badge-header.svg";
import "./styles/Badges.css";

import Gravatar from "./Gravatar";

class Badge extends Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confImage} alt="imgaen de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="avatar"
          />
          <h1>
            {this.props.firstName} <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">
          <div>#PlatziConf</div>
        </div>
      </div>
    );
  }
}
export default Badge;
