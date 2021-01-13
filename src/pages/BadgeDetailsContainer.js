import React, { Component } from "react";

import Api from "../Api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

export default class BadgeDetailsContainer extends Component {
  constructor(props) {
    super(props);
    console.log("1.");
    this.state = {
      loading: true,
      error: null,
      data: {},
    };
  }

  componentDidMount() {
    console.log("3. ");
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await Api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    console.log("2/4.");
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError />;
    }
    return <BadgeDetails badge={this.state.data} />;
  }
}
