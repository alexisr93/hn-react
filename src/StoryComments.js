import React from 'react';
import Comment from './Comment';

class StoryComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: window.location.pathname.slice(15),
      kids: [],
    }
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/item/' + this.state.id + '.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          title: data.title,
          url: data.url,
          score: data.score,
          by: data.by,
          age: Math.floor(((Date.now()/1000 - data.time) / 60) / 60),
          num_of_comments: data.descendants,
          kids: data.kids,
          text: data.text,
        });
      });
  }

  render() {
    let kids = []
    this.state.kids.forEach((item) => {
     kids.push(<Comment id={item} />)
    })
    return (
      <div className="container-fluid">
        <div className="card my-2 bg-light">
          <div className="card-body">
            <div className='card-title font-weight-bold'>
              {this.state.title}
            </div>
            <div className='card-subtitle text-muted'>
            {this.state.score} points
            by {this.state.by}
            &nbsp;{this.state.age} hours ago |
            &nbsp;{this.state.num_of_comments} comments
            </div>
          </div>
        </div>
        {kids}
      </div>
    );
  }
}

export default StoryComments;
