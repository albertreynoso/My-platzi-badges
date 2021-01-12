import React, { Component } from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import { Link } from "react-router-dom";

import BadgesList from "../components/BadgesList";
import Api from "../Api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

export default class Badges extends Component {
  constructor(props) {
    // super() es para crear una super clase y se le pasa props como parametro
    super(props);
    console.log("1. constructor()");
    this.state = {
      data: undefined,
      loading: true,
      error: null,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }
  componentWillUnmount() {
    console.log("6. componentWillUnmount()");
  }
  componentDidMount() {
    console.log("3. componentDidMount()");
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await Api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    console.log("2/4. render()");
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    console.log("2/4. render()");
    if (this.state.error) {
      return <PageError error={this.state.error.message} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges__conf-logo"
                src={confLogo}
                alt="logo de conferencia"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>
        <BadgesList badges={this.state.data} />
      </React.Fragment>
    );
  }
}
