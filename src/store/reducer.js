import { combineReducers } from "redux-immutable";
// 与redux中的combineReducers功能形同，
// 就是可以将所有state都转换为immutable对象

import { reducer as headerReducer } from "./../common/header/store";
import { reducer as gomeReducer } from "./../pages/home/store";
import { reducer as detailReducer } from "./../pages/detail/store";
import { reducer as loginReducer } from "./../pages/login/store";

export default combineReducers({
  header: headerReducer,
  home: gomeReducer,
  detail: detailReducer,
  login: loginReducer
});
