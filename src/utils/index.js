export function getDateFromMs(dateMs) {
  let dateString = new Date(dateMs);
  let formattedDate = {};

  formattedDate = {
		year: dateString.getFullYear(),
		dayNumber:	dateString.getDate(),
		dayName:	getDayName(dateString.getDay()),
		month: getMonthName(dateString.getMonth())
  };

  return formattedDate;
}

export function getTimeFromMs(dateMs) {
  let dateString = new Date(dateMs);
  let hour = dateString.getHours();
  let minutes = formatDate(dateString.getMinutes());

  return `${hour}:${minutes}`
}

export function formatDate(num) {
  return num >= 0 && num < 10 ? "0" + num : num;
}

export function getMonthName(index) {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[index]
}

export function getDayName(index) {
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return days[index]
}

export function filterInfoForMainCard(data) {
	return {
		mainInfo: {
			date: getDateFromMs(data.dt*1000),
			weatherType: data.weather[0].description,
			temp: `${Math.round(data.main.temp)}°C`,
			city: data.name,
			country: data.sys.country
		},
		moreInfo: [
			{
				title: "Time of info",
				value: `${getTimeFromMs(data.dt*1000)}`
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
				value: `${getTimeFromMs(data.sys.sunrise*1000)}`,
			},
			{
				title: "Sunset",
				value: `${getTimeFromMs(data.sys.sunset*1000)}`,
			}
		]
	};
}