import React, { Component } from "react";

export default class BadgeForm extends Component {
  // state = {};
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  handleClick = (e) => {
    console.log("the button was clicked");
  };
  // handleSubmit = (e) => {
  //   e.preventDefault(); // this prevents updating the page or redirectioning
  //   console.log(this.props.stateForm);
  // };
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              name="firstName"
              placeholder="first name"
              value={this.props.stateForm.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              name="lastName"
              placeholder="last name"
              value={this.props.stateForm.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              name="email"
              placeholder="abc@gmail.com"
              value={this.props.stateForm.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              name="jobTitle"
              placeholder="engineer"
              value={this.props.stateForm.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              name="twitter"
              placeholder="frnacis"
              value={this.props.stateForm.twitter}
            />
          </div>
          <div>
            <button
              //   type="button"
              className="btn btn-primary"
              onClick={this.handleClick}
            >
              Save
            </button>
          </div>
          {this.props.error && (
            <div className="text-danger">
              <p>{this.props.error.message}</p>
            </div>
          )}
        </form>
      </div>
    );
  }
}
