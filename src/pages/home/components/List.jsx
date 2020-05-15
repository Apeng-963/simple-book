import React, { PureComponent, Fragment } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "./../store";
import {
  ListItem,
  ListInfo,
  ListComment,
  ListCommentItem,
  LoadMore
} from "./../style";

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/id=' + item.get('id')}>
                <ListItem>
                  {item.get("imgUrl")? <img className="pic" src={item.get("imgUrl")} alt=""/>: null}
                  <ListInfo style={item.get("imgUrl")? {width: "455px"}: {}}>
                    <h3 className="title">{item.get("title")}</h3>
                    <p className="desc">{item.get("desc")}</p>
                  </ListInfo>
                  <ListComment>
                    <ListCommentItem className="red">
                      <span className="iconfont icon">&#xe679;</span> {item.get("browse")}
                    </ListCommentItem>
                    <ListCommentItem>
                      {item.get("author")}
                    </ListCommentItem>
                    <ListCommentItem>
                      <span className="iconfont icon">&#xe6cd;</span> {item.get("comment")}
                    </ListCommentItem>
                    <ListCommentItem>
                      <span className="iconfont icon">&#xe65c;</span> {item.get("like")}
                    </ListCommentItem>
                  </ListComment>
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);