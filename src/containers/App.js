import React, { Fragment, Component } from "react";

import { Wrapper } from "../components/styled";
import Header from "../components/header";
import MainCard from "../components/main-card";
import Forecast from "../components/forecast";
import Footer from "../components/footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Wrapper>
          <MainCard />
          <Forecast mTop="35px" mB="55px" />
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
