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
    height: 240px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 240px;
  background: #0099ff;
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