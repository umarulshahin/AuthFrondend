import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setuserData } from '../Redux/UserSlice'


const Login = () => {

  return (
    <div className="h-screen flex items-center justify-center ">
    <div className="flex flex-col items-center justify-center rounded-lg shadow-md bg-gray-200 ">
      <form action="" className="space-y-4 mx-20 my-20">

        <input className="border border-black px-4 py-2 rounded-md" type="text" placeholder="Enter Username" />
        <br />
        <input className="border border-black px-4 py-2 rounded-md" type="password" placeholder="Enter Password" />
        <br  />
        <div className='flex justify-center'>
        <input className="border  border-gray-400 bg-gray-500 text-white px-2 py-1 rounded-md" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login