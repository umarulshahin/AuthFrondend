import axios from "axios";
import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearToken, updateToken } from "../Redux/UserSlice";
import useTokenUpdate from "../utils/useTokenUpdate";

const Home = () => {
    const[notes,setNotes]=useState([])
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.userdata.user.username)
    const usertoken=useSelector(state=>state.userdata.token)
    console.log("Home page working")
    const navigate=useNavigate()
    const updateToken=useTokenUpdate()
    const token =JSON.parse(localStorage.getItem("authToken"))

    if(!usertoken){
     updateToken()
    }
    useEffect(()=>{
       
       handleUserdata()

    },[])

    const handleUserdata= async()=>{
      console.log(token)
      try{
        const response =await axios.get('http://127.0.0.1:8000/api/getnots/',{
          headers:{
            'Authorization':`Bearer ${token.access}`,
            'Content-Type' : 'application/json'
          },
        });
        
        if (response.status===200){
          console.log(response.data)
          setNotes(response.data)
        }else if(response.statusText=== "unautherized"){
          dispatch(clearToken())
          navigate('/login')
        }
      }
      catch(error){
         console.log(error)
         localStorage.removeItem("authToken")
         dispatch(clearToken())
        
      }

    }

  return (
    <div className="flex flex-col items-center justify-center font-bold text-xl">
      <p >
        Hello  <span className="text-red-500">{user}</span>
      </p>
      Welcome to Home Page

      <ul>
        {
          notes.map(note=>(
            <li key={note.id}>{note.body}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Home;

