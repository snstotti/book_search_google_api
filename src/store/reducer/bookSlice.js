import { createSlice } from '@reduxjs/toolkit'
import { fetchBook } from './actionCreators';
import { fetchBookLoadMore } from './actionCreators';

const initialState = {
    bookList: [],
    totalItems: 0,
    isLoading: false,
    error: ''
  }

  export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
    },
    extraReducers:{
        [fetchBook.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = ''
            state.bookList = action.payload.items;
            state.totalItems = action.payload.totalItems;
        },
        [fetchBook.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchBook.rejected.type]: (state,  action) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [fetchBookLoadMore.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = ''
            state.bookList.push(...action.payload.items);
            state.totalItems = action.payload.totalItems;
        },
        [fetchBookLoadMore.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchBookLoadMore.rejected.type]: (state,  action) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
  })
  
  export const bookActions = bookSlice.actions
  
  export default bookSlice.reducer