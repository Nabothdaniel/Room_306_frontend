import { configureStore } from "@reduxjs/toolkit";
import UtilSlice from "./UtilSlice";

export const store = configureStore({
    reducer: {
        Util: UtilSlice 
    }
})