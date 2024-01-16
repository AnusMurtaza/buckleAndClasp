import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

const initialStateValue = {
  token:"",
  name:"",
  user_type:""
}

export const authSlice = createSlice({
 name: 'authentication',
 initialState: initialStateValue,
 reducers: {
      login: (state,action) =>{
          state.token = action.payload.token;
          state.name = action.payload.name;
          state.user_type = action.payload.user_type;
          Cookies.set('token', action.payload.token, { expires: 7 });
          Cookies.set('role', action.payload.user_type, { expires: 7 });

          // state.address = action.payload.address;
      },

      logout:(state) =>{
        state.token = "";
        state.name = "";
        state.user_type = "";
        Cookies.remove('token');
        Cookies.remove('role');
        // state.address = "";
      },
    //   isAdminn: (state, action) => {
    //       state.admin = action.payload
    //    },
    //    userDetail: (state, action) => {
    //     state.user = action.payload
    //  },
    },
})


// Action creators are generated for each case reducer function
export const { login, isAdminn ,logout,userDetail} = authSlice.actions

export default authSlice.reducer

