import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';

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
  return <NavBar />;
};

export default App;
