import { reducer as headerReducer } from "./../common/header/store";
import { reducer as HomeReducer } from "./../pages/home/store";
import { combineReducers } from "redux-immutable";
// 与redux中的combineReducers功能形同，
// 就是可以将所有state都转换为immutable对象
export default combineReducers({
  header: headerReducer,
  home: HomeReducer
});
