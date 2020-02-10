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
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">4</a></li>
              <li className="page-item"><a className="page-link" href="#">5</a></li>
              <li className="page-item"><a className="page-link" href="#">6</a></li>
              <li className="page-item"><a className="page-link" href="#">7</a></li>
              <li className="page-item"><a className="page-link" href="#">8</a></li>
              <li className="page-item"><a className="page-link" href="#">9</a></li>
              <li className="page-item"><a className="page-link" href="#">10</a></li>
              <li className="page-item"><a className="page-link" href="#">11</a></li>
              <li className="page-item"><a className="page-link" href="#">12</a></li>
              <li className="page-item"><a className="page-link" href="#">13</a></li>
              <li className="page-item"><a className="page-link" href="#">14</a></li>
              <li className="page-item"><a className="page-link" href="#">15</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
