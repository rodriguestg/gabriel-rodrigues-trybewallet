import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Table from '../components/Table';
import userEvent from '@testing-library/user-event';
import App from '../App';

const addItemTable = () => {
  const inputValue = screen.getByTestId('value-input');
  userEvent.type(inputValue, '50');
  const inputDescription = screen.getByTestId('description-input');
  userEvent.type(inputDescription, '50{space}Reais');
  const btnDespesa = screen.getByRole('button', { name: /Adicionar despesa/i });
  userEvent.click(btnDespesa);
}

describe('Testando o componente inicial TABLE', () => {
  it('Testando se no componente table, existe uma tabela', () => {
    renderWithRouterAndRedux(<Table />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  })
  it('Testando se no componente table, existe um button de Excluir', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/carteira')
    addItemTable();
    const btnExcluir = await screen.findByTestId('delete-btn');
    expect(btnExcluir).toBeInTheDocument();
  })
  it('Testando se no componente table, é excluido um item ao clicar no botão', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/carteira')
    addItemTable();
    const btnExcluir = await screen.findByTestId('delete-btn');
    expect(btnExcluir).toBeInTheDocument();
    userEvent.click(btnExcluir);
    expect(btnExcluir).not.toBeInTheDocument();
  })
})
