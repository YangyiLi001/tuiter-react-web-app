import { createSlice } from "@reduxjs/toolkit";
import profile from '../data/profile.json';
const profileSlice = createSlice({
    name:'profile',
    initialState: profile,
    reducers:{
        editName(state, action){
            state.name = action.payload
        },
        editBio(state, action){
            state.bio = action.payload
        },
        editLocation(state, action){
            state.location = action.payload
        },
        editWebsite(state, action){
            state.website = action.payload
        },
        editBdate(state, action){
            state.dateOfBirth = action.payload
        },

    }
    }
);
export const{editName,editBio,editLocation,editWebsite,editBdate} = profileSlice.actions
export default profileSlice.reducer