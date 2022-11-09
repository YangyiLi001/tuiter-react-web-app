import React, {useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {editName,editBio,editHandle} from "../profile/profile-reducer"
import {Link} from "react-router-dom";
const EditProfile = () =>{
    const profile = useSelector(state=>state.profile);
    const [newName, setNewName] = useState(profile.name);
    const [newBio, setNewBio] = useState(profile.bio);
    const [newHandle, setNewHandle] = useState(profile.handle);
    const dispatch = useDispatch();
    const editNameHandler = () =>{
        console.log("newName", newName)
        dispatch(editName(newName));
    }
    const editBioHandler = () =>{
        dispatch(editBio(newBio));
    }
    const editHandleHandler = () =>{
        dispatch(editHandle(newHandle));
    }

    return(
        <div>

            <div className="row px-3">
                <div className="col-1">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-11">
                    <div className="fw-bold">{profile.name}</div>
                    <div className="text-secondary small">{profile.numberOfTweets} Tweets</div>
                </div>
            </div>
            <div>
                <div className="position-relative">
                    <img src={profile.bannerPicture} className="w-100 h-30 px-0 border-0"></img>

                    <img src={profile.profilePicture} className="h-50 rounded-circle card-img-overlay mx-4 my-5 top-50"></img>

                </div>

            <div className="mt-5 px-3">
                    <div>
                    <textarea value={newName}
                               onChange={(event) => setNewName(event.target.value)}>
                    </textarea>

                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={editNameHandler}>
                        save
                    </button>

                    </div>

                <div className="text-secondary small">
                    <textarea value={newHandle}
                                                                onChange={(event) => setNewHandle(event.target.value)}>
                    </textarea>

                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={editHandleHandler}>
                        save
                    </button>
                </div>
                <div className="small pt-2">
                    <textarea value={newBio}
                              onChange={(event) => setNewBio(event.target.value)}>

                    </textarea>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={editBioHandler}>
                        save
                    </button>

                </div>
            </div>
            <div className="row px-3 pb-1 bt-0">
                <div className="col-4 small text-secondary"><i className="bi bi-geo-alt text-secondary pe-2"></i>{profile.location}</div>
                <div className="col-4 small text-secondary"><i className="bi bi-balloon text-secondary pe-2"></i>Born {profile.dateOfBirth}</div>
                <div className="col-4 small text-secondary"><i className="bi bi-calendar3 text-secondary pe-2"></i>Joined {profile.dateJoined}</div>
            </div>
            <div className="row px-3">
                <div className="col-3">
                    <span className="fw-bold small">{profile.followingCount}</span><span className="ps-1 text-secondary small">Following</span>
                </div>
                <div className="col-9">
                    <span className="fw-bold small">{profile.followersCount}</span><span className="ps-1 text-secondary small">Followers</span>
                </div>

            </div>

        </div>
        </div>


    );

}
export default EditProfile