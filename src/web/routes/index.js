import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TEMPLATE } from '../template/index';
import Config from '../config';

import HomeRoute from './home';
import AboutUsRoute from './aboutUs';
import ContactUsRoute from './contactUs';
import CartRoute from './cart';

const Routes = [
  HomeRoute,
  AboutUsRoute,
  ContactUsRoute,
  CartRoute,
];

export default () => (
  <Switch>
    {Routes.map((route, index) => {
      const { Component, Container, path, title, exact, templateType, hideFooter = false } = route;
      const Template = TEMPLATE[templateType || Config.DEFAULT_TEMPLATE];
      return (
        <Route
          key={index}
          exact={exact}
          path={path}
          render={props => (
            <Template pageTitle={title} hideFooter={hideFooter}>
              {Container ?
                <Container props={props} Layout={Component} /> :
                <Component props={props} />
              }
            </Template>
          )}
        />
      )
    })}
  </Switch>
);