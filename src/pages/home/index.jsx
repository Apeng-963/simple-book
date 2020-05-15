import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from "./store";

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from "./style";

class Hemo extends PureComponent {
  render() {
    let { handleScrollTop } = this;
    let { showScroll } = this.props;
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
        { showScroll ? <BackTop onClick={handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  handleScrollTop = () => {
    let timeout = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(timeout);
      } else {
        window.scrollTo(0, window.scrollY - 50);
      }
    }, 10);
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents = () => {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(["home", "showScroll"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 200) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Hemo);