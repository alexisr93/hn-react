import React from 'react';
import Story from './Story.js';

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_nav: this.props.currentNav,
      current_page: this.props.currentPage,
      stories: [],
    }
  }

  fetchData() {
    var to_get = '';

    switch(this.props.currentNav) {
      case 'Top':
        to_get = 'topstories';
        break;
      case 'New':
        to_get = 'newstories';
        break;
      case 'Ask':
        to_get = 'askstories';
        break;
      case 'Jobs':
        to_get = 'jobstories';
        break;
      case 'Show':
        to_get = 'showstories';
        break;
      default:
        to_get = 'topstories';
    }

    fetch('https://hacker-news.firebaseio.com/v0/' + to_get + '.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          stories: data
        });
      });
  }
  
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }

  render() {
    var list_of_stories = (
      this.state.stories.slice((this.state.current_page * 1) - 1, this.state.current_page * 20).map(story =>
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
