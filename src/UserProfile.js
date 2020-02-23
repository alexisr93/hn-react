import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: window.location.pathname.slice(6),
      created: '',
      karma: '',
      about: '',
      submissions: [],
    }
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/user/' + this.state.id + '.json')
      .then(res => res.json())
      .then(data => {
        let date = new Date(data.created * 1000).toLocaleDateString();

        this.setState({
          created: date,
          karma: data.karma,
          about: data.about,
          submissions: data.submissions,
        });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="row">user: {this.state.id}</div>
          <div className="row">created: {this.state.created}</div>
          <div className="row">karma: {this.state.karma}</div>
          <div className="row">about: {this.state.about}</div>
          <div className="row"><a href="#">submissions</a></div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
