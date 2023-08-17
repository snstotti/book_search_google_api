import React from 'react'

const BookCard = ({ dataBook }) => {
    const { authors, categories, imageLinks, title } = dataBook
    const placeholder = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
    const image = !imageLinks ? placeholder : imageLinks?.smallThumbnail
    // console.log(autors);
    const categoriesTitle = categories?.length ? categories[0] : 'no category'
    const autorList = authors?.map((a, i) =>{
        const isLast = i === authors.length - 1; 
        const dot = !isLast ? ', ' : '';
        return(
            <span className="m-0" key={i}>{a}{dot}</span>
        )
    } )

    return (
        <div className="col-8 col-md-4 col-lg-3 my-2">
            <div className="card shadow" >
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{categoriesTitle}</h6>

                <h5 className="card-title text-truncate" title={title}>{title}</h5>
                <div className="text-muted">{autorList}</div>
            </div>
        </div>
        </div>
        
    )
}

export default BookCard