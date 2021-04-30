import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { fetchPost } from './actions';
import './Post.css';    

const Post = () => {

    const state = useSelector(state=> state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost())
    }, [])

    return (
        <div>
            {console.log(state)}
            <div className="container m-5">
            <h4>Api fetch using redux thunk</h4>
            {state.items?.map((data,key)=>(
                <p id={key}> {data.name} </p>
                ))}
                <p style={{minHeight: '50px'}}></p>
                </div>
        </div>
    )
}

export default Post
