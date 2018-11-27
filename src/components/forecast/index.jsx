import React from "react";
import styled from "styled-components";

import { PageTitle } from '../layout/Titles.jsx';
import Card from './Card';

import CloudIcon from '../../images/icons/weather/cloud.svg';
import RainIcon from '../../images/icons/weather/rain.svg';
import SunCloudIcon from '../../images/icons/weather/sun-cloud.svg';
import SunIcon from '../../images/icons/weather/sun.svg';

const ForecastSection = styled.div`
  margin-top: ${props => props.mTop};
  margin-bottom: ${props => props.mB};
`;

const Slider = styled.div`
  display: flex;
`;

const data = [
	{
		day: "tuesday",
		temp: "8°C",
		date: "November 6th",
		icon: RainIcon,
		feature: 'Rain',
		timesOfDay: [
			{
				icon: CloudIcon,
				time: 'Morning',
				temp: '8°C'
			},
			{
				icon: SunIcon,
				time: 'Day',
				temp: '10°C'
			},
			{
				icon: SunCloudIcon,
				time: 'Evening',
				temp: '10°C'
			},
			{
				icon: RainIcon,
				time: 'Night',
				temp: '5°C'
			}
		]
	},
	{
		day: "wednesday",
		temp: "15°C",
		date: "November 7th",
		icon: SunIcon,
		feature: 'Sunny',
		timesOfDay: [
			{
				icon: CloudIcon,
				time: 'Morning',
				temp: '8°C'
			},
			{
				icon: SunIcon,
				time: 'Day',
				temp: '10°C'
			},
			{
				icon: SunCloudIcon,
				time: 'Evening',
				temp: '10°C'
			},
			{
				icon: RainIcon,
				time: 'Night',
				temp: '5°C'
			}
		]
	},
	{
		day: "wednesday",
		temp: "15°C",
		date: "November 7th",
		icon: SunIcon,
		feature: 'Sunny',
		timesOfDay: [
			{
				icon: CloudIcon,
				time: 'Morning',
				temp: '8°C'
			},
			{
				icon: SunIcon,
				time: 'Day',
				temp: '10°C'
			},
			{
				icon: SunCloudIcon,
				time: 'Evening',
				temp: '10°C'
			},
			{
				icon: RainIcon,
				time: 'Night',
				temp: '5°C'
			}
		]
	},
	{
		day: "wednesday",
		temp: "15°C",
		date: "November 7th",
		icon: SunIcon,
		feature: 'Sunny',
		timesOfDay: [
			{
				icon: CloudIcon,
				time: 'Morning',
				temp: '8°C'
			},
			{
				icon: SunIcon,
				time: 'Day',
				temp: '10°C'
			},
			{
				icon: SunCloudIcon,
				time: 'Evening',
				temp: '10°C'
			},
			{
				icon: RainIcon,
				time: 'Night',
				temp: '5°C'
			}
		]
	},
	{
		day: "wednesday",
		temp: "15°C",
		date: "November 7th",
		icon: SunIcon,
		feature: 'Sunny',
		timesOfDay: [
			{
				icon: CloudIcon,
				time: 'Morning',
				temp: '8°C'
			},
			{
				icon: SunIcon,
				time: 'Day',
				temp: '10°C'
			},
			{
				icon: SunCloudIcon,
				time: 'Evening',
				temp: '10°C'
			},
			{
				icon: RainIcon,
				time: 'Night',
				temp: '5°C'
			}
		]
	}
];

export default (props) => {
	const slides = data.map((item, index) => {
		return (
			<Card info={item} key={index}/>
		)
	})
	return (
		<ForecastSection mTop={props.mTop} mB={props.mB}>
			<div className="container">
				<PageTitle>Day forecast</PageTitle>
				<Slider>{slides}</Slider>
			</div>
		</ForecastSection>
	)
}