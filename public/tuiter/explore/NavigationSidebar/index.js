import NavigationList from "./NavigationList/NavigationList.js";

const NavigationSidebar = (active) => {
    console.log(active)
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       ${NavigationList(active)}

   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;