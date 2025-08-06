import { configureStore } from "@reduxjs/toolkit";
import waterReducer from "./waterSlice";

export const store = configureStore({
    reducer: {
        water: waterReducer,
    }

});
export default store;
