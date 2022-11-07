import { createSlice } from "@reduxjs/toolkit";
import tuitsList from '../data/tuits-list.json';

const tuitsListSlice = createSlice({
        name: 'tuitsList',
        initialState: tuitsList,
        reducers: {
            likes(state, action){
                const tuit = state.find((tuit) => tuit._id === action.payload._id)
                    if(tuit.liked === false){
                    tuit.liked = true;
                    tuit.likes = tuit.likes+1
                    }else{
                        tuit.liked = false;
                        tuit.stats.likes--;
              }},
            replies(state,action){
                const tuit = state.find((tuit) => tuit._id === action.payload._id)
                tuit.replies = tuit.replies+1
                },

            retuits(state, action) {
                const tuit = state.find((tuit) => tuit._id === action.payload._id)
                tuit.retuits = tuit.retuits+1
            }
        }
    }
    );
export const{retuits,replies,likes} = tuitsListSlice.actions
export default tuitsListSlice.reducer

