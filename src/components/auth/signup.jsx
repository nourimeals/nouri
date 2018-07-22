import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import './auth.css';

import {
  userSignUp,
} from '../../actions/user.js';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      password2: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
  }

  handleInputChange(e) {
    if(e.target.name === 'fname'){
      this.setState({fName: e.target.value});
    }
    if(e.target.name === 'lname'){
      this.setState({lName: e.target.value});
    }
    if (e.target.name === 'email') {
      this.setState({email: e.target.value});
    }
    if (e.target.name === 'password') {
      this.setState({password: e.target.value});
    }
    if (e.target.name === 'password2') {
      this.setState({password2: e.target.value});
    }
  }

  handleSignUpSubmit(e){
    e.preventDefault();
    console.log('state on submit', this.state);
    fetch('https://nourimeals.herokuapp.com/api/v0/users', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          fname: this.state.fname,
          lname: this.state.lname,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        })
      })
      .then(res => {
        if (res.status === 200) {
          console.log('Response Status', res.status);
          this.props.userSignUp({
            isSignedUp: true
          })
        } else {
          this.props.userSignUp({
            isSignedUp: false
          })
        }
      })
      .catch(err => {
        this.props.userSignUp({
          isSignedUp: false
        })
      })
  }


  render() {
    return <React.Fragment>
        <Header />
        {this.props.user.isSignedUp ? (
          <section className="hero">
            <h1>Thank you for signing up!</h1>
            <Link to={'/signin'}>
              <button>Sign in to your account</button>
            </Link>
          </section>
        ) : (
          <section className="hero">
          <h1>Sign Up </h1>
          <form onSubmit={this.handleSignUpSubmit}>
          <input placeholder = "first name" onChange={this.handleInputChange} name="fname"/>
          <input placeholder = "last name" onChange={this.handleInputChange} name="lname"/>
          <input placeholder="email" onChange={this.handleInputChange} name="email"/>
           <input placeholder="password" onChange={this.handleInputChange} name="password"/>
           <input placeholder="password2" onChange={this.handleInputChange} name="password2"/>
           <button type="submit"> SUBMIT </button>
          </form>
          </section> 
        )}
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
    userSignUp: json => dispatch(userSignUp(json))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);