import React, { Fragment, Component } from "react";

import MainCard from "../components/main-card";
import Forecast from "../components/forecast";
import Footer from "../components/footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <MainCard mTop="65px" />
					<Forecast mTop="35px" mB="55px"/>
        </div>
        <Footer />
        <div>some tag
          
        </div>
      </Fragment>
    );
  }
}

export default App;
