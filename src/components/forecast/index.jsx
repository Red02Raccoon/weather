import React, {Component} from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { isEmpty } from "lodash";
import styled from "styled-components";

import { fetchRequest } from "../../actions/forecast-days";


import { PageTitle } from '../layout/Titles.jsx';
import Card from './Card';

import CloudIcon from '../../images/icons/weather/cloud.svg';
import RainIcon from '../../images/icons/weather/rain.svg';
import SunCloudIcon from '../../images/icons/weather/sun-cloud.svg';
import SunIcon from '../../images/icons/weather/sun.svg';
// import { connect } from "tls";




const ForecastSection = styled.div`
  margin-top: ${props => props.mTop};
  margin-bottom: ${props => props.mB};
`;

const SliderBlock = styled.div`
	position: relative;
	.forecast-slider {
		position: static;
		.slick-slide {
			&:not(:last-child) {
				margin-right: 20px;
			}
		}
		.slick-arrow {
			top: 2px;
		}
	}
`;


const data = [
	{
		day: "monday",
		temp: "23°C",
		date: "November 5th",
		icon: SunCloudIcon,
		feature: 'Cloud',
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

class Forecast extends Component {
	settings = {
		variableWidth: true,
		infinite: false,
		speed: 500,
		slidesToScroll: 1,
		arrows: true
	}

	componentDidMount() {
		this.props.fetchRequest(this.props.defaultCoords)
	}

	render() {
		const forecastDays = this.props.forecastDays.data;
		console.log(forecastDays)

		if (forecastDays && !isEmpty(forecastDays)) {


			const slides = forecastDays.map((item, index) => {
				return (
					<Card info={item} key={index}/>
				)
			});
	
	
			return (
				<ForecastSection mTop={this.props.mTop} mB={this.props.mB}>
					<div className="container">
						<SliderBlock>
							<PageTitle>Day forecast</PageTitle>
							<Slider {...this.settings} className="forecast-slider weather-slider">
								{slides}
							</Slider>
						</SliderBlock>
					</div>
				</ForecastSection>
			)
		}

		return null
	}
}

function mapStateToProps({forecastDays}) {
	return {forecastDays}
}

export default connect(
	mapStateToProps,
	{fetchRequest}
)(Forecast);