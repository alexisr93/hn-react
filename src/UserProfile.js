import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

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

  createMarkup() {
    return {__html: 'about: ' + this.state.about};
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="card my-2">
          <div className="card-body">
            <div className="card-subtitle">
              Profile
            </div>
            <div className="card-text">
              user: {this.state.id}<br/>
              created: {this.state.created}<br/>
              karma: {this.state.karma}<br/>
              <div dangerouslySetInnerHTML={this.createMarkup()} />
              <NavLink to={'/' + this.state.id}>submissions</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
