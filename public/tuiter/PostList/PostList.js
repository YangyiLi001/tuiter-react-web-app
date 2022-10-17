import PostItem from "./PostItem.js";
import Post from "./post.js";
const PostList = () => {

    return(`
    <ul class="list-group">
        ${
        Post.map(Post => {
            return(PostItem(Post));
        }).join('')
    }
     </ul>
   `);
}
export default PostList;