import React from 'react';

class NavBar extends React.Component {
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
            <li className="nav-item active">
              <a className="nav-link" href="#">Top</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ask</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Jobs</a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#">Show</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
