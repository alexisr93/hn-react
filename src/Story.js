import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: 'When should I go to sleep',
      domain: 'alexisramirez.net',
      url: '',
      score: '12',
      by: 'alexis',
      age: '2',
      num_of_comments: '300',
      link_to_comments: '',
    }
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/item/' + this.state.id + '.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          title: data.title,
          domain: '',
          url: data.url,
          score: data.score,
          by: data.by,
          age: data.time,
          num_of_comments: data.descendants
        });
      });
  }
  render() {
    return (
      <div className="card my-2">
        <div className="card-body">
          <div className="card-subtitle">
            {this.state.title}
            &nbsp;({this.state.domain})
          </div>
          <div className="card-text text-muted">
            {this.state.score} points
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
