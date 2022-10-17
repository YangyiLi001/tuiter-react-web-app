const TweetNumber = (number) => {
    if (typeof number != "undefined"){
        return number
    }
    else {
        return ""
    }
}

const PostItem = (Post) => {


    return(`
    <div class="wd-bcdefg">
    <img class="wd-avatar" src="${Post.avatarIcon}">
    <div class="wd-cdefg">
        <span>${Post.userName} <i class="fas fa-check-circle"></i></span>
        <span class="wd-handle">@${Post.handle}  ${Post.time}</span>
        <p>${Post.content}</p>
        <div class="wd-ef">
            <img class="wd-content-image" src="${Post.image}">
            <div class="wd-ef-content">
                <p class="wd-ef-title">${Post.title}</p>
                <p class="wd-ef-body">${Post.summary}</p>
            </div>

        </div>
        <div class="wd-g">
            <a href="../reply.html">
                <i class="far fa-comment"></i>
                <span class="icon-number">${Post.commentNumber}</span>
            </a>
            <a href="../retuit.html">
                <i class="fa fa-retweet"></i>
                <span class="icon-number">${Post.reTweetNumber}</span>
            </a>
            <a href="../like.html">
                <i class="fa fa-heart"></i>
                <span class="icon-number">${Post.heartNumber}</span>
            </a>
            <a href="#upload">
                <i class="fa fa-upload"></i>
            </a>
        </div>

    </div>

</div>
   `);
}
export default PostItem;