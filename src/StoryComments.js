import React from 'react';

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
          kids: data.kids
        });
      });
  }

  render() {
    let kids = []
    this.state.kids.forEach((item) => {
     kids.push(<li> {item} </li>)
    })
    return (
      <div>
        {kids}
      </div>
    );
  }
}

export default StoryComments;
