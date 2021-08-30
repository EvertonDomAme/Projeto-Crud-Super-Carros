import styled from 'styled-components';
import { Paragraph } from '../../Components/Paragraph/styled';

export const Text = styled(Paragraph)`
  text-align: center;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
`;

export const ButtonDelete = styled.button`
  background: #c21500;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #c21500, #ffc500);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #c21500, #ffc500); 
  color: #ffffff;
  font-size: 1.2em;
  padding: 0.4rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background: #373B44;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #4286f4, #373B44 );  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #4286f4, #373B44);
  }
`;

export const ButtonCancel = styled.button`
  background: #373B44;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #4286f4, #373B44 );  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #4286f4, #373B44);
  color: #ffffff;
  font-size: 1.2em;
  padding: 0.4rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background: #c21500;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #c21500, #ffc500);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #c21500, #ffc500); 
  }
`;
