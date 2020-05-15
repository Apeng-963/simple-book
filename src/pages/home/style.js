import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-image {
    width: 625px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  margin-left: -18px;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  margin: 0 0 18px 18px;
  padding-right: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  line-height: 32px;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin: 0 10px 10px 0;
  }
`;

export const More = styled.div`
  float: left;
  height: 32px;
  margin-left: 18px;
  line-height: 32px;
  font-size: 13px;
  color: #777777;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    float: right;
    height: 100px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const ListInfo = styled.div`
  float: left;
  padding-right: 20px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    cursor: pointer;
  }
  .title:hover {
    text-decoration: underline;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999999;
  }
`;

export const ListComment = styled.div`
  float: left;
  margin-top: 10px;
`;

export const ListCommentItem = styled.span`
  margin-right: 10px;
  font-size: 12px;
  color: #b4b4b4b4;
  cursor: pointer;
  &:hover {
    color: #777777;
  }
  .icon {
    font-size: 12px;
  }
  &.red {
    color: #ea6f5a;
  }
`;

export const RecommendWrapper = styled.div`
  width: 280px;
  margin: 25px 0 12px 0;
`;

export const RecommendItem = styled.div`
  width:280px;
  height: 50px;
  margin-bottom: 8px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  cursor: pointer;
`;

export const WriterWrapper = styled.div`
  overflow: hidden;
  width: 278px;
  height: 82px;
  padding: 10px 22px;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  line-height: 300px;
  text-align: center;
  color: #333333;
  cursor: pointer;
  .scan {
    display: block;
    float: left;
    width: 60px;
    margin-right: 10px;
  }
`;

export const WriterInfo = styled.div`
  float: left;
  margin-top: 6px;
  line-height: 1.5em;
  .title {
    font-size: 15px;
    color: #333333;
  }
  .content {
    font-size: 12px;
    color: #999999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  border-radius: 20px;
  background: #a5a5a5;
  line-height: 40px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  border: 1px solid #cccccc;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;