import React from "react";
import styled from "styled-components";

import {getIcon} from "../../utils";

import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy, WiDayShowers,  WiHail, WiDayThunderstorm, WiSnow, WiNightClear, WiNightAltCloudy ,WiNightAltCloudyHigh, WiNightAltRain} from "weather-icons-react";



const Card = styled.div`
  width: 310px;
  padding: 20px;
	font-size: 14px;	
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: 500;
	margin-bottom: 5px;
`;

const Day = styled.div`
	text-transform: uppercase;
`;

const Temp = styled.div`
	font-size: 20px;
`;

const Date = styled.div`
	margin-bottom: 25px;
  color: #9a9a9a;
`;

const Feature = styled.div`
	padding-bottom: 25px;
	margin-bottom: 20px;
	border-bottom: 1px solid #dcdcdc;
	display: flex;
	align-items: center;
`;

const FeatureImg = styled.img`
	width: ${props => props.widthIcon ? props.widthIcon : "24px"};
	height: ${props => props.heightIcon ? props.heightIcon : "24px"};
	margin-right: ${props => props.mR};
	display: block;
`;

const FeatureName = styled.div`
	font-size: 18px;
	margin-left: 15px;
`;

const Details = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Detail = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Time = styled.div`
	margin: 8px 0;
	&:first-letter {
    text-transform: uppercase;
	}
`;
const TempSmall = styled.div`
 color: #9a9a9a;
`;

export default ({info}) => {
	function getIcon(type) {
		var icon;
	
		if (type === "01d") icon = WiDaySunny
		if (type === "02d") icon = WiDayCloudy;
		if (type === "03d") icon = WiCloud;
		if (type === "04d" || type === "04n") icon = WiCloudy;
		if (type === "09d" || type === "09n") icon = WiDayShowers;
		if (type === "10d") icon = WiHail;
		if (type === "11d" || type === "11n") icon = WiDayThunderstorm;
		if (type === "13d" || type === "13n") icon = WiSnow;
	
		if (type === "01n") icon = WiNightClear
		if (type === "02n") icon = WiNightAltCloudy;
		if (type === "03n") icon = WiNightAltCloudyHigh;
	
		if (type === "10n") icon = WiNightAltRain;
	
		return icon
	}

	const icon = getIcon(info.iconCode)
  return <Card>
		<Title>
				<Day>{info.date.dayName}</Day>
				<Temp>{info.mainTemp}</Temp>
		</Title>
		<Date>{info.date.month}</Date>
		<Feature>
			{/* <FeatureImg src={info.icon} widthIcon="40px" heightIcon="40px" mR="20px"/> */}
			{icon({size: 40, color: "#7E9ED2"})}
			<FeatureName>{info.weatherType}</FeatureName>
		</Feature>
		<Details>
		{
			info.timeOfDayInfo.map((item, index)=>{
				const icon = getIcon(item.iconCode)
				return (
					<Detail key={index}>
						{/* <FeatureImg src={item.icon}/> */}
						{icon({size: 24, color: "#7E9ED2"})}

						<Time>{item.time}</Time>
						<TempSmall>{item.temp}</TempSmall>
					</Detail>
				)			
			})
		}
		</Details>
	</Card>;
};
