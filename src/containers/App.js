import React, { Fragment, Component } from "react";

import MainCard from "../components/main-card";
import Forecast from "../components/forecast";
import Footer from "../components/footer";

class App extends Component {
	defaultCoords = {
		lat: 51.5073,
		lon: -0.1277
	}

  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <MainCard mTop="65px" defaultCoords={this.defaultCoords}/>
					<Forecast mTop="35px" mB="55px" defaultCoords={this.defaultCoords}/>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
