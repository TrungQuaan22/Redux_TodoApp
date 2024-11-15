import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";

const store =configureStore({
    reducer: {
        tasks: reducer
    }
})

export default store