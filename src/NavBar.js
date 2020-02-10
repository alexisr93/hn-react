import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="#">HN React</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Top</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">New</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ask</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Jobs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Show</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
