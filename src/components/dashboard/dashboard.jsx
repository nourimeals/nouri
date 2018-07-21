import React from 'react';
import {connect} from 'react-redux';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Home from '../home/home.jsx';

class Dashboard extends React.Component {

  render() {
    return <React.Fragment>
        <Header />
          <Home />
          <div>SignInUp</div>
          <div>DonateDash</div>
          <div>RestaurantDash</div>
        <Footer />
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