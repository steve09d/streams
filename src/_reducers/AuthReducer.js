import { SIGN_IN, SIGN_OUT } from '../_actions/types';

const INITAL_STATE = {
  isSignedIn: null,
  userId: null,
};

const AuthReducer = (state = INITAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        userId: payload,
        isSignedIn: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        userId: null,
        isSignedIn: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
