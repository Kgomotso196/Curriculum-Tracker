import React from 'react';
import {
  render, screen, fireEvent, getByRole,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CryptoCoins from '../pages/Layout';

const mockStore = configureStore([]);
const initialState = {
  cryptoCurrency: {
    status: 'success',
    cryptoCurrency: [
      {
        id: 'BTC',
        name: 'Bitcoin',
        symbol: 'BTC',
        rank: 1,
        price: 45000,
      },
    ],
  },
};
const store = mockStore(initialState);

describe('CryptoCoins component', () => {
  it('should render loading spinner when status is pending', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CryptoCoins />
      </Provider>,
    );

    const loadingText = getByText('Loading');
    expect(loadingText).toBeInTheDocument();
  });

  it('should render cryptocurrency data when status is success', () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <CryptoCoins />
      </Provider>,
    );

    const btcName = getByText('Bitcoin');
    expect(btcName).toBeInTheDocument();

    const btcSymbol = getByText('BTC');
    expect(btcSymbol).toBeInTheDocument();

    const btcPrice = getByText('$45000.00');
    expect(btcPrice).toBeInTheDocument();

    const btcIcon = getByAltText('Icon');
    expect(btcIcon).toBeInTheDocument();
    expect(btcIcon).toHaveAttribute('src', 'bitcoin-icon-url');
    const searchBox = getByRole('textbox');
    expect(searchBox).toBeInTheDocument();
    expect(searchBox).toHaveAttribute('placeholder', 'Enter Name');
  });

  it('should filter the cryptocurrencies based on search input', () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <CryptoCoins />
      </Provider>,
    );
    expect(getByText('Bitcoin')).toBeInTheDocument();
    expect(getByText('Ethereum')).toBeInTheDocument();
    const searchBox = getByRole('textbox');
    fireEvent.change(searchBox, { target: { value: 'Bit' } });
    expect(getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.queryByText('Ethereum')).not.toBeInTheDocument();
  });
});
