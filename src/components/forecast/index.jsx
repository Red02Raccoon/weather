import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { isEmpty } from "lodash";
import styled from "styled-components";

import { fetchRequest } from "../../actions/forecast-days";
import { Container } from "../styled";

import { PageTitle } from "../styled";
import Card from "./Card";

const ForecastSection = styled.div`
  margin-top: ${props => props.mTop};
  margin-bottom: ${props => props.mB};
`;

const SliderBlock = styled.div`
  position: relative;
  .forecast-slider {
    position: static;
    .slick-slide {
      width: 310px;
      &:not(:last-child) {
        margin-right: 20px;
      }
      @media (max-width: 380px) {
        width: 275px;
      }
    }
    .slick-arrow {
      top: 2px;
    }
  }
`;

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.settings = {
      variableWidth: true,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      arrows: true,
      draggable: false
    };
  }

  componentDidMount() {
    this.props.fetchRequest(this.props.location);
  }

  render() {
    const forecastDays = this.props.forecastDays.data;

    if (forecastDays && !isEmpty(forecastDays)) {
      const slides = forecastDays.map((item, index) => {
        return <Card info={item} key={index} />;
      });

      return (
        <ForecastSection mTop={this.props.mTop} mB={this.props.mB}>
          <Container>
            <SliderBlock>
              <PageTitle pR="70px">Day forecast</PageTitle>
              <Slider
                {...this.settings}
                className="forecast-slider weather-slider"
              >
                {slides}
              </Slider>
            </SliderBlock>
          </Container>
        </ForecastSection>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    forecastDays: state.forecastDays,
    location: state.location.data
  };
}

export default connect(
  mapStateToProps,
  { fetchRequest }
)(Forecast);
