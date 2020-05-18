import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import faker from 'faker';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import './index.css';
import SearchForm from './components/SearchForm';
import Book from './components/Book';
import About from './components/About';

import './App.css';

const App = () => {
  const [randomBook, setRandomBook] = useState(null);

  useEffect(() => {
    const randomWord = faker.random.word();
    axios.get(`/books/${randomWord}`).then((res) => {
      const firstBook = res.data.items[0];
      setRandomBook(firstBook);
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar fixed="top" />
      <Route exact path="/" component={SearchForm} />
      <Route path="/book">
        <Book book={randomBook} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </BrowserRouter>
  );
};

export default App;
