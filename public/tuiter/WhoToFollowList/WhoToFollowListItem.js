const WhoToFollowListItem = (who) => {
    return(`
       <li class="list-group-item">
                    <div class="row align-items-center">
                        <div class="col-2">
                            <div >
                            <img src="${who.avatarIcon}" width="100%">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="fw-bolder">
                                ${who.userName}
                            </div>
                            <div class="text-secondary">
                                @${who.handle}
                            </div>
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn btn-primary rounded-pill">Follow</button>
                        </div>
                    </div>
       </li>
  
   `);
}
export default WhoToFollowListItem;


