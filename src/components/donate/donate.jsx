import React from 'react';
import {connect} from 'react-redux';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

class Donate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: '',
      amount: ''
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
    if (e.target.name === 'amount') {
      this.setState({
        amount: e.target.value
      });
    }
    if (e.target.name === 'password') {
      this.setState({
        password: e.target.value
      });
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();

    let token = sessionStorage.getItem('json.token');

    var headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('amount', this.state.amount);
    
    fetch('https://nourimeals.herokuapp.com/api/v0/donate/', {
      method: 'POST',
      headers: headers,
    })
    .then(res => {
      return res.json
    })
    .then(json => {
      console.log('donate submit json', json);
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return <React.Fragment>
        <Header />
        <section className="hero">
          <h1>Make a Donation</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input onChange={this.handleInputChange} name="amount" placeholder="Amount"/>
            <input placeholder="Email"/>
            <input placeholder="Credit Card"/>
            <input placehold="Expiration"/>
            <input placehold="cvv"/>
            <button type="submit"> SUBMIT </button>
          </form>
        </section> 

        <section className= "sparkle">
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
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donate);