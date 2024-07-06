import React from 'react'
import Home from './Home'
import About from './About'
import Courses from './Courses'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <div>
            <div className='flex items-center justify-between h-[13vh] px-9 bg-gray-900 text-white'>
                    <h1 className='text-4xl font-bold'>Tech<span className='text-yellow-500'>Master</span></h1>
                    <div className='flex gap-3 items-center'>
                        <Link to='/' className='bg-yellow-500 px-3 py-2 rounded duration-300'>Home</Link><br></br>
                        <Link to='/About' className='hover:bg-yellow-500 px-3 py-2 rounded duration-300'>About</Link><br></br>
                        <Link to='/Courses' className='hover:bg-yellow-500 px-3 py-2 rounded duration-300'>Courses</Link>
                        <Link to='/Contact' className='hover:bg-yellow-500 px-3 py-2 rounded duration-300'>Contact</Link>
                    </div>
            </div>
       </div>
    </>
)
}

export default Navbar