import styled from 'styled-components';

export const Container = styled.div``;

export const TopBar = styled.div`
  padding: 1rem 2rem;
`;

export const Overview = styled.div`
  padding: 1rem 2rem;

  .contents {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 1.5;
    padding: 3rem 2rem;
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchBox = styled.div`
  margin: 2rem auto;
  input {
    color: #000;
  }
  .search-box {
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
  }
`;

export const CoinList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const CryptoItem = styled.div`
  height: 300px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3rem;
  width: 250px;
  border-radius: 20px;
  background-color: #6C004A;
  font-size: 1.1rem;

  .see-more {
    text-decoration: none;
    padding: 1px;
    width: 2px;
    padding-right: 0.5px;
    padding-left: 50%;
    padding-bottom: 1%;
  }
`;

export const CoinIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gold;
  font-size: 40px;
  width: 85%;
  margin: auto;
  cursor: pointer;
`;
export const CoinImage = styled.img`
  width: 60px;
`;
export const CryptoData = styled.div`
  color: #fff;
`;

export const Button = styled.div`
  padding: 0.5rem 2rem;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: #6C004A;
  margin: 1rem 0;
  text-decoration: none;
`;
export const Loader = styled.div``;
