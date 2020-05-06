import React, { Component } from 'react';
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from "./style";

export default class Hemo extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-image"
            src="https://upload.jianshu.io/admin_banners/web_images/4942/f7e1fedab8f5e44e62700ceb873a2d0d71d25140.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic/>
          <List/>
        </HomeLeft>
        
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
}
