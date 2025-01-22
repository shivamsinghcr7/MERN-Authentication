import { createSlice } from "@reduxjs/toolkit";


//check userInfo for local storage if no userInfo is present it returns NULL.
const initialState = {
    userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        // setting up userInfo(details) to local storage
        setCredentials : (state, action)  =>{
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },

        // clearing userInfo on logout
        logoutCredentials : (state) =>{
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    }
})

export const {setCredentials, logoutCredentials} = authSlice.actions;

export default authSlice.reducer;