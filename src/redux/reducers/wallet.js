// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'COINS': {
    const coins = Object.keys(action.state).filter((currencie) => currencie !== 'USDT');
    return { ...state, currencies: coins };
  }
  case 'COINS_DESPESA':
    return { ...state,
      expenses: [...state.expenses, { id: state.expenses.length,
        value: action.stateLocal.number,
        description: action.stateLocal.description,
        currency: action.stateLocal.currency,
        method: action.stateLocal.method,
        tag: action.stateLocal.tag,
        exchangeRates: action.state,
      }] };
  case 'REMOVE': {
    const line = Object.entries(state.expenses).map(([, value]) => {
      if (value.id !== parseFloat(action.state)) { return value; }
      return false;
    });
    const remove = line.filter((value) => value !== false);
    return { ...state,
      expenses: [...remove] };
  }
  default:
    return state;
  }
};

export default wallet;
