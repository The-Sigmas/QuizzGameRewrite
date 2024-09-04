
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; 
import Category from './Category';

describe('Category Component', () => {
  test('renders the link with the correct text and href', () => {
    const categoryProps = {
      s: 'some-css-class',
      name: 'Autos',
    };

    const { getByText } = render(
      <MemoryRouter>
        <Category {...categoryProps} />
      </MemoryRouter>
    );

    const linkElement = getByText('Autos');


    expect(linkElement).toBeInTheDocument();

    expect(linkElement.closest('a')).toHaveAttribute('href', '/autos');

    expect(linkElement).toHaveClass('some-css-class');
  });
});
