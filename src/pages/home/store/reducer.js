
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "手绘",
      imgUrl: "https://upload-images.jianshu.io/upload_images/12081621-b05fe51264d22dcb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 2,
      title: "社会热点",
      imgUrl: "https://upload-images.jianshu.io/upload_images/18428859-45ae4e678de02148.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 3,
      imgUrl: "https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      title: "简书电影"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default: return state;
  }
}