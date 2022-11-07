import React, {useState} from "react";
import{retuits,replies,likes,deleteTuit} from "../tuits-list/tuits-list-reducer"
import {useDispatch,useSelector} from "react-redux";

const PostItem = ({post}) => {
    // const tuitsList=useSelector(state => state.tuitsList);
    // const [tuit, setTuit] = useState()({})
    const dispatch = useDispatch()
    const retuitClickHandler = () => {
        dispatch(retuits(post))
    }
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    const repliesClickHandler = () => {
        dispatch(replies(post))
    }
    const likesClickHandler = () => {
        dispatch(likes(post))
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={post.avatarIcon}/>
                </div>
                <div className="col-10">
                    <div><i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(post._id)}></i></div>
                    <div><span className="fw-bolder">{post.userName}</span> {post.handle}. {post.time}</div>
                    <div>{post.tuit}</div>
                    <div style={{display:"flex", justifyContent: 'space-evenly'}}>
                        <span><i onClick={repliesClickHandler}className="bi bi-chat"></i> {post.replies}</span>
                        <span><i onClick={retuitClickHandler} className="bi bi-repeat"></i>{post.retuits} </span>
                        <span><i onClick={likesClickHandler} className="bi bi-heart"></i> {post.likes}</span>
                        <span><i className="bi bi-download"></i></span>
                    </div>

                </div>

            </div>
        </li>
    );
};

export default PostItem;

