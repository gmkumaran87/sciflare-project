import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { message: null, status: null, isLoading: false, user: [] },
    reducers: {
        loadUser(state, action) {
            const { countUrl, userUrl } = action.payload;
            state.user = userUrl;
            state.countUrl = countUrl;
        },
        showNotification(state, action) {
            console.log("Before update uiSlice");
            state.message = action.payload.message;
            state.status = action.payload.status;
            state.isLoading = action.payload.isLoading;
        },
        setLoading(state, action) {
            state.isLoading = true;
            state.message = action.payload.message;
        },
        clearNotification(state, action) {
            state.message = null;
            state.status = null;
            state.isLoading = false;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;