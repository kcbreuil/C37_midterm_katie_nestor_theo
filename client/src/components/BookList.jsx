import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookList = (props) => (
  <div className="bookList">
    {props.books.map((book) => {
      const title = book.volumeInfo.title;
      const author = (book.volumeInfo.authors || []).join(', ');
      const description = book.volumeInfo.description;
      const bookImageSrc = book.volumeInfo.imageLinks.thumbnail;

      // with destructure
      // const { title, authors, imageLinks } = book.volumeInfo;
      // const author = authors.join(', ')
      // const bookImage = imageLinks.smallThumbnail;

      return (
        <Container>
          <Row>
            <Col>
              <img src={bookImageSrc} alt="" />
            </Col>
            <Col>
              <Row>
                <p>{title}</p>
              </Row>
              <Row>
                <p>{author}</p>
              </Row>
            </Col>
          </Row>
          <Row>
            <p style={{ overflowY: 'scroll' }}>{description}</p>
          </Row>
        </Container>
      );
    })}
  </div>
);

// html
{
  /* <div className="book">
    <div className="book-image">
      <img />
    </div>
    <div className="book-details">
      <p>title</p>
      <p>author</p>
    </div>
    <div className="book-description">
      <p>description</p>
    </div>
</div> */
}

// css

// .book {
//   display: grid;
// }

// .book-image {
//   grid-row: 1 / 2;
//   grid-column: 1;
// }

// .book-details {
//   grid-row: 1 / 2;
//   grid-column: 2;
// }

// .book-description {
//   grid-row: 3;
//   grid-column: 1 / 2
// }

export default BookList;
