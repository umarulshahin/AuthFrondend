import { createSlice } from "@reduxjs/toolkit";


const UserSlice=createSlice({
     name:'userData',

     initialState:{

        user:''
    },
     reducers:{
        setuserData:(state,action)=>{
            state.user=action.payload
             

        }
     }

})

export const{setuserData}=UserSlice.actions

export default  UserSlice.reducer;
