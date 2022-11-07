import { createSlice } from "@reduxjs/toolkit";
import profile from '../data/profile.json';
const profileSlice = createSlice({
    name:'profile',
    initialState: profile,
    reducers:{
        editName(state, action){
            state.name = action.payload
        },

    }
    }
)
export const{editName} = profileSlice.actions;
export default profileSlice.reducer;