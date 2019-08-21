import React from 'react';
import './App.css';

// Components
import NavBar from './components/NavBar';
import Events from './components/Events';


const App: React.FC = () => {
  
  return (
    <div className="App">
      <NavBar />
      <Events />
    </div>
  );
}

export default App;
