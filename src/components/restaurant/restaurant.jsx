import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import './restaurant.css';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: this.props.user.userId,
      mealCost: 0,
      patron: '',
      story: '',
      displayThankYou: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.toggleThankYou = this.toggleThankYou.bind(this);
  }

  // toggleThankYou() {
  //   this.setState({
  //     displayThankYou: !this.state.displayThankYou
  //   });
  // }

  handleInputChange(e) {
    if (e.target.name === 'mealCost') {
      this.setState({
        mealCost: parseInt(e.target.value, 10)
      });
    }
    if (e.target.name === 'patron') {
      this.setState({
        patron: e.target.value
      });
    }
    if (e.target.name === 'story') {
      this.setState({
        story: e.target.value
      });
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log('state before meal form subit', this.state);

    let token = sessionStorage.getItem('token');

    console.log('Authorization', token);

    var headers = new Headers({
      'Authorization': token,
      'Content-Type': 'application/json'
    });


    let body = {
      restaurant: this.state.restaurant,
      mealCost: this.state.mealCost,
      patron: this.state.patron,
      story: this.state.story
    }
    
    fetch('https://nourimeals.herokuapp.com/api/v0/meals', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
    .then(res => {
      if (res.status === 200) {
        console.log('status is', res.status);
        this.setState({displayThankYou: true})
      }
      return res.json()
    })
    .then(json => {
      console.log('meals submit json', json);
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return <React.Fragment>
        <Header />
        <section className="hero">
          {this.state.displayThankYou ? (<p>Thank you so much for your donation! Please check your email for your confirmation.</p>) : (<div></div>)}
          <h1>Submit a Receipt/Meal Traction</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input onChange={this.handleInputChange} name="mealCost" placeholder="Meal Cost"/>
            <input onChange={this.handleInputChange} name="patron" placeholder="patron"/>
            <textarea onChange={this.handleInputChange} name="story"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </section>
      <Footer/>
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);