export function debounce(func, delay) {
  let timerId;
  return function(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(...args);
      timerId = null;
    }, delay);
  };
}

export function getDateFromMs(dateMs) {
  let dateString = new Date(dateMs),
    formattedDate = {};

  formattedDate = {
    year: dateString.getFullYear(),
    dayNumber: dateString.getDate(),
    dayName: getDayName(dateString.getDay()),
    month: getMonthName(dateString.getMonth())
  };

  return formattedDate;
}

export function getTimeFromMs(dateMs) {
  let dateString = new Date(dateMs);
  let hour = dateString.getHours();
  let minutes = formatDate(dateString.getMinutes());

  return `${hour}:${minutes}`;
}

export function formatDate(num) {
  return num >= 0 && num < 10 ? "0" + num : num;
}

export function getMonthName(index) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[index];
}

export function getDayName(index) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[index];
}

// Data conversion from API.
export function filterInfoForMainCard(data) {
  return {
    mainInfo: {
      date: getDateFromMs(data.dt * 1000),
      weatherType: data.weather[0].description,
      temp: `${Math.round(data.main.temp)}°C`,
      city: data.name,
      country: data.sys.country
    },
    moreInfo: [
      {
        title: "Time of info",
        value: `${getTimeFromMs(data.dt * 1000)}`
      },
      {
        title: "Humidity",
        value: `${data.main.humidity} %`
      },
      {
        title: "Pressure",
        value: `${data.main.pressure} hPa`
      },
      {
        title: "Wind speed",
        value: `${Math.round(data.wind.speed)} mps`
      },
      {
        title: "Sunrise",
        value: `${getTimeFromMs(data.sys.sunrise * 1000)}`
      },
      {
        title: "Sunset",
        value: `${getTimeFromMs(data.sys.sunset * 1000)}`
      }
    ]
  };
}

export function filterInfoForecastDays(data) {
  let statisticByDays = getStatisticByDays(data.list),
    formattedInfo;

  formattedInfo = statisticByDays.map(item => {
    let formattedDayInfo = {
        date: getDateFromMs(item.date_0 * 1000),
        timeOfDayInfo: []
      },
      infoByHours = item.infoByHours;

    for (let i = 0; i < infoByHours.length; i++) {
      let currentHour = infoByHours[i],
        type;

      if (currentHour.dt_txt.search(/00:00:00/) > 0) {
        type = "night";
      } else if (currentHour.dt_txt.search(/09:00:00/) > 0) {
        type = "morning";
      } else if (currentHour.dt_txt.search(/12:00:00/) > 0) {
        type = "day";
        formattedDayInfo.mainTemp = `${Math.round(currentHour.main.temp)}°C`;
        formattedDayInfo.weatherType = currentHour.weather[0].description;
        formattedDayInfo.iconCode = currentHour.weather[0].icon;
      } else if (currentHour.dt_txt.search(/18:00:00/) > 0) {
        type = "evening";
      } else {
        continue;
      }

      formattedDayInfo.timeOfDayInfo.push(getInfoTimesOfDay(currentHour, type));
    }

    return formattedDayInfo;
  });

  return formattedInfo;
}

function getInfoTimesOfDay(info, type) {
  return {
    time: type,
    temp: `${Math.round(info.main.temp)}°C`,
    iconCode: info.weather[0].icon,
    typeWeather: info.weather[0].main,
    desc: info.weather[0].description
  };
}

function getMatches(list, exp) {
  var arr = [];

  for (var i = 0; i < list.length; i++) {
    if (list[i].dt_txt.search(exp) > 0) {
      arr.push(i);
    }
  }

  return arr;
}

function getStatisticByDays(list) {
  var begginingRanges = getMatches(list, /00:00:00/),
    info = [];

  for (var i = 0; i < begginingRanges.length; i++) {
    var range = i;
    var slice = list.slice(begginingRanges[range], begginingRanges[++range]);

    if (slice.length === 8) {
      info.push({
        date_0: slice[0].dt,
        infoByHours: slice
      });
    }
  }

  return info;
}
