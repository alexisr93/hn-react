import React from 'react';
import Story from './Story';

class Submissions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: window.location.pathname.slice(13),
      submissions: [],
    }
  }
  
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/user/' + this.state.id + '.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          submissions: data.submitted,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.submissions}
      </div>
    );
  }
}
export default Submissions;
