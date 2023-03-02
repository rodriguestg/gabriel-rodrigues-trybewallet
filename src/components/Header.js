import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const ask = expenses.map((element) => {
      const searchValue = Object.entries(element.exchangeRates).map(([key, value]) => {
        console.log(element);
        console.log([key, value]);
        if (key === element.currency) { return value.ask; }
        return false;
      });
      const askValue = searchValue.find((value) => value !== false);
      return parseFloat(askValue) * element.value;
    });
    const sum = ask.reduce((total, numero) => total + numero, 0);
    const totalAsk = sum.toFixed(2);
    return (
      <div>
        <h1 data-testid="email-field">{ email }</h1>
        <p data-testid="total-field">{ totalAsk }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
