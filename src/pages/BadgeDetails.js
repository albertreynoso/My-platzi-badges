import React from "react";
import { Link } from "react-router-dom";

import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

import ConLogo from "../images/platzi-conf.svg";
import "./styles/BadgeDetails.css";
// //custom hook
function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}

export default function BadgeDetails(props) {
  // normal hook
  //   const [count, setCount] = React.useState(0);
  //custom hook
  const [count, setCount] = useIncreaseCount(5);
  const badge = props.badge;
  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={ConLogo} alt="logo de conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName}
                {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Increase count: {count}
            </button>
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  onClose={props.onCloseModal}
                  isOpen={props.modalIsOpen}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
