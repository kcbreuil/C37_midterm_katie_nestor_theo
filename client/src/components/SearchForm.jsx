import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import BookList from './BookList';
import ContextDemo from './ContextDemo';

function SearchForm() {
  const [search, setSearch] = useState('');
  const [apiData, setApiData] = useState([]);
  const [isFree, setIsFree] = useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = isFree ? `/books/${search}/free` : `/books/${search}`;
    axios.get(url).then((response) => {
      setApiData(response.data.items);
    });
  };

  const toggleAllBooks = () => setIsFree(false);

  const toggleOnlyFreeBooks = () => setIsFree(true);

  useEffect(() => {
    console.log('begin use effect');
    if (apiData.length === 0) {
      return;
    }
    console.log('making request');
    const url = isFree ? `/books/${search}/free` : `/books/${search}`;
    axios.get(url).then((response) => setApiData(response.data.items));
  }, [isFree]);

  return (
    <div className="Home">
      <h1>How are you feeling today?</h1>
      <div>
        <div>
          <Button
            onClick={toggleAllBooks}
            variant={isFree ? 'secondary' : 'primary'}
          >
            All
          </Button>
          <Button
            onClick={toggleOnlyFreeBooks}
            variant={isFree ? 'primary' : 'secondary'}
          >
            Only Free
          </Button>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Type your Mood."
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
