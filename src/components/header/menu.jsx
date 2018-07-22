import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import {
  userSignIn,
} from '../../actions/user.js';

import './menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.clearSessionStorage = this.clearSessionStorage.bind(this);
  }

  componentDidMount() {
    let token = sessionStorage.getItem('json.token');
    if (token) {
      this.props.userSignIn({isSignedIn: true})
    }
    console.log('is signed in', this.props.user.isSignedIn);
  }

  clearSessionStorage() {
    sessionStorage.removeItem('json.token');
    this.props.userSignIn({isSignedIn: false})
  }

  render() {
    return <div id="menu-div">
      <Link to='/'>Home</Link>
      <Link to='/donate'>Donate</Link>
      <Link to='/restaurants'>Restaurants</Link>
      {this.props.user.isSignedIn ? (
      <a onClick={this.clearSessionStorage}>signout</a>
      ) : (
      <div className="signin-signout">
        <Link to={'/signin'}>signin</Link>
        <Link to={'/signup'}>signup</Link>
      </div>
      )}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    userSignIn: json => dispatch(userSignIn(json))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

