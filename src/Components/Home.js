import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className='h-[90vh] w-full bg-gray-900 flex flex-col items-center justify-center text-center'>
            <h1 className='text-white text-5xl font-bold pb-4'>World's Largest <span className='text-yellow-500'>Tech</span> Company</h1>
            <p className='text-white py-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry. Lorem Ipsum <br></br> has been the industry's standard dummy text ever since the 1500s</p>
            <div className='pt-4'>
            <Link to='/Read'><button className='bg-yellow-500 rounded px-4 py-2 mx-3 hover:bg-gray-900 hover:border border-yellow-500 hover:text-white duration-300'>Read More</button></Link>
            <Link to='/Apply'><button className='bg-yellow-500 rounded px-4 py-2 mx-3 hover:bg-gray-900 hover:border border-yellow-500 hover:text-white duration-300'>Apply Now</button></Link>
            </div>
        </div>
    </>
  )
}

export default Home