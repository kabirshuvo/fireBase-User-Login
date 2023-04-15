import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter, RouterProvider,
} from 'react-router-dom'
import Home from './components/Home/Home'
import LoginPage from './components/Login/Login'
import Register from './components/Register/Register'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
