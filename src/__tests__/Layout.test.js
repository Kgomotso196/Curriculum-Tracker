import React from 'react';
import {
  render, screen, fireEvent, getByRole,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CryptoCoins from '../pages/Layout';

// Mock the Redux store
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
        // Add more cryptocurrency data as needed
      },
      // Add more cryptocurrencies as needed
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

    // Check if cryptocurrency data is rendered correctly
    const btcName = getByText('Bitcoin');
    expect(btcName).toBeInTheDocument();

    const btcSymbol = getByText('BTC');
    expect(btcSymbol).toBeInTheDocument();

    const btcPrice = getByText('$45000.00');
    expect(btcPrice).toBeInTheDocument();

    // Add more checks for other cryptocurrency data as needed

    // Check if cryptocurrency icon is rendered correctly
    const btcIcon = getByAltText('Icon');
    expect(btcIcon).toBeInTheDocument();
    expect(btcIcon).toHaveAttribute('src', 'bitcoin-icon-url'); // Replace with the actual icon URL

    // Check if search box is rendered correctly
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

    // Check initial rendering with all cryptocurrencies
    expect(getByText('Bitcoin')).toBeInTheDocument();
    expect(getByText('Ethereum')).toBeInTheDocument();
    // Add more checks for other cryptocurrencies as needed

    // Search for 'Bit' (partial name of Bitcoin)
    const searchBox = getByRole('textbox');
    fireEvent.change(searchBox, { target: { value: 'Bit' } });

    // Check if only Bitcoin is rendered in the list
    expect(getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.queryByText('Ethereum')).not.toBeInTheDocument();
    // Add more checks for other filtered cryptocurrencies as needed
  });
});
