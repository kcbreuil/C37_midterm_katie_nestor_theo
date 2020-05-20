import React from 'react';

const Book = (props) => {
  // if the book is not truthy, we don't render anything in this component
  // this will usually happen on the first render, when we are still waiting for data
  if (!props.book) {
    return null;
  }
  const title = props.book.volumeInfo.title;
  const author = props.book.volumeInfo.authors;
  const bookImg = props.book.volumeInfo.imageLinks.thumbnail;
  const description = props.book.volumeInfo.description;

  return (
    <div>
      <h1 className="book-day-header">Random Book</h1>
      <div className="book-of-day">
        <div className="book-day-cover">
          <img src={bookImg} alt="" />
        </div>
        <div className="book-day-title">
          <p style={{ fontSize: '22px' }}>{title}</p>
          <div style={{ fontSize: '13px' }}>By : {author}</div>
        </div>
        <div className="book-day-author"></div>
        <div className="book-day-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
