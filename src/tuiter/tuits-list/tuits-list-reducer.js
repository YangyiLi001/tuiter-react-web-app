import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits-list.json';
// import tuitsList from '../data/tuits-list.json';
//a8 added
import {findTuitsThunk,deleteTuitThunk,createTuitThunk,updateTuitThunk}
    from "../../services/tuits-thunks";

export const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../image/nasa.png",
};

export const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
// a8 added
const initialState = {
    tuits: [],
    loading: false
}

const tuitsListSlice = createSlice({
        name: 'tuits',
        initialState,
        extraReducers: {
            [findTuitsThunk.pending]:
                (state) => {
                    state.loading = true
                    state.tuits = []
                },
            [findTuitsThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.tuits = payload
                },
            [findTuitsThunk.rejected]:
                (state) => {
                    state.loading = false
                },
            [deleteTuitThunk.fulfilled] :
                (state, { payload }) => {
                    state.loading = false
                    state.tuits = state.tuits
                        .filter(t => t._id !== payload)
                },
            [createTuitThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.tuits.push(payload)
                },
            [updateTuitThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    const tuitNdx = state.tuits
                        .findIndex((t) => t._id === payload._id)
                    state.tuits[tuitNdx] = {
                        ...state.tuits[tuitNdx],
                        ...payload
                    }
                }




        },

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

