export default {
  namespace: 'one',
  state: {
      num: 0
  },
  reducers: {
      jisuan(state, action) {
          let {flg,num}=action
          if(flg=='+'){
            state.num += action.num
          }else{
            if(state.num!=0)
            state.num -= action.num
          }
          
          return {...state, ...action.payload };
      },
  },
  effects: {
      * fetch({ flg,num }, { call, put }) {
          // eslint-disable-line
        
          yield put({ type: 'jisuan', flg,num });
      },
  },
  subscriptions: {},
};