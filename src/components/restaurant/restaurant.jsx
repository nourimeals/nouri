import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: this.props.user.userId,
      mealCost: '',
      patron: '',
      story: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    console.log('target name', e.target.name, 'value', e.target.value)
    if (e.target.name === 'mealCost') {
      this.setState({
        mealCost: e.target.value
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
  }

  render() {
    return <React.Fragment>
        <Header />
        <section className="hero">
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