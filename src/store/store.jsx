import { combineReducers, configureStore } from '@reduxjs/toolkit'
import bookReducer from './reducer/bookSlice'

const rootReducer = combineReducers({
    bookReducer
})

export const store = configureStore({
  reducer: rootReducer
})
