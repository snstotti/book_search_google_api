import React from 'react'

const LoadMoreBook = ({setPage, isLoading}) => {
const text = isLoading ? 'Loading...' : 'Load More'
  return (
    <div className="my-5 text-center">
        <button 
          onClick={setPage}
          type="button"
          className="btn btn-dark">{text}</button>
    </div>
  )
}

export default LoadMoreBook