import { createSlice } from "@reduxjs/toolkit";

export const adminReducer = createSlice({
    name: 'admins',
    initialState: {
        admins: [
            {
                name: 'example admin',
            password: 'example'
            }
        ],
        isAdminLogged: false
    },
    reducers: {
        push: (state, element) => {
            state.blogs.push(element.payload);
        },
        remove: (state, index) => {
            state.blogs = [
                ...state.blogs.slice(0, index.payload),
                ...state.blogs.slice(index.payload + 1)
            ]
        },
        switchlogin: (state) => {
            state.isAdminLogged = !state.isAdminLogged;
        },
        login:(state) => { state.isAdminLogged = true },
        unlog:(state) => { state.isAdminLogged = false} 
    }
});

export const { push, remove } = adminReducer.actions;
export const { login, unlog, switchlogin } = adminReducer.actions
export default adminReducer.reducer;