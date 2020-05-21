import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import BookList from './BookList';
import logo from '../icon_2.png';

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
    if (apiData.length === 0) {
      return;
    }
    const url = isFree ? `/books/${search}/free` : `/books/${search}`;
    axios.get(url).then((response) => setApiData(response.data.items));
  }, [isFree]);

  return (
    <div className="Home">
      <img src={logo} style={{ maxWidth: 100, heigh: 'auto' }} />
      <h1>What would you like to learn about today?</h1>
      <div>
        <div>
          <Form onSubmit={handleSubmit} style={{ marginTop: 15 }}>
            <Form.Group>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Tell us all of your secrets..."
                value={search}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          <Button
            className="home-button"
            onClick={toggleAllBooks}
            style={
              isFree
                ? {
                    backgroundColor: '#e3dad0',
                    borderColor: '#e3dad0',
                    color: '#344960'
                  }
                : {
                    backgroundColor: '#344960',
                    borderColor: '#344960',
                    color: '#e3dad0'
                  }
            }
          >
            All
          </Button>
          <Button
            className="home-button"
            onClick={toggleOnlyFreeBooks}
            style={
              isFree
                ? {
                    backgroundColor: '#344960',
                    borderColor: '#344960',
                    color: '#e3dad0'
                  }
                : {
                    backgroundColor: '#e3dad0',
                    borderColor: '#e3dad0',
                    color: '#344960'
                  }
            }
          >
            Only Free
          </Button>
        </div>
      </div>
      <BookList books={apiData} />
    </div>
  );
}

export default SearchForm;
