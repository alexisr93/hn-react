import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar.js';
import MainBody from './MainBody';
import UserProfile from './UserProfile';
import PageBottomNav from './PageBottomNav';

class MainBodySwitch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <MainBody currentPage={this.props.currentPage} nav="top"/>
          </Route>
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
          <Route path="/user">
            <UserProfile />
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
