import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    const { Layout } = this.props;
    return (
      <Layout/>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);