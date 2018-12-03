import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchRequest as weatherFetch } from "../../actions/weather-data";
import { fetchRequest as forecastDaysFetch } from "../../actions/forecast-days";
import { ReactComponent as RefreshIcon } from "../../images/icons/update-arrows.svg";
import IconBtn from "../button/IconBtn";

class CurrentLocationBtn extends Component {
  handleClick = () => {
    this.props.weatherFetch(this.props.location);
    this.props.forecastDaysFetch(this.props.location);
  };

  render() {
    return (
      <IconBtn
        onClick={this.handleClick}
        width="23px"
        height="23px"
        title="refresh information"
      >
        <RefreshIcon />
      </IconBtn>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location.data
  };
}

export default connect(
  mapStateToProps,
  { weatherFetch, forecastDaysFetch }
)(CurrentLocationBtn);
