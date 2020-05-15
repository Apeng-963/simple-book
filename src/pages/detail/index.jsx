import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreators } from "./store";
import { 
  DetailWrapper,
  Header,
  Content
} from "./style";

class Detail extends PureComponent {
  render() {
    let { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content
          dangerouslySetInnerHTML={{__html: content}}
        />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail() {
      dispatch(actionCreators.getDetail())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));