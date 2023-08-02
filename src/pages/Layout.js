import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  TopBar,
  Overview,
  SearchBox,
  CoinList,
  CryptoItem,
  CoinIcon,
  CoinImage,
  CryptoData,
  Button,
  Loader,
  Container,
  Wrapper,
} from '../styles/Layout.style';

function CryptoCoins() {
  const { cryptoCurrency, status } = useSelector(
    (state) => state.cryptoCurrency,
  );

  const [searchcoin, setSearchcoin] = useState('');
  const onSearchItem = (e) => {
    setSearchcoin(e.target.value);
  };
  const searchItem = cryptoCurrency.filter(
    (filteredItem) => filteredItem.name.toLowerCase().includes(searchcoin.toLowerCase())
      || filteredItem.symbol.toLowerCase().includes(searchcoin.toLowerCase()),
  );

  return (
    <Container>
      <TopBar>
        <Overview>
          {cryptoCurrency.map((btc) => {
            if (btc.id === 'ethereum') {
              return (
                <div key={btc.id} className="contents">
                  <div>
                    <img src={btc.icon} alt="btc" />
                    <h2>
                      {btc.name}
                      {' '}
                      Price
                    </h2>
                    <p>
                      $
                      {btc.price}
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </Overview>
      </TopBar>
      <Wrapper>
        <SearchBox>
          <input
            className="search-box"
            placeholder="Enter Name"
            type="text"
            value={searchcoin}
            onChange={onSearchItem}
          />
        </SearchBox>
        <CoinList>
          {status === 'pending' ? (
            <Loader className="loader">
              Loading
              <span />
            </Loader>
          ) : (
            searchItem.map((coin) => (
              <CryptoItem key={coin.id}>
                <CoinIcon>
                  <CoinImage src={coin.icon} alt="Icon" />
                </CoinIcon>
                <CryptoData>
                  <p>
                    Number
                    {coin.rank}
                  </p>
                  <h2>{coin.name}</h2>
                  <p>{coin.symbol}</p>
                  <p>
                    $
                    {coin.price.toFixed(2)}
                  </p>
                </CryptoData>
                <Link to={`${coin.id}`} className="see-more">
                  <Button>
                    <p>➡</p>
                  </Button>
                </Link>
              </CryptoItem>
            ))
          )}
        </CoinList>
      </Wrapper>
    </Container>
  );
}

export default CryptoCoins;
