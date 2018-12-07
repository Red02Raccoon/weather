import React from "react";
import styled from "styled-components";
import { string, func } from "prop-types";

export const Button = styled.button`
  display: inline-block;
  position: relative;
  background-color: transparent;
  opacity: 0.9;
  transition: 0.3s;
  cursor: ${p => (p.inactive ? "default" : "pointer")};
  margin: ${p => (p.margin ? p.margin : 0)};
  width: ${p => p.width || "28px"};
  height: ${p => p.height || "28px"};
  &:hover {
    opacity: 1;
  }
  svg {
    display: block;
  }
  svg path {
    fill: #fff;
    transition: fill 0.3s;
  }
  &:hover {
    color: #ee3129;
    svg path {
      fill: #ee3129;
    }
  }
`;

const IconBtn = ({ children, onClick, width, height, className, title }) => {
  return (
    <Button
      onClick={onClick}
      width={width}
      height={height}
      className={className}
      title={title}
    >
      {children}
    </Button>
  );
};

IconBtn.propTypes = {
  height: string,
  width: string,
  className: string,
  title: string,
  onClick: func
};

export default IconBtn;
