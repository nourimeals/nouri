import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route 
    {...rest} 
    render={props => user.isSignedIn ? (<Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    }  
  />
)


const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(PrivateRoute)