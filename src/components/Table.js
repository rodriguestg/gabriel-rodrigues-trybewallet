import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { remove } from '../redux/actions';

class Table extends Component {
  remove = ({ target }) => {
    const { removeLine } = this.props;
    const line = target.value;
    removeLine(line);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <caption>Tabela de gastos</caption>
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((coin) => (
            <tr key={ coin.id }>
              <td>{ coin.description }</td>
              <td>{ coin.tag }</td>
              <td>{ coin.method }</td>
              <td>{ (Math.round(coin.value * 100) / 100).toFixed(2) }</td>
              <td>
                {Object.entries(coin.exchangeRates).map((option) => {
                  const searchCoin = option[0] === coin.currency ? option[1] : false;
                  return searchCoin.name;
                })}
              </td>
              <td>
                {Object.entries(coin.exchangeRates).map((option) => {
                  const searchCoin = option[0] === coin.currency ? option[1] : false;
                  const { ask } = searchCoin;
                  const total = ask ? ((ask * 100) / 100).toFixed(2) : false;
                  return total;
                })}
              </td>
              <td>
                {Object.entries(coin.exchangeRates).map((option) => {
                  const searchCoin = option[0] === coin.currency ? option[1] : false;
                  const sum = searchCoin.ask * coin.value;
                  const total = searchCoin ? sum.toFixed(2) : false;
                  return total;
                })}
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  type="button"
                  onClick={ this.remove }
                  value={ 0 }
                >
                  Editar
                </button>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ this.remove }
                  value={ coin.id }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  removeLine: (state) => dispatch(remove(state)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeLine: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
