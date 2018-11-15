import React, { Component } from "react";
import styled from "styled-components";

import MainCard from "../components/main-card";

const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <MainCard mTop="65px" />
        </Container>
      </div>
    );
  }
}

export default App;
