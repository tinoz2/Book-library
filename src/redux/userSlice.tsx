import { createSlice } from '@reduxjs/toolkit'
import { listOfBooks } from '../types/types'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState: listOfBooks = []

export const userSlice = createSlice({
    name: 'booksData',
    initialState,
    reducers: {
        addToList: (state, action) => {
            const newState = [...state, action.payload]
            const notify = () => toast.success('🦄 Added to favourite!', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            notify()
            return newState
        },
        removeToList: (state, action) => {
            const bookIdToRemove = action.payload;
            const filteredBooks = state.filter((book) => book.id !== bookIdToRemove);
            const notify = () => toast.error('🦄 Removed from favourite!', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            notify()
            return filteredBooks
        },
    }
})

export const { addToList, removeToList } = userSlice.actions
export default userSlice.reducer
