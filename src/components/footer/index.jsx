import React from "react";
import styled from "styled-components";

import Logo from "../logo";
import CurrentLocation from "../current-location";

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
      <div className="container">
        <FooterInner>
          <Logo />
          <CurrentLocation />
        </FooterInner>
      </div>
    </Footer>
  );
};
