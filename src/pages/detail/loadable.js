import React from "react";
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),  //import 异步加载语法(和上面的import不同)
  loading() {
    return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/>;