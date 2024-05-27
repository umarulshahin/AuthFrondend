import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const user = localStorage.getItem("authToken");
  const navigate=useNavigate()
  const handleLogout=()=>{
     localStorage.removeItem('authToken')
     navigate("login/")
  }
  console.log("Header page is working")
  return (
    user && (
      <div>
        <div className="p-6 bg-yellow-100">
          <NavLink to="/">
            <span className="font-bold text-xl mx-4">Home</span>
          </NavLink>
          <span className="font-bold text-xl cursor-pointer" onClick={handleLogout} >Logout</span>
        </div>
      </div>
    )
  );
};

export default Header;
