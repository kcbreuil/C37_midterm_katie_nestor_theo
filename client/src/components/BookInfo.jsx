import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const BookInfo = () => {
  const [apiData, setApiData] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      //   const results = await
      axios
        .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((response) => {
          setApiData(response.data.volumeInfo);
          console.log(response.data);
        });
    };
    getData();
  }, [id]);

  const author = apiData.authors;
  const detailTitle = apiData.title;
  const subTitle = apiData.subtitle;
  let imgSrc = '';
  if (apiData.imageLinks) {
    imgSrc = apiData.imageLinks.thumbnail;
  }
  const description = apiData.description;
  const categories = apiData.categories;
  const publisher = apiData.publisher;
  const pageCount = apiData.pageCount;
  const pubDate = apiData.publishedDate;
  const preview = apiData.previewLink;

  return (
    <Card
      className="bookDetails"
      style={{ width: '18rem', backgroundColor: '#ddc9be' }}
    >
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{detailTitle}</Card.Title>
        <Card.Title>{subTitle}</Card.Title>
        <Card.Title>{author}</Card.Title>
        <Card.Text>
          <p>{description}</p>
        </Card.Text>
      </Card.Body>
      <ListGroup
        className="list-group-flush"
        style={{ backgroundColor: '#ddc9be' }}
      >
        <ListGroupItem>{categories}</ListGroupItem>
        <ListGroupItem>{publisher}</ListGroupItem>
        <ListGroupItem>{pubDate}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href={preview} target="_blank">
          Book Link
        </Card.Link>
        <Card.Link href="#">Ebook Link</Card.Link>
      </Card.Body>
    </Card>
  );

  //   return (
  //     <div className="bookDetails">
  //       <h1>{detailTitle}</h1>
  //       <h3>{subTitle}</h3>
  //       <h2>{author}</h2>
  //       <img src={imgSrc} alt="book cover" />
  //       <p className="description">{description}</p>
  //       <p>Categories: {categories}</p>
  //       <p>Publisher: {publisher}</p>
  //       <p>Published Date: {pubDate}</p>
  //       <p></p>
  //       <a href={preview} target="_blank">
  //         Preview
  //       </a>
  //     </div>
  //   );
};

export default BookInfo;
