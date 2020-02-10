import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      created: '',
      karma: '',
      about: '',
      submissions: [],
    }
  }
  
  render() {
    return (
      <div>
        user: {this.state.id}&nbsp;
        created: {this.state.created}&nbsp;
        karma: {this.state.karma}&nbsp;
        about: {this.state.about}
        <a href="#">submissions</a>
      </div>
    );
  }
}

export default UserProfile;
