import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';

export default class extends Component {
  render() {
    const { children, pageTitle, hideFooter } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <div>
          <div>Side Nav bar</div>
          {children}
          {!hideFooter && <div>Footer</div>}
        </div>
      </Fragment>
    );
  }
}