import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./post.js";
const PostSummaryList = () => {
    // console.log(exploreItems);

    return(`
    <ul class="list-group">
        ${
        exploreItems.map(exploreItems => {
            return(PostSummaryItem(exploreItems));
        }).join('')
    }
     </ul>
   `);
}
export default PostSummaryList;