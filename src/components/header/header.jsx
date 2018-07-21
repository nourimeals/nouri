import React from 'react';
import {connect} from 'react-redux';
import logo from '../../images/nouri-logo.png';

import './header.scss';

class Header extends React.Component {

  render() {
    return <header>
      <img src={logo} alt="nouri logo" id="logo"/>
      <div>signin</div>
      <div>signout</div>
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