import types from '../types';

const INITIAL_STATE = {
  user: {
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        user: action.user,
        accessToken: action.accessToken,
      };

    default:
      return state;
  }
};