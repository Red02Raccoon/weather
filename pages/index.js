import styled from "styled-components";

import MainCard from '../components/main-card';
import Forecast from '../components/forecast';

const Index = props => {
  return (
    <div>
			<MainCard/>
			<Forecast mTop="35px" mB="55px"/>
    </div>
  );
};

export default Index;
