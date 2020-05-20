import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div className="bookDetails">
      <h1>{detailTitle}</h1>
      <h3>{subTitle}</h3>
      <h2>{author}</h2>
      <img src={imgSrc} alt="book cover" />
      <div className="description">{description}</div>
      <p>Categories: {categories}</p>
      <p>Publisher: {publisher}</p>
      <p>Published Date: {pubDate}</p>
      <p>Pages: {pageCount}</p>
      <a href={preview} target="_blank">
        Preview
      </a>
    </div>
  );
};

export default BookInfo;
