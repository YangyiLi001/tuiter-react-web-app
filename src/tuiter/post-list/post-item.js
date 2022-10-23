import React from "react";
const PostItem = (
    {post}
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={50} src={post.avatarIcon}/>
                </div>
                <div className="col-10">
                    <div><span className="fw-bolder">{post.userName}</span> @{post.handle}. {post.time}</div>
                    <div>{post.content}</div>
                    <div><img className="rounded-3" src={post.image}/></div>

                </div>
            </div>
        </li>
    );
};
export default PostItem;

