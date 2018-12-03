import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1150px;
  padding: 0 15px;
  margin: 0 auto;
  height: ${p => (p.h ? p.h : "auto")};
`;
