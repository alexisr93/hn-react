import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      time: '',
      text: '',
      replies: [],
    }
  }

  render() {
    return(
      <div>
      </div>
    );
  }
}

export default Comment;
