import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statics from './Pages/Statics/Statics'
import Blog from './Pages/Blog/Blog'
import AppliedJob from './Pages/AppliedJob/AppliedJob'
import JobDetails from './Pages/JobDetails/JobDetails'
import NotFound from './Pages/NotFound/NotFound'
import Home from './Pages/Home/Home'
import LodingSpinner from './Pages/LodingSpinner/LodingSpinner'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader: () => fetch("/public/data.json")
      },
      {
        path:"statics",
        element:<Statics/>,
      },
      {
        path:"blog",
        element:<Blog/>,
      },
      {
        path:"applied",
        element:<AppliedJob/>
      },
      {
        path:"product/:foodId",
        element:<JobDetails/>,

        loader: async ({params}) => {
          const res = await fetch("/public/data.json");
          const foods = await res.json();

          const findFood = foods.find(food => food.id == params.foodId);
          return findFood;

        }
      },
      {
        path:"loder",
        element: <LodingSpinner/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>
   </RouterProvider>
  </React.StrictMode>,
)
