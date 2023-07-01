import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   user: null,
   token: null,
   posts: [],
   notifications: []
}

const authSlice = createSlice({
   name: auth,
   initialState,
   reducers: {
      setLogin: (state, action) => {
         state.user = action.payload.user;
         state.token = action.payload.token;
      },
      setLogout: (state) => {
         state.user = null;
         state.token = null;
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