import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statics from './component/Statics/Statics';
import Blog from './component/Blog/Blog';
import Jobapply from './component/Jobapply/Jobapply';
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Jobs from './component/Jobs/Jobs';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/statics',
        element: <Statics/>
      },
      {
        path: '/applied',
        element: <Jobapply/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/jobs',
        element: <Jobs/>
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
