import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';

import Menu from './menu.jsx';

import logo from '../../images/nouri-logo.png';

import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuToggle: false
    }

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    this.setState({menuToggle: !this.state.menuToggle});
    console.log('menu toggled', this.state.menuToggle);
  }

  render() {
    return <header>
      <img src={logo} alt="nouri logo" id="logo"/>
      <button id="menu-toggle" onClick={this.menuToggle}>Menu</button>
      {this.state.menuToggle ? (
        <Menu />
      ) : (
        <div></div>
      )}
    </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);