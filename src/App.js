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
        <div className="container-fluid">
          <nav aria-label="Page navigation temp">
            <ul className="pagination">
              <li className="page-item"><a className="page-link text-dark" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">1</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">2</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">4</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">5</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">6</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">7</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">8</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">9</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">10</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">11</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">12</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">13</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">14</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">15</a></li>
              <li className="page-item"><a className="page-link text-dark" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
