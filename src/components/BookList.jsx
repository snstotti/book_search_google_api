import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import BookCard from './BookCard'
import FlashAlert from './FlashAlert'


const BookList = memo(() => {
  const {bookList, totalItems} = useSelector(state => state.bookReducer)
  if (!bookList) {
    return (
      <div className='row justify-content-center mt-4'>
        <FlashAlert text="No books found for this search" />
      </div>
    )
  }
  const list = bookList.map(book => <BookCard key={book.etag} dataBook={book.volumeInfo} />)
  return (
    <div className='row justify-content-center mt-4'>
      <h5 className="">Books found: <span className="badge bg-secondary">{totalItems}</span></h5>
      {list}
    </div>
  )
})

export default BookList