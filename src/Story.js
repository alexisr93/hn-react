import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: '',
      domain: '',
      url: '',
      score: '',
      by: '',
      age: '',
      num_of_comments: '',
      link_to_comments: '',
    }
  }

  extractHostname(url) {
    var hostname;
    if (typeof url !== 'string') {
      return 'news.ycombinator.com'
    }
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
    return hostname;
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/item/' + this.state.id + '.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          title: data.title,
          domain: this.extractHostname(data.url),
          url: data.url,
          score: data.score,
          by: data.by,
          age: Math.floor(((Date.now()/1000 - data.time) / 60) / 60),
          num_of_comments: data.descendants
        });
      });
  }

  render() {
    return (
      <div className="card my-2">
        <div className="card-body">
          <div className="card-subtitle">
            {this.state.title}&nbsp;
            <a href={this.state.domain}>({this.state.domain})</a>
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
