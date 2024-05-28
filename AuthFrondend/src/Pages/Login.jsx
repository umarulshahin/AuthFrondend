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
    <div className="h-screen flex items-center justify-center bg-blue-950">
  <div className="flex flex-col items-center justify-center rounded-lg shadow-md border border-white bg-transparent bg-opacity-50">
    <div className="pt-20">
      <p className="text-2xl font-bold text-white">Login page</p>
    </div>
    <form onSubmit={handleSubmit} className="space-y-4 mx-20 my-20">
      <input name="username" className="border border-black px-4 py-2 rounded-md" type="text" placeholder="Enter Username" />
      <br />
      <input name="password" className="border border-black px-4 py-2 rounded-md" type="password" placeholder="Enter Password" />
      <br />
      <div className="flex justify-center">
        <input className="border border-gray-400 bg-gray-500 text-white px-4 py-1 rounded-md" type="submit" value="Submit" />
      </div>
    </form>
  </div>
</div>

  )
}

export default Login