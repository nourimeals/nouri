import React from 'react';
import {connect} from 'react-redux';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

class Donate extends React.Component {

  render() {
    return <React.Fragment>
        <Header />
        <section class="hero">
          <h1>Make a Donation</h1>
          <form>
            <input placeholder="Amount"/>
           <input placeholder="Name"/>
           <input placeholder="Email"/>
           <input placeholder="Credit Card"/>
           <input placehold="Expiration"/>
           <input placehold="cvv"/>
           <button> SUBMIT </button>
          </form>
        </section> 

        <section class= "sparkle">
          <div>
            <h3>You helped feed</h3>
            <h2> 82 people </h2>
          </div>
          <div>
            <h3> You've Donated</h3>
            <h2>$850</h2>
          </div>
        </section>

        <section>
          <div>
            <h3>Latest News</h3>
            <p>"I was having a bad day. I lost my wallet and was really hungry. Glad I found out about Hello Burgers and Nouri Meals!</p>
            <small>Annie C.</small>
          </div>
        </section>

      <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Donate);