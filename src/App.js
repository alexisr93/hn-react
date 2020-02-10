import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import MainBody from './MainBody';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_nav: 'topstories',
      current_page: 1
    }
    this.handleChangeNav = this.handleChangeNav.bind(this);
  }

  handleChangeNav(value) {
    this.setState({
      current_nav: value,
      current_page: 1
    });
  }

  handleClickPage(page) {
    this.setState({
      current_page: page
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <NavBar currentNav= {this.state.current_nav} changeNav={this.handleChangeNav} />
          <MainBody currentNav={this.state.current_nav} currentPage={this.state.current_page} />
          <div className="container-fluid">
            <nav aria-label="Page navigation temp">
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                  >
                  Previous
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                  >
                  1
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                  >
                  2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                  >
                  3
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                  >
                  6
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                  >
                  5
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                  >
                  6
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                  >
                  Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
