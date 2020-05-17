import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import ContextDemo from './ContextDemo';

function SearchForm() {
  const [search, setSearch] = useState('Happy');
  const [query, setQuery] = useState(search);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`https://localhost:8080/books/${search}`);
      console.log('inside getData', result.data);
      setApiData(result.data);
    };
    getData();
  }, [query]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
  };

  return (
    <div className="Home">
      <div style={{ backgroundColor: 'Orange', padding: 15 }}>
        <container>
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
        </container>
      </div>
      <ContextDemo data={apiData} />
    </div>
  );
}
//axios.get(`https://localhost:8080/books/${search}`).then();

export default SearchForm;
