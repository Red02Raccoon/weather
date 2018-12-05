import React, { Component } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import IconBtn from "../button/IconBtn";
import RefreshInfo from "../refresh-info";
import { ReactComponent as ArrowIcon } from "../../images/icons/arrow.svg";

const Container = styled.div`
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

const BlockInner = styled.div`
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

const List = styled.ul`
  position: relative;
  z-index: 1;
  font-size: 16px;
  color: #fff;
`;

const Item = styled.li`
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
      padding: 0 10px 20px;
      margin-bottom: 20px;
    }
  }
`;

const ArrowCircleButton = styled(IconBtn)`
  background-color: #fff;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 0;
  svg {
    path {
      fill: rgba(75, 82, 92, 0.9);
    }
  }
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
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 20px;
  margin-left: -2px;
`;

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
      <Container className={this.state.isOpen ? "open" : ""}>
        <MediaQuery maxWidth={750}>
          <ArrowCircleButton
            width="45px"
            height="45px"
            title="open details"
            onClick={this.handleClick}
            className={this.state.isOpen ? "open" : ""}
          >
            <ArrowIconWrap>
              <ArrowIcon />
            </ArrowIconWrap>
          </ArrowCircleButton>
        </MediaQuery>

        <BlockInner className={this.state.isOpen ? "open" : ""}>
          <List>
            {this.props.data.map((item, index) => {
              return (
                <Item key={index}>
                  <span>{item.title}</span>
                  <span className="value">{item.value}</span>
                </Item>
              );
            })}
            <MediaQuery maxWidth={750}>
              <Item>
                <span>Refresh info</span>
                <span className="value">
                  <RefreshInfo />
                </span>
              </Item>
            </MediaQuery>
          </List>
        </BlockInner>
      </Container>
    );
  }
}

export default MoreInfoBlock;
