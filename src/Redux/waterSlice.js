import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    glasses: 0,
    dailyGoal: 8, // for progress bar
    weeklyData: [0, 0, 0, 0, 0, 0, 0], // for weekly graph (7 days)
    dayIndex: new Date().getDay(),
};

const waterSlice = createSlice({
    name: "water",
    initialState,
    reducers: {
        increment: (state) => {
            if (state.glasses < 10) {
                state.glasses += 1;
                state.weeklyData[state.dayIndex] = state.glasses;
            }
        },
        decrement: (state) => {
            if (state.glasses > 0) {
                state.glasses -= 1;
                state.weeklyData[state.dayIndex] = state.glasses;
            }
        },
        resetToday: (state) => {
            state.glasses = 0;
            state.weeklyData[state.dayIndex] = 0;
        },
    },
});
export const { increment, decrement, resetToday } = waterSlice.actions;
export default waterSlice.reducer;