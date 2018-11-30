import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchRequest as weatherFetch } from "../../actions/weather-data";
import { fetchRequest as forecastDaysFetch } from "../../actions/forecast-days";

const CurrentLocBtn = styled.button`
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  transition: color 0.3s;
  svg path {
    transition: fill 0.3s;
  }
  &:hover {
    color: #ee3129;
    svg path {
      fill: #ee3129;
    }
  }
`;

const IconWrap = styled.div`
  width: 23px;
  height: 23px;
  display: inline-block;
  margin-bottom: 5px;
`;

const iconLocation = (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 477 477">
    <path
      fill="#fff"
      d="M238.4,0C133,0,47.2,85.8,47.2,191.2c0,12,1.1,24.1,3.4,35.9c0.1,0.7,0.5,2.8,1.3,6.4c2.9,12.9,7.2,25.6,12.8,37.7
			c20.6,48.5,65.9,123,165.3,202.8c2.5,2,5.5,3,8.5,3s6-1,8.5-3c99.3-79.8,144.7-154.3,165.3-202.8c5.6-12.1,9.9-24.7,12.8-37.7
			c0.8-3.6,1.2-5.7,1.3-6.4c2.2-11.8,3.4-23.9,3.4-35.9C429.6,85.8,343.8,0,238.4,0z M399.6,222.4c0,0.2-0.1,0.4-0.1,0.6
			c-0.1,0.5-0.4,2-0.9,4.3c0,0.1,0,0.1,0,0.2c-2.5,11.2-6.2,22.1-11.1,32.6c-0.1,0.1-0.1,0.3-0.2,0.4
			c-18.7,44.3-59.7,111.9-148.9,185.6c-89.2-73.7-130.2-141.3-148.9-185.6c-0.1-0.1-0.1-0.3-0.2-0.4c-4.8-10.4-8.5-21.4-11.1-32.6
			c0-0.1,0-0.1,0-0.2c-0.6-2.3-0.8-3.8-0.9-4.3c0-0.2-0.1-0.4-0.1-0.7c-2-10.3-3-20.7-3-31.2c0-90.5,73.7-164.2,164.2-164.2
			s164.2,73.7,164.2,164.2C402.6,201.7,401.6,212.2,399.6,222.4z"
    />
    <path
      fill="#fff"
      d="M238.4,71.9c-66.9,0-121.4,54.5-121.4,121.4s54.5,121.4,121.4,121.4s121.4-54.5,121.4-121.4S305.3,71.9,238.4,71.9z
			 M238.4,287.7c-52.1,0-94.4-42.4-94.4-94.4s42.4-94.4,94.4-94.4s94.4,42.4,94.4,94.4S290.5,287.7,238.4,287.7z"
    />
  </svg>
);

class CurrentLocationBtn extends Component {
  state = {};

  handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    } else {
      throw new Error();
    }
  };

  getPosition = position => {
		const location = {
			lat: position.coords.latitude,
			lon: position.coords.longitude
		}

		this.props.weatherFetch(location);
		this.props.forecastDaysFetch(location);
  };

  render() {
    return (
      <CurrentLocBtn onClick={this.handleClick}>
        <IconWrap>{iconLocation}</IconWrap>
        <div>current location</div>
      </CurrentLocBtn>
    );
  }
}

export default connect(
  null,
  { weatherFetch, forecastDaysFetch }
)(CurrentLocationBtn);
