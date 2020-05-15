import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./common/header";
import { GlobalStyle } from "./style";
import { IconfontStyle } from "./statics/iconfont/iconfont";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <IconfontStyle/>
        <Router>
          <div>
            <Header/>
            <Route path="/" exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}/>
            <Route path='/Login' component={Login}/>
            <Route path='/write' component={Write}/>
          </div>
        </Router>
      </Fragment>
    )
  }
}
