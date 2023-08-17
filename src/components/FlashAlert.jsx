import React from 'react'

const FlashAlert = ({text}) => {
  return (
    <div className="alert alert-danger " role="alert">
      {text}
    </div>
  )
}

export default FlashAlert