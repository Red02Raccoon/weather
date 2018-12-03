import React from "react";
import styled from "styled-components";

import { Container } from "../styled";
import Search from "../search";
import Ham from "../button/Ham";

import RefreshInfo from "../refresh-info";
import CurrentLocation from "../current-location";

const Header = styled.header`
  height: 66px;
  background-color: #272e38;
`;

const Content = styled.div`
  height: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Start = styled.div``;
const Middle = styled.div`
  width: 50%;
  @media (max-width: 991px) {
    width: 60%;
  }
  @media (max-width: 767px) {
    width: 70%;
  }
`;
const End = styled.div``;

const CurrentLocationBtn = styled.div`
  margin-right: 15px;
  display: inline-block;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Container h="100%">
        <Content>
          <Start>
            <Ham title="open menu" />
          </Start>
          <Middle>
            <Search />
          </Middle>
          <End>
            <CurrentLocationBtn>
              <CurrentLocation />
            </CurrentLocationBtn>
            <RefreshInfo />
          </End>
        </Content>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
