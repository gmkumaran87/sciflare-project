import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        login(state, action) {
            console.log("Updating login sate");
            state.isLoggedIn = true;
            //state.user = action.payload.user;
        },
        logout(state, action) {
            state.isLoggedIn = false;
        },
        register(state, action) {},
    },
});

export const authActions = authSlice.actions;
export default authSlice;