import React from "react";
import postsArray from './post.json';
import PostItem
    from "./post-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;
