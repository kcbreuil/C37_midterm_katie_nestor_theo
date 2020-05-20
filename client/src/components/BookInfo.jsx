import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookInfo = () => {
  const [apiData, setApiData] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      console.log(result);
    };
    getData();
  }, [id]);
  return (
    <>
      <h1>I am a banana</h1>
    </>
  );
};

export default BookInfo;
