import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { fetchPost } from './actions';

const Post = () => {

    const state = useSelector(state=> state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("inside useEffect post");
        dispatch(fetchPost())
    }, [])

    return (
        <div>
            {console.log(state)}
            {state.items?.map((data,key)=>(
                <p id={key}> {data.name} </p>
            ))}
        </div>
    )
}

export default Post
