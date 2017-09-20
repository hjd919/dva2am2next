
export default {

  namespace: 'example',

  state: {
    test:'1234'
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      // history.listen((location) => {
      //   console.log(1, location);
      // });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
