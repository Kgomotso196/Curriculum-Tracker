import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';

test('Home component should match snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
