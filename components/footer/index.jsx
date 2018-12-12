import React from "react";
import styled from "styled-components";

import { Container } from "../styled";
import Logo from "../../static/img/icons/logo.svg";

const Footer = styled.footer`
  background-color: #272e38;
  color: rgba(255, 255, 255, 0.5);
`;

const FooterInner = styled.div`
  padding: 30px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default () => {
  return (
    <Footer>
      <Container>
        <FooterInner>
          <Logo />
        </FooterInner>
      </Container>
    </Footer>
  );
};
