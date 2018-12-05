import React from "react";
import styled from "styled-components";

import Icon from "../../containers/Icon.js";

const Card = styled.div`
  padding: 20px;
  font-size: 14px;
  @media (max-width: 380px) {
    padding: 0;
  }
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

const DateInfo = styled.div`
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

const FeatureName = styled.div`
  font-size: 18px;
  margin-left: 15px;
  &:first-letter {
    text-transform: uppercase;
  }
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

export default ({ info }) => {
  const details = info.timeOfDayInfo.map((item, index) => {
    return (
      <Detail key={index}>
        {Icon({ type: info.iconCode, size: 24, color: "#7E9ED2" })}
        <Time>{item.time}</Time>
        <TempSmall>{item.temp}</TempSmall>
      </Detail>
    );
  });

  return (
    <Card>
      <Title>
        <Day>{info.date.dayName}</Day>
        <Temp>{info.mainTemp}</Temp>
      </Title>
      <DateInfo>{`${info.date.month}, ${info.date.dayNumber}th`}</DateInfo>
      <Feature>
        {Icon({ type: info.iconCode, size: 40, color: "#7E9ED2" })}
        <FeatureName>{info.weatherType}</FeatureName>
      </Feature>
      <Details>{details}</Details>
    </Card>
  );
};
