import { createSlice } from "@reduxjs/toolkit";


export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        value: []
    },
    reducers: {
        push: (state, element) => {
            state.value.push(element);
        },
        remove: (state, index) => {
            state.value = [
                ...state.value.slice(0, index.payload),
                ...state.value.slice(index.payload + 1)
            ]
        }
    }
});

export const { push, remove } = basketSlice.actions;
export default basketSlice.reducer;