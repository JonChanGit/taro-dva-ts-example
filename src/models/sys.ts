import Model from 'dva-core'

const model: Model = {
    namespace: 'sys',
    state: {
    },
    reducers: {
    },
    effects: {
        * error ({ payload }, { call }) {
            yield call(() => {console.error('sys error', payload)})
        }
    },
    subscriptions: {
    }
  }

  export default model
