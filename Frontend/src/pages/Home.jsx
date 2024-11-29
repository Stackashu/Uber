import React from 'react'
import { Link  } from 'react-router-dom'
const Home = () => {
  return (
    <div>
     <div className='  bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1564694202225-cc1920e206ed?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-5  w-full flex justify-between flex-col bg-red-400'>
      <img className='w-16 ml-4 rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkR3_XutLome56HE-Zh552ZDdVJ_ETq-G3gw&s' alt='uber'/>
        <div className='bg-white flex flex-col gap-5 px-3 py-7'>
            <h2 className=' text-black font-bold text-2xl '>Get started with Uber</h2>
            <Link to="/login" className=' flex justify-center items-center bg-black rounded text-white w-full py-3 text-md'>Continue</Link>
        </div>
     </div>
    </div>
  )
}

export default Home
