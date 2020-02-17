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
    this.handleClickPage = this.handleClickPage.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
  }

  handleChangeNav(value) {
    this.setState({
      current_nav: value,
      current_page: 1
    });
  }

  handleClickPage(event) {
    this.setState({
      current_page: event.target.id
    });
  }

  handleClickPrevious() {
    this.setState({
      current_page: this.state.current_page - 1
    });
  }

  handleClickNext() {
    this.setState({
      current_page: this.state.current_page + 1
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
                    onClick={this.handleClickPrevious}
                  >
                  Previous
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                    id="1"
                    onClick={this.handleClickPage}
                  >
                  1
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                    id="2"
                    onClick={this.handleClickPage}
                  >
                  2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                    id="3"
                    onClick={this.handleClickPage}
                  >
                  3
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                    id="4"
                    onClick={this.handleClickPage}
                  >
                  4
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                    id="5"
                    onClick={this.handleClickPage}
                  >
                  5
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                    id="6"
                    onClick={this.handleClickPage}
                  >
                  6
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                    onClick={this.handleClickNext}
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
