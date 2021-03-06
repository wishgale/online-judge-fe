import { queryProblems } from '@/services/api';

export default {
  namespace: 'problems',
  state: {
    problems: [],
  },
  effects: {
    *fetch(_, { call, put }) {
      const { data } = yield call(queryProblems);
      if (data.problems) {
        yield put({
          type: 'save',
          payload: {
            problemsList: data.problems,
          },
        });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        problems: payload.problemsList,
      };
    },
  },
};
