import React from "react";

const PostItem = (
    {post}
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={post.avatarIcon}/>
                </div>
                <div className="col-10">
                    <div><span className="fw-bolder">{post.userName}</span> @{post.handle}. {post.time}</div>
                    <div>{post.content}</div>
                    <div><img width="100%" className="rounded-3" src={post.image}/></div>
                    <div style={{display:"flex", justifyContent: 'space-evenly'}}>
                        <span><i className="bi bi-chat"></i> {post.commentNumber}</span>
                        <span><i className="bi bi-repeat"></i> {post.reTweetNumber}</span>
                        <span><i className="bi bi-heart"></i> {post.heartNumber}</span>
                        <span><i className="bi bi-download"></i></span>
                    </div>

                </div>
            </div>
        </li>
    );
};
export default PostItem;

