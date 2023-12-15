import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
//   token:"",
  name:""
}

export const authSlice = createSlice({
 name: 'authentication',
 initialState: initialStateValue,
 reducers: {
      login: (state,action) =>{
        //   state.token = action.payload.token;
          state.name = action.payload;
        //   state.address = action.payload.address;
      },

    //   logout:(state) =>{
    //     state.token = "";
    //     state.name = "";
    //     state.address = "";
    //   },
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

