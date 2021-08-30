import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 0 2rem;
  background: #283048;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #859398, #283048);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #859398, #283048); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  @media (max-width: 580px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 8rem;
  height: 4.3rem;
  padding: 0.2rem 0;
  border:solid red
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: silver;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 1rem 1rem;
  transition: 150ms;

  &:hover {
    border-radius: 20%;
    box-shadow: rgba(39, 231, 345, 0.719) 0px 15px 25px -10px;

  }
`;

export const LinkedPage = styled(Link)`
  text-decoration: none;
  color: #ffffff;

`;
