import { screen } from '@testing-library/react';
import { createBrowserHistory } from 'history';
// import { render } from 'react-dom';
// import renderPath from './helpers/renderPath';

describe('a', () => {
  it('a', () => {
    const history = createBrowserHistory();
    history.push('/')
    // render("/");
    const inputEmail = screen.findByTestId('email-input')
    const inputSenha = screen.findByTestId('password-input')
    expect(inputEmail).toBeDefined();
    expect(inputSenha).toBeDefined();
  })
})
