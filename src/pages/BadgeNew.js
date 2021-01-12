import React, { Component } from "react";
//Components
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Api from "../Api";
import PageLoading from "../components/PageLoading";

import "./styles/BadgeNew.css";
import Logo from "../images/platzi-conf.svg";

export default class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault(); // this prevents updating the page or redirectioning
    this.setState({ loading: true, error: null });
    try {
      await Api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
    console.log(this.props.stateForm);
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="img-fluid BadgeNew__hero-image"
            src={Logo}
            alt="imageheader"
          />
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Badge
                  firstName={this.state.form.firstName || " First_Name"}
                  lastName={this.state.form.lastName || "Last_Name"}
                  jobTitle={this.state.form.jobTitle || "Job_Title"}
                  email={this.state.form.email || "Email"}
                  twitter={this.state.form.twitter || "Twitter"}
                  event="platziconf"
                />
              </div>
              <div className="col-6">
                <BadgeForm
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  stateForm={this.state.form}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
