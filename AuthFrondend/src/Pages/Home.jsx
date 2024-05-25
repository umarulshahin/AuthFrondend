import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {

    const user=useSelector((state)=>state.userdata.user)
  return (
    <div className="flex flex-col items-center justify-center font-bold text-xl">
      <p >
        Hello  <span className="text-red-500">{user}</span>
      </p>
      Welcome to Home Page
    </div>
  );
};

export default Home;
