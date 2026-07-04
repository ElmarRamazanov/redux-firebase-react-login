import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) ?? false,
};

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
    },
    reducers: {
        login: (state, action) => {
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
            state.currentUser = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem("currentUser");
            state.currentUser = false;
        }
    }
});


export const {login, logout} = userSlice.actions;
//export const selectCurrentUser = (state) => state.user.currentUser;
export default userSlice.reducer;