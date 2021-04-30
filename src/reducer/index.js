import * as actionTypes from "../actions/types";

const initialUserState = {
    isLogged: false
}
export const user_reducer = (state = initialUserState, action) => {
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          isLogged: true
        };
      case actionTypes.CLEAR_USER:
        return {
            isLogged: false
        };
      default:
        return state;
    }
  };