import React from 'react';
<<<<<<< HEAD
import {Redirect} from 'react-router-dom';
=======
import jwtDecode from 'jwt-decode';
>>>>>>> cc311a5653909a15852c6e8701f4b5c383822915
import {
  connect
} from 'react-redux';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import {
  userSignIn,
  setCurrentUser,
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

          return res.json();
        } else {
          this.props.userSignIn({
            isSignedIn: false,
          })
        }
      })
      .then(json => {
        console.log('json', json);
        console.log(json.token, 'token here')
        window.sessionStorage.token = json.token;
<<<<<<< HEAD
        this.props.userSignIn({
          isSignedIn: true,
          userId: json.userId,
          isBusinessOwner: json.isBusinessOwner
        })
=======

        const decoded = jwtDecode(json.token)
        this.props.setCurrentUser(decoded)
        console.log(decoded, 'this is decoded')
>>>>>>> cc311a5653909a15852c6e8701f4b5c383822915
      })
      .catch(err => {
        this.props.userSignIn({
          isSignedIn: false,
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
    userSignIn: json => dispatch(userSignIn(json)),
    setCurrentUser: data => dispatch(setCurrentUser(data))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);