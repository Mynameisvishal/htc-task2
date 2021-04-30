import * as actionTypes from "../actions/types";
import {combineReducers} from "redux";

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

  const initialPostState = {
    items: [],
    loading: false,
    error: null
  }

  export const postsReducers = (state = initialPostState,action)=>{
    switch(action.type){
      case  actionTypes.FETCH_POST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        }
      case actionTypes.FETCH_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload
        }
      case actionTypes.FETCH_POST_FAILURE:
        return{
          ...state,
          loading: true,
          error:action.error,
        }
      default :
        return{
          state
        }
    }
  }

  export const rootreducer = combineReducers({
    user : user_reducer,
    post : postsReducers 
  });