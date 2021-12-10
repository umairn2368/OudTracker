import types from '../types';

const INITIAL_STATE = {
  user: {},
  isLoggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        user: action.user,
        accessToken: action.accessToken,
        isLoggedIn: true,
      };

    case types.REVERT_AUTH:
      return {...state, user: {}, isLoggedIn: false,};

    default:
      return state;
  }
};
