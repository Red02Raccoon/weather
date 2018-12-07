import React from "react";
import { string } from "prop-types";
import styled, { css } from "styled-components";

import SpinerSvg from "../../static/img/icons/preloader.svg";

const Spinner = styled.div`
  display: inline-block;
  position: absolute;
  width: ${p => p.width || "24px"};
  height: ${p => p.height || "24px"};

  ${p => {
    if (p.position && p.position === "rc") {
      return css`
        right: ${p.right || 0};
        top: 50%;
        transform: translateY(-50%);
      `;
    }
  }}
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Preloader = props => {
  return (
    <Spinner {...props}>
      <SpinerSvg />
    </Spinner>
  );
};

Preloader.propTypes = {
  position: string
};

export default Preloader;
