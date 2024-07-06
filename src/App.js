import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Courses from './Components/Courses'
import About from './Components/About'
import Contact from './Components/Contact'
import Read from './Components/Read'
import Apply from './Components/Apply'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <><Navbar /><Home /></>
        },
        {
            path: '/Courses',
            element: <><Navbar /><Courses /></>
        },
        {
            path: '/About',
            element: <><Navbar /><About /></>
        },
        {
            path: '/Contact',
            element: <><Navbar /><Contact /></>
        },
        {
            path: '/Read',
            element: <><Navbar /><Read /></>
        },
        {
            path: '/Apply',
            element: <><Navbar /><Apply /></>
        },
    ])
  return (
    <>  
        
        <RouterProvider router={router} />
    </>
  )
}

export default App