import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      by: '',
      kids: [],
      text: '',
      time: '',
    }
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/item/' + this.state.id + '.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          by: data.by,
          kids: data.kids,
          text: data.text,
          time: data.time,
        });
      });
  }

  createMarkup(){
    return {__html: this.state.text};
  }

  render() {
    return(
      <div>
      <div className="card my-2">
        <div className="card-body">
          <div className="card-subtitle">
            {this.state.by}
          </div>
          <div className="card-text text-muted" dangerouslySetInnerHTML={this.createMarkup()}>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Comment;
