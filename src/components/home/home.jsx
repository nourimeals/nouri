import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import './home.css';

class Home extends React.Component {

  render() {
    return <React.Fragment>
        <Header />
        <section className="hero">
          <h1>Help us make the world a better place.</h1>
          <h2>Pay it forward by buying someone a meal.</h2>
          <Link to='/signin'><button>donate</button></Link>
          <div className="stats">$1,500 meals served</div>
          <div className="stats">$1,489,928 Donation Pool</div>
        </section>

        <section>
          <h3>latest news</h3>
          <div>
            <p>"I was haivng a bad day. I lost my wallet and was really hungry. glas I found out about Hello Burgers and Nouri Meals!<span> - Annie C.</span></p>
          </div>
          <div>
            <p>Max's Steakhouse joins the Nouri Network!<span> - Nouri Team</span></p>
          </div>
        </section>

        <section className="sparkle">
          <h3>participating restaurants</h3>
          <div className="business-info">
            <h4>Max's Stakehouse</h4>
            <p>12345 NE 85th St</p>
            <p>Seattle, WA</p>
          </div>
          <div className="business-info">
            <h4>Evelyn's Crepe Shop</h4>
            <p>12345 NE 85th St</p>
            <p>Seattle, WA</p>
          </div>
          <div className="business-info">
            <h4>Yummy Sushi</h4>
            <p>12345 NE 85th St</p>
            <p>Seattle, WA</p>
          </div>
          <div className="business-info">
            <h4>Hello Burgers</h4>
            <p>12345 NE 85th St</p>
            <p>Seattle, WA</p>
          </div>
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);