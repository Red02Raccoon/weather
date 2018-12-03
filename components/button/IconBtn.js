import React from "react";
import styled from "styled-components";
import { string, func } from "prop-types";

export const Button = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  display: inline-block;
  position: relative;
  background-color: transparent;
  opacity: 0.9;
  transition: 0.3s;
  cursor: ${p => (p.inactive ? "default" : "pointer")};
  width: ${p => p.width || "28px"};
  height: ${p => p.height || "28px"};
  &:hover {
    opacity: 1;
  }
  svg {
    display: block;
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
