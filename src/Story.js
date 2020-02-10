import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'hello',
      link: '',
      points: '',
      by: '',
      age: '',
      num_of_comments: '',
      link_to_comments: '',
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.state.headline}
        </div>
        <div className="row">
        </div>
      </div>
    );
  }
}

export default Story;
