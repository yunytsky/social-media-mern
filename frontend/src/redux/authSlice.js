import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   user: null,
   token: null,
   authorized: false,
   posts: [],
   notifications: []
}

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setLogin: (state, action) => {
         state.user = action.payload.user;
         state.token = action.payload.token;
         state.authorized = action.payload.authorized;
      },
      setLogout: (state) => {
         state.user = null;
         state.token = null;
         state.authorized = false;
      },
      setFollowers: (state, action) => {
         if(state.user) {
            state.user.followers = action.payload.followers;
         }else{
            console.log("handle")
         }
      },
      setFollowings: (state, action) => {
         if(state.user) {
            state.user.followings = action.payload.followings;
         }else{
            console.log("handle")
         }
      },
      setPosts: (state, action) => {
         state.posts = action.payload.posts;
      }
   }
})

export const {setLogin, setLogout, setFollowers, setFollowings, setPosts} = authSlice.actions;
export default authSlice.reducer;