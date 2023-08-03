import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar component', () => {
  it('renders without crashing', () => {
    render(<NavBar />);
  });

  it('contains a link to home with correct text', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const link = getByText('Crypto Statistics');
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('/');
  });

  it('contains notification icons', () => {
    const { getByText } = render(<NavBar />);
    expect(getByText('🎙️')).toBeInTheDocument();
    expect(getByText('⚙️')).toBeInTheDocument();
  });
});
