import * as actionTypes from "../actions/types";

export const setUser = () => {
    return {
      type: actionTypes.SET_USER,
      payload: {
        isLogged: true
      }
    };
  };
    
  export const clearUser = () => {
    return {
      type: actionTypes.CLEAR_USER
    };
  };