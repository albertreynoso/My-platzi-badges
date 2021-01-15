import React, { Component } from "react";
import { Link } from "react-router-dom";

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

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);
  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badge</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
          />
        </div>
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
      <div className="form-group">
        <label>Filter Badge</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default BadgesList;
