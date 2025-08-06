import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    glasses: 0,
};

const waterSlice = createSlice({
    name: "water",
    initialState,
    reducers: {
        increment: (state) => {
            if (state.glasses < 10) state.glasses += 1;
        },
        decrement: (state) => {
            if (state.glasses > 0) state.glasses -= 1;
        },
    },
});
export const { increment, decrement } = waterSlice.actions;
export default waterSlice.reducer;