import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     email: '',
  //   };
  // }

  render() {
    const { email } = this.props;
    return (
      <div>
        <h1 data-testid="email-field">{ email }</h1>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email });

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
