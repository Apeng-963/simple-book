import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import {
  TopicWrapper,
  TopicItem,
  More
} from "./../style";

class Topic extends PureComponent {
  render() {
    let { list } = this.props;
    return (
      <div>
        <TopicWrapper>
          {
            list.map(item => (
              <TopicItem key={item.get("id")}>
                <img
                  className="topic-pic"
                  src={item.get("imgUrl")}
                  alt=""
                />
                {item.get("title")}
              </TopicItem>
            ))
          }
          <More>更多热门专题&nbsp;&gt;</More>
        </TopicWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.getIn(["home", "topicList"])
  }
}

export default connect(mapStateToProps)(Topic);