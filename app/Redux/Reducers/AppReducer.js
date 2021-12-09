import types from '../types';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.USER_DTA:
      return {
        ...state,
        data: [...action.data],
      };
      
    case types.REVERT_APP:
      return {
        ...state,
        data: [],
      };
      
    default:
      return state;
  }
};
