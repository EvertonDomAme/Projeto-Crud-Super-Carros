import styled from 'styled-components';

export const CardArea = styled.div`
  padding: 1rem;
  /* border-radius: 50%; */
  margin: 0.5rem;
  /* box-shadow: rgba(50, 340, 340, 0.35) 0px 5px 15px; */
  cursor: pointer;
  transition: 200ms;
  width: 20rem;
  height: 20rem;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(100%);
  box-shadow: rgba(37, 217, 326, 0.3) 0px 1.5px 0px;

  &:hover {
    filter: grayscale(0%);
    margin: 0.8rem;
    
  }
`;

export const CardImg = styled.img`
  border-radius: 50%;
  max-width: 14rem;
  height: 14rem;
  object-fit: cover;
  filter: grayscale(50%);
  position: absolute;

  &:hover{
    //filter:grayscale(0%);
    box-shadow: rgba(39, 231, 345, 0.719) 0px 20px 30px -10px;
  }
`;

export const Name = styled.h3`
  color: red;
  text-align: center;
  padding: 0.5rem;
  font-size: 1em;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotateText 6s linear infinite;
  transform: rotate(90deg);

  @keyframes rotateText
  {
    0%
    {transform: rotate(360deg)}
    100%
    {transform: rotate(0deg)}
  }
`;