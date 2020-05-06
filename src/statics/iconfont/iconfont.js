import { createGlobalStyle } from "styled-components";

export const IconfontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1588774350519'); /* IE9 */
    src: url('./iconfont.eot?t=1588774350519#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1588774350519') format('woff'),
    url('./iconfont.ttf?t=1588774350519') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1588774350519#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`