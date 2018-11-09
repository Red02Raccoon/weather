import React from "react";
import styled from "styled-components";

import bg from "../../images/bg.jpg";

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
  }
];

const MainCardContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  min-height: 455px;
`;

const MainCardBlock = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: ${props => props.mTop};
  overflow: hidden;
`;

const MainCardLeft = styled.div``;
const MainCardRight = styled.div`
  position: relative;
  max-width: 480px;
  width: 100%;
  padding: 30px 0 30px 90px;
  &:after {
    content: "";
    display: inline-block;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(75, 82, 92, 0.5);
  }
`;

const MoreInfoList = styled.ul`
  position: relative;
  z-index: 1;
  font-size: 16px;
  color: #fff;
`;

const MoreInfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  &:not(:last-child) {
    padding: 0 10px 30px;
    margin-bottom: 30px;
    border-bottom: 3px solid rgba(100%, 100%, 100%, 0.2);
  }
  .value {
    font-weight: 500;
  }
`;

const MainCard = props => {
  return (
    <MainCardBlock mTop={props.mTop}>
      <MainCardContainer>
        <MainCardLeft>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae in
          ad quae mollitia. Similique labore maxime eveniet fugiat, alias cum
          esse illo enim, ipsa quos, quaerat quas rem aperiam eaque?
        </MainCardLeft>
        <MainCardRight>
          <MoreInfoList>
            {data.map((item, index) => {
              return (
                <MoreInfoItem>
                  <span className="title">{item.title}</span>
                  <span className="value">{item.value}</span>
                </MoreInfoItem>
              );
            })}
          </MoreInfoList>
        </MainCardRight>
      </MainCardContainer>
    </MainCardBlock>
  );
};

export default MainCard;
