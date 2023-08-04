import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  DataContainer,
  Container,
  DataSleeve,
  Title,
} from '../styles/InfoTheme';

function CryptoDetails() {
  const { id } = useParams();

  const { cryptoCurrency, status } = useSelector(
    (state) => state.cryptoCurrency,
  );
  return (
    <DataContainer>
      {status === 'pending' ? (
        <div>Loading....</div>
      ) : (
        cryptoCurrency.map((coin) => {
          if (coin.id === id) {
            return (
              <Container key={coin.id}>
                <Link className="back" to="/">
                  <p className="nav-back">←</p>
                </Link>
                <div className="main">
                  <div className="sub-main">
                    <div>
                      <p>
                        <img src={coin.icon} alt="Icon" />
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2>
                      Coin:
                      {coin.name}
                    </h2>
                    <p>
                      Ranked at: Number
                      {coin.rank}
                    </p>
                  </div>
                </div>

                <DataSleeve>
                  <Title className="details">
                    <p>Coin Name</p>
                    <p>{coin.name}</p>
                  </Title>

                  <Title className="details">
                    <p>Coin Symbol</p>
                    <p>{coin.symbol}</p>
                  </Title>

                  <Title className="details">
                    <p>Ranking</p>
                    <p>{coin.rank}</p>
                  </Title>

                  <Title className="details">
                    <p>Coin Price</p>
                    <p>{coin.price}</p>
                  </Title>

                  <Title className="details">
                    <p>Coin Volume</p>
                    <p>{coin.volume}</p>
                  </Title>

                  <Title className="details">
                    <p>Market Cap</p>
                    <p>{coin.marketCap}</p>
                  </Title>

                  <Title className="details">
                    <p>Price Change Day</p>
                    <p>{coin.priceChange1d}</p>
                  </Title>

                  <Title className="details">
                    <p>Price Change Hour</p>
                    <p>{coin.priceChange1h}</p>
                  </Title>

                  <Title className="details">
                    <p>Price Change Week</p>
                    <p>{coin.priceChange1w}</p>
                  </Title>

                  <Title className="details">
                    <p>Coin Total Supply</p>
                    <p>{coin.totalSupply}</p>
                  </Title>

                  <Title className="details">
                    <p>Coin Availability Supply</p>
                    <p>{coin.availableSupply}</p>
                  </Title>

                  <Title className="details">
                    <p>Twitter</p>
                    <p>{coin.twitterUrl}</p>
                  </Title>

                  <Title className="details">
                    <p>Website</p>
                    <p>{coin.websiteUrl}</p>
                  </Title>
                </DataSleeve>
              </Container>
            );
          }
          return null;
        })
      )}
    </DataContainer>
  );
}

export default CryptoDetails;
