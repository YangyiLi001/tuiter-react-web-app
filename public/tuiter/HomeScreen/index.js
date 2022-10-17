import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import HomeComponent from "./HomeScreen.js";
function Component() {
    $('#wd-home').append(`
       <div class="row mt-2">
           <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar("Home")}
           </div>
           <div class="col-10 col-lg-7 col-xl-6">
                ${HomeComponent()}
           </div>
           <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"
                ${PostSummaryList()}
           </div>
      </div>
   `);
}

$(Component);