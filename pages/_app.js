import React from "react";
import App, { Container } from "next/app";
import { Provider } from 'react-redux';
// import initStore from '../lib/initRedux';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';
import "../styles/index.scss";
import Header from "../components/header";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Header />
        {children}
      </div>
    );
  }
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
