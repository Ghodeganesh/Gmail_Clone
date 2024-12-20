import { configureStore } from "@reduxjs/toolkit"
import appReducer  from '../Reducs/appSlice'
const store = configureStore({
    reducer: {
        appslice: appReducer
    }
})

export default store;