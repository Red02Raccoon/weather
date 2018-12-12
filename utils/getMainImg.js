import thunderstorm from "../static/img/weather/thunderstorm.jpg";
import drizzle from "../static/img/weather/drizzle.jpg";
import rain from "../static/img/weather/rain.jpg";
import snow from "../static/img/weather/snow.jpg";
import fog from "../static/img/weather/fog.jpg";
import squalls from "../static/img/weather/squalls.jpg";
import clouds from "../static/img/weather/clouds.jpg";
import clear from "../static/img/weather/clear.jpeg";

export default function getMainImg(idType) {
  let type;

  let info = {
    thunderstorm: thunderstorm,
    drizzle: drizzle,
    rain: rain,
    snow: snow,
    fog: fog,
    squalls: squalls,
    clouds: clouds,
    clear: clear
  };

  if (idType >= 200 && idType <= 232) {
    type = "thunderstorm";
  } else if (idType >= 300 && idType <= 321) {
    type = "drizzle";
  } else if (idType >= 500 && idType <= 531) {
    type = "rain";
  } else if (idType >= 600 && idType <= 622) {
    type = "snow";
  } else if (idType >= 700 && idType <= 762) {
    type = "fog";
  } else if (idType === 771 || idType <= 781) {
    type = "squalls";
  } else if (idType >= 801 && idType <= 804) {
    type = "clouds";
  } else {
    type = "clear";
  }

  return info[type];
}
