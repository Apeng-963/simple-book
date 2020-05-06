import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./common/header";
import { GlobalStyle } from "./style";
import { IconfontStyle } from "./statics/iconfont/iconfont";
import Home from "./pages/home";
import Detail from "./pages/detail";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <IconfontStyle/>
        <Header/>
        <Router>
          <div>
            <Route path="/" exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}/>
          </div>
        </Router>
      </Fragment>
    )
  }
}
