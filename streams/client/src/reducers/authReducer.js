import { SIGN_OUT, SIGN_IN } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  useId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, useId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, useId: null };
    default:
      return state;
  }
};
