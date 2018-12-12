import React from "react";
import styled from "styled-components";

import logo from "../../images/icons/logo.svg";

const Logo = styled.div`
  max-width: 100px;
  cursor: pointer;
`;

const LogoImg = styled.img``;

export default () => {
  return (
    <Logo title="logo">
      <LogoImg src={logo} />
    </Logo>
  );
};
