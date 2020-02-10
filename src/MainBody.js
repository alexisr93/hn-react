import React from 'react';
import Story from './Story.js';

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    }
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          stories: data
        });
      });
  }
  render() {
    var list_of_stories = (
      this.state.stories.slice(0, 20).map(story =>
        <Story key={story} id={story}></Story>
      )
    )

    return (
      <div className="container-fluid">
        {list_of_stories}
      </div>
    );
  }
}

export default MainBody;
