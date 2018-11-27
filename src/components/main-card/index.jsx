import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import bg from "../../images/bg.jpg";
import MoreInfoBlock from "./MoreInfoBlock";
import MainInfoBlock from "./MainInfoBlock";

const data = {
  moreInfo: [
    {
      title: "Local Time",
      value: "11:20 AM"
    },
    {
      title: "Feels like",
      value: "10C"
    },
    {
      title: "Dew point",
      value: "3C"
    },
    {
      title: "Humidity",
      value: "55%"
    },
    {
      title: "Wind speed",
      value: "11 kmph NW"
    },
    {
      title: "Pressure",
      value: "1020 mbar"
    }
  ],
  mainInfo: {
    day: "Monday",
    month: "November",
    year: "2018",
    weatherType: "Partly cloudy",
    temperature: "12C",
    location: "Dnepr, Ukraine"
  }
};

const MainCardContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  min-height: 455px;
  position: relative;
  z-index: 1;
  @media (max-width: 1120px) {
    padding: 0 0 0 15px;
  }
`;

const MainCardBlock = styled.div`
  background-image: ${props => (props.bgImg ? `url(${props.bgImg})` : "")};
  margin-top: ${props => props.mTop};
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
  render() {
    // console.log(this.props);
    return (
      <MainCardBlock bgImg={bg} mTop={this.props.mTop}>
        <MainCardContainer>
          <MainInfoBlock data={data.mainInfo} />
          <MoreInfoBlock data={data.moreInfo} />
        </MainCardContainer>
      </MainCardBlock>
    );
  }
}

function mapStateToProps(state) {
  return {
    mainCard: state.mainCard.data
  };
}

export default connect(mapStateToProps)(MainCard);
