import { screen } from '@testing-library/react';
import renderPath from './helpers/renderPath';

describe('a', () => {
  it('a', () => {
    renderPath("/");
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  })
})
