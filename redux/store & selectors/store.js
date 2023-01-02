import { configureStore } from "@reduxjs/toolkit";
import viewModalSlice from '../slices/viewModal';


const store = configureStore({
    reducer: {
        viewModal: viewModalSlice
    }
})

export default store;