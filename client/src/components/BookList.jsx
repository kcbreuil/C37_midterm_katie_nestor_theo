import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookList = (props) => (
  <div className="bookList">
    {props.books.map((book) => {
      console.log(props.books);
      const title = book.volumeInfo.title;
      const author = (book.volumeInfo.authors || []).join(', ');
      const description = book.volumeInfo.description;
      const subTitle = book.volumeInfo.subtitle;
      let bookImageSrc = '';
      if (book.volumeInfo.imageLinks) {
        bookImageSrc = book.volumeInfo.imageLinks.thumbnail;
      }

      return (
        <div className="book">
          <a id="book_list" />
          <div className="book-image">
            <a href={`/book/${book.id}`}>
              <img src={bookImageSrc} alt="" />
            </a>
          </div>
          <div className="book-details">
            <p style={{ fontSize: '22px' }}>{title}</p>
            <p style={{ fontSize: '18px' }}>{subTitle}</p>
            <div style={{ fontSize: '13px' }}>By : {author}</div>
          </div>
        </div>
      );
    })}
  </div>
);

export default BookList;
