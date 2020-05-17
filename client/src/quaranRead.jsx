import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import SearchForm from './components/SearchForm';
import { Container } from 'react-bootstrap';

import './App.css';

const App = () => {
  // const [serverMessage, setServerMessage] = useState('');

  const fetchData = () => {};
  fetch('');
  //     .then((response) => response.json())
  //     .then((data) => setServerMessage(data.message));
  // };

  // useEffect(fetchDemoData, []);

  // return (
  //   <AppContextProvider>
  //     <div id="demo">
  //       <h3>Hello from client/src/App.js</h3>
  //       <ContextDemo />
  //       <h3>{serverMessage}</h3>
  //     </div>
  //   </AppContextProvider>
  return (
    <Container>
      <SearchForm />
    </Container>
  );
};

export default App;
