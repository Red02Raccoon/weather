import React, { Fragment } from "react";

// import {
//   WiDaySunny,
//   WiDayCloudy,
//   WiCloud,
//   WiCloudy,
//   WiDayShowers,
//   WiHail,
//   WiDayThunderstorm,
//   WiSnow,
//   WiNightClear,
//   WiNightAltCloudy,
//   WiNightAltCloudyHigh,
//   WiNightAltRain,
// 	WiHorizonAlt
// } from "weather-icons-react";

function getIcon(type) {
  switch (type) {
    case "01d":
      return WiDaySunny;
    case "02d":
      return WiDayCloudy;
    case "03d":
      return WiCloud;
    case "04d":
    case "04n":
      return WiCloudy;
    case "09d":
    case "09n":
      return WiDayShowers;
    case "10d":
      return WiHail;
    case "11d":
    case "11n":
      return WiDayThunderstorm;
    case "13d":
    case "13n":
      return WiSnow;
    case "01n":
      return WiNightClear;
    case "02n":
      return WiNightAltCloudy;
    case "03n":
      return WiNightAltCloudyHigh;
    case "10n":
      return WiNightAltRain;
    default:
      return WiHorizonAlt;
  }
}

export default ({ type, ...settings }) => {
  // return <Fragment>{getIcon(type)({ ...settings })}</Fragment>;
};
