import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from "react-router-dom"
import Login from "./pages/Login";
import Signup, { signupLoader } from "./pages/Signup";
import RootLayout from "./layouts/RootLayout";
import ResetPassword from "./pages/ResetPassword";
import Verify from "./pages/Verify";
import NewPassword from "./pages/NewPassword";
import Home from "./pages/Home";
import Feed, { feedLoader } from "./pages/Feed";
import NotFound from "./pages/NotFound";
import People from "./pages/People";
import ExtendedProfile from "./pages/ExtendedProfile";
import Profile from "./pages/Profile";
import PrivateRoutes from "./utils/PrivateRoutes";
import AddPost from "./pages/AddPost";
import Error505 from "./pages/Error505";

const router = createBrowserRouter(
   createRoutesFromElements((
      <Route path="/" element={<RootLayout/>}>
         
         <Route index element={<Home/>}/>

         <Route path="auth">
            <Route path="login" element={<Login/>}/>
            <Route path="signup/" element={<Signup />} loader={signupLoader} />
            <Route path="verify" element={<Verify/>}/>
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="new-password" element={<NewPassword/>}/>
         </Route>

         <Route path=":userId" element={<PrivateRoutes/>}>
            <Route path="feed" element={<Feed />} loader={feedLoader}/>
            <Route index element={<ExtendedProfile/>}/>
            <Route path="people" element={<People/>}/>
            <Route path="profile/:otherUserId" element={<Profile/>}/>
            <Route path="add" element={<AddPost />} />
         </Route>

         <Route path="*" element={<NotFound/>}/>
      </Route>
   ))
)

function App() {
   return (
      <div className="App ">
         <RouterProvider router={router}/>
      </div>
  )
}

export default App
