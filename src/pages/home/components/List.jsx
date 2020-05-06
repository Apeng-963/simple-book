import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import {
  ListItem,
  ListInfo,
  ListComment,
  ListCommentItem
} from "./../style";

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        {
          list.map(item => {
            return (
              <ListItem key={item.get("id")}>
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
            );
          })
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "articleList"])
  }
}

export default connect(mapStateToProps)(List);