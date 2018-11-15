import React, { Fragment, Component } from "react";

import MainCard from "../components/main-card";
import Footer from "../components/footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <MainCard mTop="65px" />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
