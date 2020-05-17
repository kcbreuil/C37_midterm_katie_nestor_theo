import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import BookList from './BookList';
import ContextDemo from './ContextDemo';

function SearchForm() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(search);
  const [apiData, setApiData] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`/books/${search}`).then((response) => {
      setApiData(response.data.items);
    });
  };

  console.log('api data', apiData);

  return (
    <div className="Home">
      <div style={{ margin: 'auto', maxWidth: 500 }}>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Type something in me!"
                value={search}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
      <BookList books={apiData} />
      <ContextDemo data={apiData} />
    </div>
  );
}

export default SearchForm;
