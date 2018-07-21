import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {

  render() {
    return <React.Fragment>
        <section>
          <h1>Help us make the world a better place.</h1>
          <h2>Pay it forward by buying someone a meal.</h2>
          <button>donate</button>
          <div>$1,500 meals served</div>
          <div>$1,489,928 Donation Pool</div>
        </section>

        <section>
          <h3>latest news</h3>
          <div>
            <p>"I was haivng a bad day. I lost my wallet and was really hungry. glas I found out about Hello Burgers and Nouri Meals!</p>
            <small>Annie C</small>
          </div>
          <div>
            <p>Max's Steakhouse joins the Nouri Network!</p>
            <small>Nouri Team</small>
          </div>
        </section>

        <section>
          <h3>participating restaurants</h3>
          <div>
            <h4>Max's Stakehouse</h4>
            <p>12345 NE 85th St</p>
            <p>Seattle, WA</p>
          </div>
          <div>
            <h4>Evelyn's Crepe Shop</h4>
            <p>12345 NE 85th St</p>
            <p>Seattle, WA</p>
          </div>
          <div>
            <h4>Yummy Sushi</h4>
            <p>12345 NE 85th St</p>
            <p>Seattle, WA</p>
          </div>
          <div>
            <h4>Hello Burgers</h4>
            <p>12345 NE 85th St</p>
            <p>Seattle, WA</p>
          </div>
        </section>
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