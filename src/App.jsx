import React, { Component, Fragment } from 'react';
import Header from "./common/header";
import { GlobalStyle } from "./style";
import { IconfontStyle } from "./statics/iconfont/iconfont";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <IconfontStyle/>
        <Header/>
      </Fragment>
    )
  }
}
