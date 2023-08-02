import styled from 'styled-components';

export const DataContainer = styled.div`
  margin: 2rem auto;
`;

export const Container = styled.div`
  width: 100%;
  color: white;
  margin: 0 auto;
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    margin: auto;
    margin-bottom: 25px;
  }
  .back {
    text-decoration: none;
    padding: 10px;
    margin: 1rem 2rem;
  }
  .nav-back {
    color: #fff;
    font-size: 2rem;
    margin: 1rem 2rem;
    margin-left: 50px;
  }
`;

export const DataSleeve = styled.div`
  .details:nth-child(odd) {
    color: #fff;
    background-color: navy;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: auto;
  padding: 10px;
`;
