import React from 'react';

const Book = (props) => {
  // if the book is not truthy, we don't render anything in this component
  // this will usually happen on the first render, when we are still waiting for data
  if (!props.book) {
    return null;
  }

  return <h1>{props.book.volumeInfo.title}</h1>;
};

export default Book;
