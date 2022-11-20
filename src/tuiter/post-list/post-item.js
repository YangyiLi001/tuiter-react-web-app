import React, {useState} from "react";
import{retuits,replies,likes,deleteTuit} from "../tuits-list/tuits-list-reducer"
import {deleteTuitThunk,updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch,useSelector} from "react-redux";

const PostItem = ({post}) => {
    const dispatch = useDispatch()
    const retuitClickHandler = () => {
        dispatch(retuits(post))
    }
    // const deleteTuitHandler = (id) => {
    //     dispatch(deleteTuit(id));
    // }
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }


    const repliesClickHandler = () => {
        dispatch(replies(post))
    }
    // const likesClickHandler = () => {
    //     dispatch(likes(post))
    // }
    const likesClickHandler = (id) => {
        dispatch(updateTuitThunk({
            ...post,
            likes: post.likes + 1,
            liked: true
            }))
    }
    const unlikesClickHandler = (id) => {
        dispatch(updateTuitThunk({
            ...post,
            likes: post.likes - 1,
            liked: false
        }))
    }
// const PostItem = () => {
//     const dispatch = useDispatch();
//     const deleteTuitHandler = (id) => {
//         dispatch(deleteTuitThunk(id));
//     }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={post.image}/>
                </div>
                <div className="col-10">
                    <div><i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(post._id)}></i></div>
                    <div><span className="fw-bolder">{post.userName}</span> {post.handle}. {post.time}</div>
                    <div>{post.tuit}</div>
                    <div style={{display:"flex", justifyContent: 'space-evenly'}}>
                        <span><i onClick={repliesClickHandler}className="bi bi-chat"></i> {post.replies}</span>
                        <span><i onClick={retuitClickHandler} className="bi bi-repeat"></i>{post.retuits} </span>
                        {/*<span><i onClick={likesClickHandler} className="bi bi-heart"></i> {post.likes}</span>*/}
                        <span>{post.liked && <i onClick={() => {unlikesClickHandler(post._id)}} className="bi bi-heart-fill me-2 text-danger"></i>}
                            {!post.liked && <i onClick={() => {likesClickHandler(post._id)}} className="bi bi-heart me-2"></i>}
                            {post.likes}
                        </span>

                        <span><i className="bi bi-download"></i></span>
                    </div>

                </div>

            </div>
        </li>
    );
};

export default PostItem;

