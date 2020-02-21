import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NabLink
} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar.js';
import MainBody from './MainBody';

class PageBottomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_page: this.props.currentPage,
    }

    this.handleClickFirst = this.handleClickFirst.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickLast = this.handleClickLast.bind(this);
  }

  handleClickFirst() {
    this.setState({
      current_page: 1
    }, () => this.props.changePage(this.state.current_page));
  }

  handleClickPrevious() {
    if (this.state.current_page - 1 > 1) {
      this.setState({
        current_page: this.state.current_page - 1
      }, () => this.props.changePage(this.state.current_page));
    }
  }

  handleClickNext() {
    if (this.state.current_page + 1 < 23) {
      this.setState({
        current_page: this.state.current_page + 1
      }, () => this.props.changePage(this.state.current_page));
    }
  }

  handleClickLast() {
    this.setState({
      current_page: 23
    }, () => this.props.changePage(this.state.current_page));
  }

  render() {
    return (
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
    );
  }
}
class MainBodySwitch extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/top" component={MainBody} />
          <Route path="/new" component={MainBody} />
          <Route path="/ask" component={MainBody} />
          <Route path="/jobs" component={MainBody} />
          <Route path="/show" component={MainBody} />
        </Switch>
      </div>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_nav: 'topstories',
      current_page: 1
    }
    this.handleChangeNav = this.handleChangeNav.bind(this)
    this.handleChangePage = this.handleChangePage.bind(this)
  }

  handleChangeNav(value) {
    this.setState({
      current_nav: value,
      current_page: 1
    });
  }

  handleChangePage(value) {
    this.setState({
      current_page: value
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <NavBar currentNav={this.state.current_nav} changeNav={this.handleChangeNav} />
          <MainBody currentNav={this.state.current_nav} currentPage={this.state.current_page} />
          <PageBottomNav currentPage={this.state.current_page} changePage={this.handleChangePage}/>
        </div>
      </div>
    );
  }
}

export default App;
