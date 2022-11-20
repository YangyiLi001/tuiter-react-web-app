import React, {useEffect} from "react";
import PostItem
    from "./post-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

import {useDispatch, useSelector}
    from "react-redux";

const PostSummaryList = () => {
    //tuitsList = tuitsData in assignment
    const {tuits, loading} = useSelector(state => state.tuitsData)
    console.log(tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(post =>
                    <PostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
//PostSummaryList=TuitsList in assignment
export default PostSummaryList;
