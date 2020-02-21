import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/top">
            <MainBody currentPage={this.props.currentPage} nav="top"/>
          </Route>
          <Route path="/new">
            <MainBody currentPage={this.props.currentPage} nav="new"/>
          </Route>
          <Route path="/ask">
            <MainBody currentPage={this.props.currentPage} nav="ask"/>
          </Route>
          <Route path="/jobs">
            <MainBody currentPage={this.props.currentPage} nav="jobs"/>
          </Route>
          <Route path="/show">
            <MainBody currentPage={this.props.currentPage} nav="show"/>
          </Route>
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
    this.handleChangePage = this.handleChangePage.bind(this)
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
          <Router>
            <NavBar />
            <MainBodySwitch currentPage={this.state.current_page}></MainBodySwitch>
            <PageBottomNav currentPage={this.state.current_page} changePage={this.handleChangePage}/>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
