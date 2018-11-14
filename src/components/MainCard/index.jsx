import React, { Component } from "react";
import styled from "styled-components";

import bg from "../../images/bg.jpg";
import MoreInfoBlock from "./MoreInfoBlock";
import MainInfoBlock from "./MainInfoBlock";

const data = [
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
];

const MainCardContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  min-height: 455px;
  position: relative;
  z-index: 1;
`;

const MainCardBlock = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: ${props => props.mTop};
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
    return (
      <MainCardBlock mTop={this.props.mTop}>
        <MainCardContainer>
          <MainInfoBlock data={data} />

          <MoreInfoBlock data={data} />
        </MainCardContainer>
      </MainCardBlock>
    );
  }
}

export default MainCard;
