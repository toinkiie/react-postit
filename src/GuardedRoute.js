import React from 'react'
import { Route, Redirect } from "react-router-dom"
import * as ROUTES from './constants/routes'

const GuardedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('user') !== null
          ? <Component {...props} />
          : <Redirect to={ROUTES.LOGIN} />
  )} />
)

export default GuardedRoute