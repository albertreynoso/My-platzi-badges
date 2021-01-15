import React from "react";

import Modal from "./Modal";

export default function DeleteBadgeModal(props) {
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen}>
      <div className="DeleteBadgeModal">
        <h1>Are you sure of this?</h1>
        <p>You're about to delete this badge.</p>
        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-5">
            Delete
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
