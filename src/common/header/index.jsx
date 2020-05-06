import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SerachInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from "./style";

class Header extends Component {

  getListArea = () => {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>
              {newList[i]}
            </SearchInfoItem>
          )
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SerachInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
              换一批
            </SearchInfoSwitch>
          </SerachInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { getListArea } = this;
    const { focused, list, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">
            <span className="iconfont">&#xe88c;</span> 首页
          </NavItem>
          <NavItem className="left">
            <span className="iconfont">&#xe608;</span> 下载App
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}//什么时候应用样式(show发生改变时应用样式)
              timeout={300}//动画执行多少ms
              classNames="slide"//css样式的前缀
            >
              <NavSearch
                className={focused ? "focused": ""}
                onFocus={() => {handleInputFocus(list)}}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span
              className={focused ? "focused iconfont zoom": "iconfont zoom"}
            >
              &#xe60c;
            </span>
            {getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <span className="iconfont">&#xe6e5;</span>
            &nbsp;
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // focused: state.get("header").get("focused")
    focused: state.getIn(["header", "focused"]), //等价写法
    // 两种写法均可
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {          // [^0-9] = \D 非数字部分替换为空
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);//转换为Number类型
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);