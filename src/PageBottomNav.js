import React from 'react';

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

export default PageBottomNav;
