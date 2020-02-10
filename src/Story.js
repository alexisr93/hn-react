import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'When should I go to sleep',
      domain: 'alexisramirez.net',
      link: '',
      points: '12',
      by: 'alexis',
      age: '2',
      num_of_comments: '300',
      link_to_comments: '',
    }
  }
  render() {
    return (
      <div className="card my-2">
        <div className="card-body">
          <div className="card-subtitle">
            {this.state.headline}
            &nbsp;({this.state.domain})
          </div>
          <div className="card-text text-muted">
            {this.state.points} points
            by {this.state.by}
            &nbsp;{this.state.age} hours ago |
            &nbsp;{this.state.num_of_comments} comments
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
