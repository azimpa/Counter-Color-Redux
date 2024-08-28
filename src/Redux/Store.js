import { configureStore } from "@reduxjs/toolkit"
import colorReducer from './Color/colorSlice'
import countReducer from './Count/counterSlice'
export default configureStore({
    reducer: {
        color:colorReducer,
        count:countReducer
    }
})