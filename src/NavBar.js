import React from 'react';
import {
  NavLink
} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_nav: this.props.current_nav
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">HN React</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-link">
              <NavLink to="/top">Top</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/new">New</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/ask">Ask</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/show">Show</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
