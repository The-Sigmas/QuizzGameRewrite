
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Layout from './Layout';
import '@testing-library/jest-dom';


jest.mock('./Category', () => (props) => (
  <button className={props.s} data-testid={`category-${props.name}`}>
    {props.name}
  </button>
));

describe('Layout Component', () => {
  test('renders category buttons', async () => {
    render(<Layout />);

    await waitFor(() => {
      const categoryButtons = screen.getAllByRole('button');
      expect(categoryButtons).toHaveLength(3);
    });
    expect(screen.getByTestId('category-autos')).toHaveTextContent('autos');
    expect(screen.getByTestId('category-cpu')).toHaveTextContent('cpu');
    expect(screen.getByTestId('category-gpu')).toHaveTextContent('gpu');
  });
});
