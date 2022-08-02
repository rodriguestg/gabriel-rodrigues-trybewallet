// Coloque aqui suas actions
// import { USER_LOGIN } from '../actions/actionTypes';
const USER_LOGIN = 'LOGIN';
export const loginUser = (state) => ({ type: USER_LOGIN, state });

const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
const USER_COINS = 'COINS';
const coins = (state) => ({ type: USER_COINS, state });
export function fetchMoney() {
  // console.log('oi');
  return async (dispatch) => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    dispatch(coins(data));
  };
}

const USER_DESPESA = 'COINS_DESPESA';
const despesa = (state, stateLocal) => ({ type: USER_DESPESA, state, stateLocal });
export function fetchDespesas(stateLocal) {
  // console.log('oi');
  // console.log(stateLocal);
  return async (dispatch) => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    dispatch(despesa(data, stateLocal));
  };
}
