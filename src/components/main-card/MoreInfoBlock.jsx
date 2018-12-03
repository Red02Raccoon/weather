import React, { Component } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";

const MoreInfoBlockContainer = styled.div`
  position: relative;
	width: 50%;
	height: 100%;
  @media (min-width: 1121px) {
    width: 35%;
  }
  @media (max-width: 750px) {
    position: absolute;
    transform: translate(100%, 0);
    top: 0;
    right: 70px;
    width: 100vw
    transition: right 0.3s;

    padding-left: 25px;
    &.open {
      right: 100%;
    }
  }
`;

const MoreInfoBlockInner = styled.div`
  padding: 30px 20px 30px 20px;
  min-height: 100%;
  @media (min-width: 1121px) {
    padding: 30px 20px 30px 70px;
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
  }
  @media (max-width: 1120px) {
    background-color: rgba(75, 82, 92, 0.5);
  }
  @media (max-width: 750px) {
    padding: 35px 40px;
    transition: background-color 0.3s;
    max-height: 100%;
    overflow-y: scroll;
    &.open {
      background-color: rgba(75, 82, 92, 0.9);
    }
  }
  @media (max-width: 365px) {
    padding: 30px;
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
  @media (max-width: 750px) {
    &:not(:last-child) {
      padding: 0 10px 25px;
      margin-bottom: 25px;
    }
  }
`;

const ArrowCircleButton = styled.button`
  width: 45px;
  height: 45px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 5px 25px 2px rgba(0, 0, 0, 0.07);
  }
  &.open {
    transform: translate(0, -50%) rotate(180deg);
  }
`;

const ArrowIconWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 20px;
  margin-left: -2px;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: rgba(75, 82, 92, 0.9);
    }
  }
`;

const arrowIcon = (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="9.7px"
    height="18px"
    viewBox="0 0 9.7 18"
  >
    <path
      d="M9.7,17.3c0,0.2-0.1,0.4-0.2,0.5c-0.3,0.3-0.8,0.3-1.1,0L0.2,9.5c-0.3-0.3-0.3-0.8,0-1.1l8.3-8.3c0.3-0.3,0.8-0.3,1.1,0
	s0.3,0.8,0,1.1L1.8,9l7.7,7.7C9.7,16.9,9.7,17.1,9.7,17.3z"
    />
  </svg>
);

class MoreInfoBlock extends Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  render() {
    return (
      <MoreInfoBlockContainer className={this.state.isOpen ? "open" : ""}>
        <MediaQuery maxWidth={750}>
          <ArrowCircleButton
            onClick={this.handleClick}
            className={this.state.isOpen ? "open" : ""}
          >
            <ArrowIconWrap>{arrowIcon}</ArrowIconWrap>
          </ArrowCircleButton>
        </MediaQuery>

        <MoreInfoBlockInner className={this.state.isOpen ? "open" : ""}>
          <MoreInfoList>
            {this.props.data.map((item, index) => {
              return (
                <MoreInfoItem key={index}>
                  <span>{item.title}</span>
                  <span className="value">{item.value}</span>
                </MoreInfoItem>
              );
            })}
          </MoreInfoList>
        </MoreInfoBlockInner>
      </MoreInfoBlockContainer>
    );
  }
}

export default MoreInfoBlock;
