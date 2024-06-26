import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { setToken, setuserData, updateToken } from "../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useMemo, useState } from "react";
import useTokenUpdate from "./useTokenUpdate";

const useUserManagement = () => {
    console.log("working useuser management")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const refreshToken=useSelector(state=>state.userdata.token)
    const [Loading,setLoading]=useState()
    // const value =localStorage.getItem("authToken")
    const updateToken = useTokenUpdate();
        useMemo(() => {

            if(Loading){
                updateToken()

            } 
            const fourminuts = (1000 * 60 *4)    
            const interval = setInterval(() => {
            if (refreshToken){
            
                updateToken();

            }
        }, fourminuts);

        return () => {
            
            clearInterval(interval);
        };

    }, [Loading,refreshToken]); 

    const handleUser = async (event) => {

        event.preventDefault();

        const { username, password } = event.target.elements;

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/token/",
                {
                    username: username.value,
                    password: password.value,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(response.data,'set user first')
             
            if (response.status === 200) {

                const tokenData = jwtDecode(response.data.access);
                

                localStorage.setItem("authToken", JSON.stringify(response.data));
                dispatch(setuserData(tokenData));

                dispatch(setToken(response.data))

                navigate("/");
                toast.success("Login successful!");

            } else {
                toast.error("Something is wrong...");
            }
        } catch (error) {
            toast.error("There was an error logging in!");
            console.error("There was an error!", error);
        }
    };


    
    return handleUser;
};

export default useUserManagement;
