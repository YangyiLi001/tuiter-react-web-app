import { createSlice } from "@reduxjs/toolkit";
import tuitsList from '../data/tuits-list.json';
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarIcon": "../../image/nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
const tuitsListSlice = createSlice({
        name: 'tuitsList',
        initialState: tuitsList,
        reducers: {
            deleteTuit(state, action) {
                const index = state
                    .findIndex(tuit =>
                        tuit._id === action.payload);
                state.splice(index, 1);
            },

            createTuit(state, action) {
                state.unshift({
                    ...action.payload,
                    ...templateTuit,
                    _id: (new Date()).getTime(),
                })
            },

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
export const{retuits,replies,likes,createTuit,deleteTuit} = tuitsListSlice.actions
export default tuitsListSlice.reducer

