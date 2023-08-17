import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASIC_URL = "https://www.googleapis.com/books/v1/volumes"
const API_KEY = "AIzaSyDI-BkYfGNU0Ahhtr2SUtqQaYyXE7jvYYo"

export const fetchBook = createAsyncThunk(
    'book/fetchAll',
    async(dataForm, thunkApi) =>{
        const {categories, search_book, sorting_by} = dataForm
        const category = categories !== 'all' ? `+subject:${categories}` : ''
        try {
            const res = await axios.get(`${BASIC_URL}?q=${search_book}${category}&orderBy=${sorting_by}&maxResults=30&startIndex=0&key=${API_KEY}`);
            return res.data.totalItems ? res.data : []
        } catch (error) {
            return thunkApi.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)
export const fetchBookLoadMore = createAsyncThunk(
    'book/fetchLoadMore',
    async(dataForm, thunkApi) =>{
        const {categories, search_book, sorting_by, page} = dataForm
        const category = categories !== 'all' ? `+subject:${categories}` : ''
        try {
            const res = await axios.get(`${BASIC_URL}?q=${search_book}${category}&orderBy=${sorting_by}&maxResults=30&startIndex=${page}&key=${API_KEY}`);
            return res.data.totalItems ? res.data : {}
        } catch (error) {
            return thunkApi.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)