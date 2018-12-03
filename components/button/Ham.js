import React from "react";
import styled from "styled-components";
import { string, func } from "prop-types";
import { Button } from "./IconBtn";

const StyledBtn = styled(Button)`
  width: 42px;
  height: 42px;
  border-radius: 3px;
  color: #0b2239;
  position: relative;
  &:hover {
    span:nth-of-type(1) {
      margin: -6px 0 0;
    }
    span:nth-of-type(3) {
      margin: 6px 0 0;
    }
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 250ms ease-in-out;
    display: block;
    opacity: 1;
    width: 30px;
    height: 3px;
    background-color: white;
  }
  span:nth-of-type(1) {
    margin: -9px 0 0;
  }
  span:nth-of-type(3) {
    margin: 9px 0 0;
  }
`;

const Ham = ({ onClick, width, height, className, title }) => {
  return (
    <StyledBtn
      onClick={onClick}
      width={width}
      height={height}
      className={className}
      title={title}
    >
      <span />
      <span />
      <span />
    </StyledBtn>
  );
};

Ham.propTypes = {
  height: string,
  width: string,
  className: string,
  onClick: func
};

export default Ham;
