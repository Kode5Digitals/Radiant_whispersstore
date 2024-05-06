import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cartprovider from './cartprovider.jsx'


const router = createBrowserRouter([
   { path: "/", element: <App /> },
  // { path: "/:pid", element: <Showmore /> },
  // { path: "/Login", element: <Login /> },
  // { path: "/Signup", element: <Signup /> },
  // { path: "/showmore", element: <Showmore /> },
  // {
  //   path: "/", element: <Home />,
  //   children: [
  //     { path: "Login", element: <Login /> },
  //     { path: "Signup", element: <Signup /> }
  //   ]
  // }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cartprovider>
      <RouterProvider router={router} />
    </Cartprovider>
  </React.StrictMode>
)
