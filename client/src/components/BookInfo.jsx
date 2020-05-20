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
    <div>
      <div className="book-of-day" style={{ marginTop: 150 }}>
        <div className="book-day-cover">
          <img src={imgSrc} alt="book cover" />
        </div>
        <div className="book-day-title">
          <p style={{ fontSize: '25px' }}>{detailTitle}</p>
          <p style={{ fontSize: '20px' }}>{subTitle}</p>
          <div style={{ fontSize: '13px' }}>By : {author}</div>
        </div>
        <div className="book-day-author">
          <p>{publisher}</p>
          <p>Page Count: {pageCount}</p>
          <p style={{ overflowY: 'scroll', maxHeight: 20 }}>{categories}</p>
          <p>{pubDate}</p>
          <a href={preview} target="_blank">
            Book Link
          </a>
        </div>
        <div className="book-day-description">
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
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
