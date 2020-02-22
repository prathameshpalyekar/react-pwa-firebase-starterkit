import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';

export default class extends Component {
  render() {
    const { children, pageTitle } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <div>
          {children}
        </div>
      </Fragment>
    );
  }
}