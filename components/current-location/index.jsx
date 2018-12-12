import React, { Component } from "react";
import {connect} from 'react-redux';

import { fetchRequest as weatherFetch } from "../../actions/weather-data";
import { fetchRequest as forecastDaysFetch } from "../../actions/forecast-days";

import { setData as setDateLocation } from "../../actions/location";

import IconBtn from "../button/IconBtn";
import LocationIcon from "../../static/img/icons/location.svg";

class CurrentLocationBtn extends Component {
  handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getPosition,
        this.handleErrors
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  handleErrors = e => {
    switch (e.code) {
      case e.PERMISSION_DENIED:
        alert("You are not allowed access to your location!!!");
        break;
      default:
        console.log("Error.code: " + e.code + " Error.message: " + e.message);
        break;
    }
  };

  getPosition = position => {
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    this.props.weatherFetch(location);
    this.props.forecastDaysFetch(location);

    this.props.setDateLocation(location);
  };

  render() {
    return (
      <IconBtn
        {...this.props}
        onClick={this.handleClick}
        width="23px"
        height="23px"
        title="current location"
      >
        <LocationIcon />
      </IconBtn>
    );
  }
}

export default connect(null, {weatherFetch,forecastDaysFetch,setDateLocation})(CurrentLocationBtn)
// export default CurrentLocationBtn;
