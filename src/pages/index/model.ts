// import Taro from '@tarojs/taro';
import * as indexApi from './service';
import action from "../../utils/action";
import {DataInterface} from "./index.interface";

export default {
  namespace: 'index',
  state: {
    data: [],
    v: '1.0',
  },

  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    * getList({payload}, {call, put}) {
      const {responseBody} = yield call(indexApi.getList, {
        key: payload
      })
      console.log('数据接口返回', responseBody);
      // 数据处理
      const map: Map<string, string> = new Map<string, string>();
      const data = responseBody.filter((i: DataInterface) => {
        const _key = map.get(i.content);
        if (_key) {
          return false;
        }
        map.set(i.content, i.content)
        return true
      })
      yield put(action('save', {data}));
    },


  }

}
