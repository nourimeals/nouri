import React from 'react';
import {connect} from 'react-redux';

import Donate from '../donate/donate.jsx';
import Restaurant from '../restaurant/restaurant.jsx';

class Dashboard extends React.Component {

  render() {
    return <React.Fragment>
        <Donate />
        <Restaurant />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);