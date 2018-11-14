import React from "react";
import styled from "styled-components";

const MainCardLeft = styled.div`
  padding: 40px 0 40px 20px;
`;

const MainCardInfo = styled.div`
  color: #fff;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  height: 100%;
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

export default props => {
  return (
    <MainCardLeft>
      <MainCardInfo>
        <MainCardInfoDate>
          <div>
            Monday <br /> November 2018
          </div>
        </MainCardInfoDate>
        <MainCardInfoType>Partly cloudy</MainCardInfoType>
        <MainCardInfoTemp>12C</MainCardInfoTemp>
        <MainCardInfoLocation>Dnepr, Ukraine</MainCardInfoLocation>
      </MainCardInfo>
    </MainCardLeft>
  );
};
