import React from "react";
import styled from "styled-components";

const MainCardInfo = styled.div`
  padding: 40px 10px 40px 0;
  color: #fff;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  @media (max-width: 1150px) {
    max-width: 50%;
    padding: 40px 10px 40px 15px;
  }
  @media (max-width: 750px) {
    max-width: none;
  }
  @media (max-width: 580px) {
    padding: 20px 15px;
  }
`;

const MainCardInfoDate = styled.div`
  font-size: 18px;
  line-height: 1.3em;
  font-weight: 500;
`;

const MainCardInfoType = styled.div`
  font-size: 30px;
  margin-top: 25px;
  &:first-letter {
    text-transform: uppercase;
  }
  @media (max-width: 580px) {
    font-size: 25px;
  }
`;

const MainCardInfoTemp = styled.div`
  font-size: 130px;
  line-height: 1em;
  font-weight: bold;
  margin: auto 0 0 -0.1em;
  @media (max-width: 580px) {
    font-size: 100px;
  }
`;

const MainCardInfoLocation = styled.div`
  font-size: 30px;
`;

export default ({ data }) => {
  return (
    <MainCardInfo>
      <MainCardInfoDate>
        {`${data.date.dayName}`} <br />{" "}
        {`${data.date.dayNumber} ${data.date.month} ${data.date.year}`}
      </MainCardInfoDate>
      <MainCardInfoType>{data.weatherType}</MainCardInfoType>
      <MainCardInfoTemp>{data.temp}</MainCardInfoTemp>
      <MainCardInfoLocation>{`${data.city}, ${
        data.country
      }`}</MainCardInfoLocation>
    </MainCardInfo>
  );
};
