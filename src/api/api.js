// import { connect } from 'react-redux';
import { coins } from '../redux/actions';

const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

export default function fetchMoney() {
  return (dispatch) => fetch(ENDPOINT)
    .then((response) => response.json())
    .then((money) => dispatch(coins(money)));
}

// const mapDispatchToProps = (dispatch) => ({
//   loginClick: (state) => dispatch(loginUser(state)),
// });
