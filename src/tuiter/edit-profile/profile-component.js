import React, {useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {editName} from "../profile/profile-reducer"
const EditProfile = () =>{
    const profile = useSelector(state=>state.profile);
    const [newName, setNewName] = useState(profile.name);
    const dispatch = useDispatch();
    const editNameHandler = () =>{
        console.log("newName", newName)
        dispatch(editName(newName));
    }

    return(
        <div>
            <textarea value={newName}
                      onChange={(event) => setNewName(event.target.value)}>

            </textarea>
            <div>
                <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={editNameHandler}>
                    save
                </button>
            </div>
        </div>

    );

}
export default EditProfile