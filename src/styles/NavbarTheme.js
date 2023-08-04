import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1b1c1c ;
  color: #6C004A;

  .notification{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: #fff;
    margin-left: 20px;
  }

  .nav-link {
    text-decoration: none;
  }
`;

export default NavContainer;
