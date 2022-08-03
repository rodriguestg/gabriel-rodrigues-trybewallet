import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
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
          { expenses.map((coin, index) => (
            <tr key={ index }>
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
                  // console.log(ask);
                  const total = ask ? ((ask * 100) / 100).toFixed(2) : false;
                  // console.log(total);
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
              <td>Editar/Excluir</td>
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

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Table);
