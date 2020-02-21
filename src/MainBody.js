import React from 'react';
import Story from './Story.js';

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_nav: this.props.nav,
      current_page: this.props.currentPage,
      stories: [],
    }
    console.log(this.state.current_nav);
  }

  fetchData() {
    var to_get = '';

    switch(this.state.current_nav) {
      case 'top':
        to_get = 'topstories';
        break;
      case 'new':
        to_get = 'newstories';
        break;
      case 'ask':
        to_get = 'askstories';
        break;
      case 'jobs':
        to_get = 'jobstories';
        break;
      case 'show':
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

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        current_nav: this.props.nav,
        current_page: this.props.currentPage,
      }, () => this.fetchData());
    }

  }

  render() {
    var list_of_stories = (
      this.state.stories.slice(
        ((this.state.current_page - 1) * 20) + parseInt(this.state.current_page) - 1,
        (this.state.current_page * 20) + parseInt(this.state.current_page) - 1)
        .map(story =>
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
