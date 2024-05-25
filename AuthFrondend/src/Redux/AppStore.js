
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";



const Store = configureStore({

    reducer:{
       userdata:UserReducer

    }
})

export default Store;