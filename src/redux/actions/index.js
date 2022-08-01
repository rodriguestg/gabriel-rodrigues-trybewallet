// Coloque aqui suas actions
// import { USER_LOGIN } from '../actions/actionTypes';
const USER_LOGIN = 'LOGIN';
export const loginUser = (state) => ({ type: USER_LOGIN, state });

const USER_COINS = 'COINS';
const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
const coins = (state) => ({ type: USER_COINS, state });
export function fetchMoney() {
  // console.log('oi');
  return async (dispatch) => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    dispatch(coins(data));
  };
}
