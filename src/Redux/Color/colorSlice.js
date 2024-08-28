// colorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: "color",
    initialState: {
        value: "#ffffff" // default color
    },
    reducers: {
        change_color: (state, action) => {
            state.value = action.payload.color;
        }
    }
});

export const { change_color } = colorSlice.actions;
export default colorSlice.reducer;
