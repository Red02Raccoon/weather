import React, {Fragment} from "react";
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import App, { Container } from "next/app";

import initStore from '../config/store';

import {Wrapper,ContentContainer} from '../components/styled';
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/index.scss";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
			<Fragment>
				<Wrapper>
					<Header />
					<ContentContainer>
						{children}
					</ContentContainer>
				</Wrapper>
				<Footer/>
			</Fragment>
    );
  }
}

class MyApp extends App {
	static async getInitialProps ({Component, ctx}) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
	}
	
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
				<Provider store={store}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
