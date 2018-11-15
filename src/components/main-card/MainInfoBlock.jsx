import React from "react";
import styled from "styled-components";

const MainCardInfo = styled.div`
  padding: 40px 0 40px 20px;
  color: #fff;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainCardInfoDate = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const MainCardInfoType = styled.div`
  font-size: 30px;
  margin-top: 25px;
`;

const MainCardInfoTemp = styled.div`
  font-size: 130px;
  line-height: 1em;
  font-weight: bold;
  margin: auto 0 0 -0.1em;
`;

const MainCardInfoLocation = styled.div`
  font-size: 30px;
`;

export default ({ data }) => {
  return (
    <MainCardInfo>
      <MainCardInfoDate>
        {`${data.day}`} <br /> {`${data.month} ${data.year}`}
      </MainCardInfoDate>
      <MainCardInfoType>{data.weatherType}</MainCardInfoType>
      <MainCardInfoTemp>{data.temperature}</MainCardInfoTemp>
      <MainCardInfoLocation>{data.location}</MainCardInfoLocation>
    </MainCardInfo>
  );
};
