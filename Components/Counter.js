import React from 'react'
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <div className='border border-black w-[50%] text-center rounded py-4 mx-auto my-auto'>
          <h1 className='text-4xl font-bold pt-4'>Digital Clock</h1>
          <p className='text-3xl py-4'>{counter}</p>
            <button className='border border-black px-5 py-2 mx-4 rounded hover:bg-black hover:text-white duration-300' onClick={()=>{
              setCounter(counter+1)
            }}>Increase</button>
            <button className='border border-black px-5 py-2 mx-4 rounded hover:bg-black hover:text-white duration-300' onClick={()=>{
              setCounter(counter-1)
            }}>Decrease</button>
            <button className='border border-black px-5 py-2 mx-4 rounded hover:bg-black hover:text-white duration-300' onClick={()=>{
              setCounter(0)
            }}>Reset </button>
      </div>
    </>
  )
}

export default App