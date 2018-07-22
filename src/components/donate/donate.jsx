import React from 'react';
import { connect } from 'react-redux';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

class Donate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: '',
      amount: '',
      email: '',
      cc: '',
      exp: '',
      cvv: '',
      displayThankYou: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      _id: this.props.user.userId
    });
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
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
      _id: this.state._id,
      amount: this.state.amount,
    }


    fetch('https://nourimeals.herokuapp.com/api/v0/donations', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ displayThankYou: true })
        }
        return res.json()
      })
      .then(json => {
        console.log('donate submit json', json);
        this.setState({
          amount: '',
          cc: '',
          exp: '',
          cvv: '',
          email: ''
        });
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
        <h1>Make a Donation</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input value={this.state.amount} onChange={this.handleInputChange} name="amount" placeholder="Amount" />
          <input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Email" />
          <input value={this.state.cc} onChange={this.handleInputChange} name="cc" placeholder="Credit Card" />
          <input value={this.state.exp} onChange={this.handleInputChange} name="exp" placeholder="Expiration" />
          <input value={this.state.cvv} onChange={this.handleInputChange} name="cvv" placeholder="cvv" />
          <button type="submit"> SUBMIT </button>
        </form>
      </section>

      <section className="sparkle">
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donate);