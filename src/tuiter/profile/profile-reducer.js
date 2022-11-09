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
        editHandle(state, action){
            state.handle = action.payload
        },


    }
    }
);
export const{editName,editBio,editHandle} = profileSlice.actions
export default profileSlice.reducer