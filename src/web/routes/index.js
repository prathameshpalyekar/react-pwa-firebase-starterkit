import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeRoute from './home';

const Routes = [
  HomeRoute,
];

export default () => (
  <Switch>
    {Routes.map((route, index) => {
      const { component, Container, path, title, exact, showNavbar } = route;
      return (
        <Route
          exact={exact}
          path={path}
          render={props => (
            <Container Layout={component} />
          )}
        />
      )
    })}
  </Switch>
);