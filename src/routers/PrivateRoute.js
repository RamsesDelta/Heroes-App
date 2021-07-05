import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoute = ({
    isAutheticated,
    component:Component,
    ...rest
}) => {

    localStorage.setItem('lastPath',rest.location.pathname)
    
    return (
      <Route {...rest}
      component={ (props) =>(
        (isAutheticated)
            ? (<Component {...props}/>)
            : (<Redirect to="/login" />)

      )}
      />
    )
}

PrivateRoute.propTypes = {
    isAutheticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}