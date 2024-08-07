import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Profile from './components/Profile.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"signup",
        element:<SignUp/>
      },
      {
        path:"profile",
        element:<Profile/>
      },
      
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
