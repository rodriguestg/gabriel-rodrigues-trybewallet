import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDespesas, fetchMoney } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      number: 0.00,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    };
  }

  componentDidMount() {
    const { fetchMoneyDispatch } = this.props;
    fetchMoneyDispatch();
  }

  inputState = ({ target }) => {
    // console.log(target);
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  add = () => {
    const { fetchDespesasDispatch } = this.props;
    fetchDespesasDispatch(this.state);
    this.setState({
      number: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { currencies } = this.props;
    const { tag } = this.state;
    return (
      <div>
        <form>
          <input
            data-testid="value-input"
            name="number"
            id="1"
            type="number"
            onChange={ this.inputState }
          />
          <input
            data-testid="description-input"
            name="description"
            id="2"
            type="text"
            onChange={ this.inputState }
          />
          <select
            data-testid="currency-input"
            name="currency"
            onChange={ this.inputState }
          >
            {
              currencies.map((coin) => <option key={ coin }>{ coin }</option>)
            }
          </select>
          <select data-testid="method-input" name="method" onChange={ this.inputState }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
          <select data-testid="tag-input" name="tag" onChange={ this.inputState }>
            <option value={ tag }>Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          <button type="reset" onClick={ this.add }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  fetchMoneyDispatch: () => dispatch(fetchMoney()),
  fetchDespesasDispatch: (state) => dispatch(fetchDespesas(state)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchMoneyDispatch: PropTypes.func.isRequired,
  fetchDespesasDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
