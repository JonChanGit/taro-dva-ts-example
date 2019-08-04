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
      const {responseBody}: { responseBody: Array<DataInterface> } = yield call(indexApi.getList, {
        key: payload
      })
      console.log('数据接口返回', responseBody);
      // 数据处理
      const map: Map<string, DataInterface> = new Map<string, DataInterface>();
      const data = responseBody.filter((i: DataInterface) => {
        const _key = map.get(i.content);
        if (_key) {
          // @ts-ignore
          _key.frequency = _key.frequency + 1
          i.frequency = _key.frequency
          return false;
        }
        i.frequency = 1
        map.set(i.content, i)
        return true
      })
      yield put(action('save', {data}));
    },


  }

}
