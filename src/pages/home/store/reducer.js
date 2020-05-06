
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
  ],
  articleList: [
    {
      id: 1,
      title: "不幸的婚姻",
      desc: "昨天给家里打电话，我妈跟我说：“你知道吗？你三叔家的那个哥哥跟他媳妇可能过不下去了。今天下午，我去菜园子的时候，正好碰到了你三婶子。她跟我说女...",
      imgUrl: "https://upload-images.jianshu.io/upload_images/16623634-dd2b82b615b125ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      browse: "193.6",
      author: "一枚老僧",
      comment: "193",
      like: "1342"
    },
    {
      id: 2,
      title: "隔壁搬来个夜场小公主",
      desc: "最近搬来了个新邻居，老婆本来想着，难得对面住进来一位女生，有空就过去跟她打个招呼。谁知，她每天都是白天睡觉晚上出门的，所以一直没遇到合适的机会。...",
      imgUrl: "",
      browse: "46.2",
      author: "苏羽Loner",
      comment: "210",
      like: "660"
    },
    {
      id: 3,
      title: "李佳琦从直播间消失的3分钟：“不要脸”的成年人，活得有多心酸",
      desc: "01 看过李佳琦直播的人都知道，他每隔一段时间都会离开直播间几分钟。 理由往往是：“我要去上一下厕所。”大家都很相信。 本来很正常的一件事，直到...",
      imgUrl: "https://upload-images.jianshu.io/upload_images/1202579-8e3d87a7fee19b72?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      browse: "43.1",
      author: "守望星空的孩子",
      comment: "64",
      like: "356"
    },
    {
      id: 4,
      title: "我真的明白了",
      desc: "不知道为何，近期我的情绪会这么不稳定，我也弄不懂我自己了。 前两晚跟即将要离婚的丈夫聊电话，他斩钉截铁说很早之前就不爱我了，所以一定要...",
      imgUrl: "",
      browse: "28.0",
      author: "蜕变挣脱",
      comment: "104",
      like: "349"
    },
    {
      id: 5,
      title: "婚姻好不好，从女人的脸上就能知道",
      desc: "35岁的小许在一家宾馆做前台，如果她不说自己的年龄，你看她的脸至多二十七八岁。 但凡女人都想要自己永远保持年轻。可结婚几年后，你就会发现，一样的...",
      imgUrl: "https://upload-images.jianshu.io/upload_images/9070317-20250d650a0a267c.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      browse: "99.2",
      author: "精读君",
      comment: "281",
      like: "3088"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default: return state;
  }
}