const TweetNumber = (number) => {
    if (typeof number != "undefined"){
        return number
    }
    else {
        return ""
    }
}

const PostSummaryItem = (exploreItems) => {
    return(`
        <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div class="text-secondary">
                                ${exploreItems.topic}
                            </div>
                            <div class="row" style="display: inline">
                                <div class="fw-bolder" style="display: inline">
                                    ${exploreItems.userName} 
                                    <i class="fas fa-circle"></i>
                                </div>
                                <div class="text-secondary" style="display: inline">
                                 - ${exploreItems.time}
                                </div>
                            </div>
                            <div class="fw-bolder fs-6">
                                ${exploreItems.title}
                            </div>
                            <div class="text-secondary">
                               ${TweetNumber(exploreItems.tweets)}
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end align-content-center" src="${exploreItems.image}" height="100px">
                        </div>
                    </div>
        </li>
   `);
}
export default PostSummaryItem;