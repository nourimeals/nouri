import React from 'react';
import {Redirect} from 'react-router-dom';
import {
  connect
} from 'react-redux';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import {
  userSignIn,
} from '../../actions/user.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
  }

  handleInputChange(e) {
    if (e.target.name === 'email') {
      this.setState({
        email: e.target.value
      });
    }
    if (e.target.name === 'password') {
      this.setState({
        password: e.target.value
      });
    }
  }

  handleSignInSubmit(e) {
    e.preventDefault();
    console.log('state on submit', this.state);
    fetch('https://nourimeals.herokuapp.com/api/v0/users/signin', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
      .then(res => {
        if (res.status === 200) {
          console.log('Response Status', res);
          this.props.userSignIn({
            isSignedIn: true
          })
          return res.json();
        } else {
          this.props.userSignIn({
            isSignedIn: false
          })
        }
      })
      .then(json => {
        console.log(json.token, 'token here')
        window.sessionStorage.token = json.token;
      })
      .catch(err => {
        this.props.userSignIn({
          isSignedIn: false
        })
      })
  }

  render() {
    return <React.Fragment>
      <Header />
      {this.props.user.isSignedIn ? (
          <Redirect to="/dashboard" />
        ) : (<section className="hero">
        <h1>Sign In to Your Dashboard</h1>
        <form onSubmit={this.handleSignInSubmit}>
          <input placeholder="email" onChange={this.handleInputChange} name="email" />
          <input placeholder="password" onChange={this.handleInputChange} name="password" />
          <button type="submit"> SUBMIT </button>
        </form>
      </section>)}
      <Footer />
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
    userSignIn: json => dispatch(userSignIn(json))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);