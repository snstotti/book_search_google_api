import React, { useEffect, useState } from 'react'
import Header from './Header'
import BookList from './BookList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBook, fetchBookLoadMore } from '../store/reducer/actionCreators'
import Spiner from './Spiner'
import LoadMoreBook from './LoadMoreBook'

const Main = () => {
    const [searchData, setSearchData] = useState({
        search_book: "451",
        categories: "all",
        sorting_by: "newest",
        page: 0
    });
    const setPage = () => {
        setSearchData(prevData => ({
            ...prevData,
            page: prevData.page + 1
        }));
    }
    const dispatch = useDispatch()
    const {totalItems, isLoading} = useSelector(state => state.bookReducer)
    
    useEffect(() => {
        if (searchData.page) {

             dispatch(fetchBookLoadMore(searchData))
        }
    }, [searchData.page]);

    useEffect(() => {

        dispatch(fetchBook(searchData))
    }, [searchData.search_book, searchData.categories, searchData.sorting_by]);


    const getSearchData = (data) => {
        setSearchData(prevData => ({
            ...prevData,
            ...data
        }));
    }
    return (

        <div className="">
            <div className="container">
                <Header getSearchData={getSearchData} />
                {isLoading && <Spiner />}
                <BookList />
                {totalItems && <LoadMoreBook setPage={setPage} isLoading={isLoading} />}
            </div>
        </div>

    )
}

export default Main