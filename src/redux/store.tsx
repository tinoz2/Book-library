import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './userSlice'

export const store = configureStore({
    reducer: {
        booksData: booksReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;

export default store;