import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import styled from "styled-components";

import { fetchRequest } from "../../actions/weather-data";

import MoreInfoBlock from "./MoreInfoBlock";
import MainInfoBlock from "./MainInfoBlock";

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  min-height: 455px;
  position: relative;
  z-index: 1;
`;

const Block = styled.div`
  background-image: ${p => (p.bgImg ? `url(${p.bgImg})` : null)};
  margin-top: ${p => p.mTop};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    display: inline-block;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

class MainCard extends Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.location);
  }

  render() {
    const weatherInfo = this.props.weather;

    if (!isEmpty(weatherInfo)) {
      return (
        <Block bgImg={weatherInfo.mainImg} mTop={this.props.mTop}>
          <Container>
            <MainInfoBlock data={weatherInfo.mainInfo} />
            <MoreInfoBlock data={weatherInfo.moreInfo} />
          </Container>
        </Block>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather.data,
    location: state.location.data
  };
}

export default connect(
  mapStateToProps,
  { fetchRequest }
)(MainCard);
