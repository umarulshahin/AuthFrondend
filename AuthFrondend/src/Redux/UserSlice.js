import { createSlice } from "@reduxjs/toolkit";


const UserSlice=createSlice({
     name:'userData',

     initialState:{

        user:'',
        token:null

    },
     reducers:{
        setuserData:(state,action)=>{
            state.user=action.payload
             

        },

        setToken:(state,action)=>{
          state.token=action.payload
        },
        updateToken:(state,action)=>{

            state.token=action.payload

        },
        clearToken:(state,action)=>{
            state.token=null

        }
       
     }

})

export const{setuserData,setToken,updateToken,clearToken}=UserSlice.actions

export default  UserSlice.reducer;
