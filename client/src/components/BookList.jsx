import React from 'react';

const BookList = (props) => (
  <div className="bookList">
    {props.books.map((book) => {
      const title = book.volumeInfo.title;
      const author = (book.volumeInfo.authors || []).join(', ');
      const description = book.volumeInfo.description;
      const bookImageSrc = book.volumeInfo.imageLinks.smallThumbnail;

      // with destructure
      // const { title, authors, imageLinks } = book.volumeInfo;
      // const author = authors.join(', ')
      // const bookImage = imageLinks.smallThumbnail;

      return (
        <div className="book">
          <p>Title: {title}</p>
          <p>Author: {author}</p>
          <p>Description: {description}</p>
          <img src={bookImageSrc} alt="" />
        </div>
      );
    })}
  </div>
);

export default BookList;
