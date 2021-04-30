import * as actionTypes from "../actions/types";
import Axios from 'axios';

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

  export const fetchPost = () => async(dispatch,getState)=>{
    dispatch({type: actionTypes.FETCH_POST_REQUEST});
    console.log("inside fetchPosts");
    try{
      const response = await Axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({type: actionTypes.FETCH_POST_SUCCESS,payload: response.data})
    }catch(error){
      dispatch({type: actionTypes.FETCH_POST_FAILURE,error})
    }
  }