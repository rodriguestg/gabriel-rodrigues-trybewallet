import React from 'react';
import { screen } from '@testing-library/react';
import Login from '../pages/Login';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o componente inicial LOGIN', () => {
  it('Testando se o campo de e-mail existe', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
  })

  it('Testando se o campo de senha existe', () => {
    renderWithRouterAndRedux(<Login />);
    const inputSenha = screen.getByTestId('password-input');
    expect(inputSenha).toBeInTheDocument();
  })

  it('Testando se o campo de button existe,', () => {
    renderWithRouterAndRedux(<Login />);
    const btnEntrar = screen.getByRole('button', { name: /Entrar/i });
    expect(btnEntrar).toBeInTheDocument();
  })

  it('Testando se o campo de button está inicia desabilitado,', () => {
    renderWithRouterAndRedux(<Login />);
    const btnEntrar = screen.getByRole('button', { name: /Entrar/i });
    expect(btnEntrar).toBeDisabled();
  })

  it('Testando se o ao clicar no button redireciona para a carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    userEvent.type(inputEmail, 'trab.rodrigues@gmail.com');
    const inputSenha = screen.getByTestId('password-input');
    userEvent.type(inputSenha, '12345678');
    expect(history.location.pathname).toBe('/')
    const btnEntrar = screen.getByRole('button', { name: /Entrar/i });
    userEvent.click(btnEntrar);
    expect(history.location.pathname).toBe('/carteira')
  })

  it('Testando se o campo input permanece desabilitado com o email incorreto', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    userEvent.type(inputEmail, 'trab.rodriguesgmailom');
    const inputSenha = screen.getByTestId('password-input');
    userEvent.type(inputSenha, '12345678');
    const btnEntrar = screen.getByRole('button', { name: /Entrar/i });
    expect(btnEntrar).toBeDisabled();
  })
})
