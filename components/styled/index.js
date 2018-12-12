import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1150px;
  padding: 0 15px;
  margin: 0 auto;
  height: ${p => (p.h ? p.h : "auto")};
`;

export const ContentContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
`;

export const PageTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #222222;
  margin-bottom: ${props => (props.mB ? props.mB : "35px")};
  padding-right: ${props => (props.pR ? props.pR : "")};
  @media (max-width: 580px) {
    font-size: 28px;
  }
`;