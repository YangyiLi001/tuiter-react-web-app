import React, {useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {editName,editBio,editLocation,editWebsite,editBdate} from "../profile/profile-reducer"
import {Link} from "react-router-dom";
const EditProfile = () =>{
    const profile = useSelector(state=>state.profile);
    const [newName, setNewName] = useState(profile.name);
    const [newBio, setNewBio] = useState(profile.bio);
    const [newLocation, setNewLocation] = useState(profile.location);
    const [newWebsite, setNewWebsite] = useState(profile.website);
    const [newBdate, setNewBdate] = useState(profile.dateOfBirth);
    const dispatch = useDispatch();
    const editNameHandler = () =>{
        console.log("newName", newName)
        dispatch(editName(newName));
    }
    const editBioHandler = () =>{
        dispatch(editBio(newBio));
    }
    const editLocationHandler = () =>{
        dispatch(editLocation(newLocation));
    }
    const editwebsiteHandler = () =>{
        dispatch(editWebsite(newWebsite));
    }
    const editBdateHandler = () =>{
        dispatch(editBdate(newBdate));
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
                    <textarea value={newWebsite}
                                                                onChange={(event) => setNewWebsite(event.target.value)}>
                    </textarea>

                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={editwebsiteHandler}>
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
            <div className="small pt-2"><i className="bi bi-geo-alt text-secondary pe-2"></i>
            <textarea value={newLocation}
                      onChange={(event) => setNewLocation(event.target.value)}>
            </textarea>

            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                    onClick={editLocationHandler}>
                save
            </button></div>
                <div className="small pt-2"><i className="bi bi-balloon text-secondary pe-2"></i>
                    <textarea value={newBdate}
                              onChange={(event) => setNewBdate(event.target.value)}>
            </textarea>

                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={editBdateHandler}>
                        save
                    </button></div>



        </div>
        </div>


    );

}
export default EditProfile