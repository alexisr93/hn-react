import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import MainBody from './MainBody';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
