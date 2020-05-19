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

  return (
    <div className="book-of-day">
      <container>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <img src={bookImg} alt="" />
      </container>
    </div>
  );
};

export default Book;
