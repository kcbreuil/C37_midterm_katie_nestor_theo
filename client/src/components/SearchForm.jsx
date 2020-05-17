import React from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const [search, setSearch] = useState('love');
//const [apiData, setApiData] = useState([]);

const SearchForm = () => {
  const handleSubmit = (event) => {
    axios.get(`https://localhost:8080/books/${search}`).then();
    event.preventDefault();
    console.log('Entered SearchForm');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Control
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Type something in me!"
        />
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
