import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMoney } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { fetchMoneyDispatch } = this.props;
    fetchMoneyDispatch();
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    currencies.splice(1, 1);
    return (
      <div>
        <form>
          <input
            data-testid="value-input"
            name="value"
            type="number"
          />
          <input
            data-testid="description-input"
            name="description"
            type="text"
          />
          <select data-testid="currency-input" name="currency">
            {
              currencies.map((coin) => <option key={ coin }>{ coin }</option>)
            }
          </select>
          <select data-testid="method-input" name="method">
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
          <select data-testid="tag-input" name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  fetchMoneyDispatch: () => dispatch(fetchMoney()),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchMoneyDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
