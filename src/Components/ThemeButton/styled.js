import styled from 'styled-components';

export const ThemeButton = styled.i`
  padding: 0.6rem;
  border-radius: 50%;
  background: #373B44;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #4286f4, #373B44);
  color: #ffffff;
  cursor: pointer;
  position: fixed;
  bottom: calc(100vh - 98vh);
  right: 2vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 200ms;

  &:hover {
    background-color: #041f26;
  }
`;
