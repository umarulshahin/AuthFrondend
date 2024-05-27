import { useSelector } from "react-redux"
import useUserManagement from "../utils/useUserManagement"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



const Login = () => {

  const handleSubmit=useUserManagement()
  const username =useSelector((state)=>state.userdata.user.username)
  const navigate=useNavigate()
  const token = localStorage.getItem("authToken")

  useEffect(()=>{
     
     {(token) ? navigate("/"):""}

  },[token])
  
  console.log("Login page is working")

  return (
    <div className="h-screen flex items-center justify-center ">
      
    <div className="flex flex-col items-center justify-center rounded-lg shadow-md  bg-gray-200 ">
    {username && <p className=" pt-10 font-medium text-xl">welcome {username}</p> }

      <form onSubmit={handleSubmit} className="space-y-4 mx-20 my-20">

        <input name="username" className="border border-black px-4 py-2 rounded-md" type="text" placeholder="Enter Username" />
        <br />
        <input name="password" className="border border-black px-4 py-2 rounded-md" type="password" placeholder="Enter Password" />
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