import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '../../images/nouri-logo.png';

import './header.css';

class Header extends React.Component {

  render() {
    return <header>
      <img src={logo} alt="nouri logo" id="logo"/>
      <Link to={'/signin'}>signin</Link>
      <a>signout</a>
    </header>
  }
}

const mapStateToProps = state => {
  return {
    
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);