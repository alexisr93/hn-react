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
    this.handleClickFirst = this.handleClickFirst.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickLast = this.handleClickLast.bind(this);
  }

  handleChangeNav(value) {
    this.setState({
      current_nav: value,
      current_page: 1
    });
  }

  handleClickFirst() {
    this.setState({
      current_page: 1
    });
  }

  handleClickPrevious() {
    if (this.state.current_page - 1 > 1) {
      this.setState({
        current_page: this.state.current_page - 1
      });
    }
  }

  handleClickNext() {
    if (this.state.current_page + 1 < 23) {
      this.setState({
        current_page: this.state.current_page + 1
      });
    }
  }

  handleClickLast() {
    this.setState({
      current_page: 23
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
                    onClick={this.handleClickFirst}
                  >
                  First
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                    id="1"
                    onClick={this.handleClickPrevious}
                  >
                  Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a
                    className="page-link bg-secondary border-secondary"
                    href="#"
                  >
                  {this.state.current_page}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                    id="6"
                    onClick={this.handleClickNext}
                  >
                  Next
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                    onClick={this.handleClickLast}
                  >
                  Last
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
