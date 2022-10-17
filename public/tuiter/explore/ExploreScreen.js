import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <ul class="list-group">
                <li class="list-group-item">
                    <div class="row align-items-center">
                        <div class="position-relative col-11">
                            <input class="form-control rounded-pill ps-4" placeholder="Search Tuiter"/>
                            <i class="fas fa-search" style="position: absolute; bottom: 10px; left: 20px "></i>
                        </div>
                        <div class="col-1">
                            <i class="fas fa-cog float-end fa-2x" style="color: #0c63e4"></i>
                        </div>
                    </div>
                </li>
            </ul>

           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        For you
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        News
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Sports
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../a4/challenge/index.html">
                        Entertainment
                    </a>
                </li>

           </ul>
           <div class="position-relative">
            <img src="../../image/starship.jpg" width="100%"/>
            <h1 class="position-absolute bottom-0 left-10 text-white">SpaceX's Starship</h1>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

