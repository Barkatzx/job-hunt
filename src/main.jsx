import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header';
import Statics from './component/Statics/Statics';
import Blog from './component/Blog/Blog';
import Jobapply from './component/Jobapply/Jobapply';
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Jobs from './component/Jobs/Jobs';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statics',
        element: <Statics></Statics>
      },
      {
        path: '/applied',
        element: <Jobapply></Jobapply>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
