import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from "react-router-dom"
import Login from "./pages/Login";
import Header from "./components/Header";


const router = createBrowserRouter(
   createRoutesFromElements((
      <Route path="/">
         <Route index element={<Login/>}/>
      </Route>
   ))
)

function App() {
   return (
      <div className="App">
         
         <RouterProvider router={router}/>

      </div>
  )
}

export default App
