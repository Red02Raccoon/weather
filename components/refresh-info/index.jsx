import React, { Component } from "react";
import {connect} from 'react-redux';

import { fetchRequest as weatherFetch } from "../../actions/weather-data";
import { fetchRequest as forecastDaysFetch } from "../../actions/forecast-days";

import IconBtn from "../button/IconBtn";
import RefreshIcon from "../../static/img/icons/update-arrows.svg";

class CurrentLocationBtn extends Component {
  handleClick = () => {
    const { location, weatherFetch, forecastDaysFetch } = this.props;
    weatherFetch(location);
    forecastDaysFetch(location);
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
