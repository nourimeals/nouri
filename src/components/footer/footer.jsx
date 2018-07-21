import React from 'react';
import {connect} from 'react-redux';

class Footer extends React.Component {

  render() {
    return <React.Fragment>
        <div>Nouri Meals</div>
        <div>Terms of Service</div>
      </React.Fragment>
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