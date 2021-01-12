import React, { Component } from "react";

import "./styles/BadgesList.css";
import "../pages/styles/Badges.css";
import AstroLogo from "../images/astronautas.svg";

class BadgesListItem extends Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />
        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br /> @{this.props.badge.twitter}
          <br /> {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div className="Badges__container">
          <figure>
            <img src={AstroLogo} alt="astronautas" style={{ width: "30vw" }} />
            <figcaption>
              <h3 style={{ textAlign: "center" }}>No badges found</h3>
            </figcaption>
          </figure>
        </div>
      );
    }
    return (
      <div className="BadgesList">
        <div className="Badges__container">
          <ul className="list-unstyled">
            {this.props.badges.map((badge) => {
              return (
                <li key={badge.id}>
                  <BadgesListItem badge={badge} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default BadgesList;
