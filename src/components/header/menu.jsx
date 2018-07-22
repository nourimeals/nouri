import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './menu.css';

class Menu extends React.Component {
  render() {
    return <div id="menu-div">
      {this.props.user.isSignedIn ? (<a>signout</a>) : (<Link to={'/signin'}>signin</Link>)}
      <Link to='/'>Home</Link>
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
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

