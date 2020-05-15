import React, { PureComponent } from 'react';
import { WriterWrapper, WriterInfo } from "./../style";

export default class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <img className="scan" src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        <WriterInfo>
          <div className="title">下载简书手机App&nbsp;&nbsp;&gt;</div>
          <div className="content">随时随地发现和创作内容</div>
        </WriterInfo>
      </WriterWrapper>
    )
  }
}
