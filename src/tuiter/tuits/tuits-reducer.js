import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
// const currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "image": "nasa.png",
// };
//
// const templateTuit = {
//     ...currentUser,
//     "topic": "Space",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
// }

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    // reducers: {
    //
    //     createTuit(state, action) {
    //         console.log(...action.payload)
    //         state.unshift({
    //             ...action.payload,
    //             ...templateTuit,
    //             _id: (new Date()).getTime(),
    //         })
    //     }
    // }

});
// export const {createTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;



