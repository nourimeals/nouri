import React from 'react';
import {connect} from 'react-redux';

import './footer.css';
import logo from '../../images/nouri-logo.png';

class Footer extends React.Component {

  render() {
    return <footer>
        <img src={logo} alt="nouri logo" id="footer-logo"/>
        <small>Terms of Service | Privacy Policy</small>
      </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);