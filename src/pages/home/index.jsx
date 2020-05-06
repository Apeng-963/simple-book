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
            src="https://upload-images.jianshu.io/upload_images/1202579-b6e17367e11cdc3b?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
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
