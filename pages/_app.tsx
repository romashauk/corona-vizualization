import App, { Container } from 'next/app';
import Head from 'next/head';
import '../src/styling/app.global.scss';
import 'antd/dist/antd.css';
import UserContext from '../src/components/UserContext/UserContext';

class CoronaApp extends App {
  state = {
    isLoading: false
  };

  onClick = () => {
    this.setState({
      ...this.state,
      isLoading: !this.state.isLoading
    });
  };

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider value={{ isLoading: this.state.isLoading }}>
        <Head>
          <title>COVID - 19</title>
          <link rel="shortcut icon" href="https://www.covidvisualizer.com/assets/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}

export default CoronaApp;
