import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Main from "./Layout/Main";
import Services from "./Components/Services";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Blog from "./Components/Blog";
import SecondLayout from "./Layout/SecondLayout";
import FullInfo from "./Components/FullInfo";
import Login from "./Components/Login";
import Registration from "./Components/Registration";


function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/services",
          element: <Services/>
        },

        {
          path: "/services",
          element: <Services/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/registration",
          element: <Registration/>
        },

      ]
    },
    {
      path: "/secondLayout",
      element: <SecondLayout/>,
      children:[
        {
          index: true,
          element: <Users/>
        },
        {
          path:"users",
          element: <Users/>
        },
        {
          path:"users/:id",
          element: <FullInfo/>
        },
        {
          path:"blog",
          element: <Blog/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
