import React from 'react';
import {connect} from 'react-redux';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

class Restaurant extends React.Component {

  render() {
    return <React.Fragment>
        <Header/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);