import React from "react";
import styled from "styled-components";

import logo from "../../images/icons/logo.jpg";

const Logo = styled.div`
  max-width: 100px;
`;

const LogoImg = styled.img``;

export default () => {
  return (
    <Logo>
      <LogoImg src={logo} />
    </Logo>
  );
};
