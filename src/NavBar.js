import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_nav: this.props.current_nav
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.changeNav(event.target.id);
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
            <li className="nav-item active">
              <a className="nav-link" href="#" id="Top" onClick={this.handleClick}>Top</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="New" onClick={this.handleClick}>New</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="Ask" onClick={this.handleClick}>Ask</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="Jobs" onClick={this.handleClick}>Jobs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="Show" onClick={this.handleClick}>Show</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
