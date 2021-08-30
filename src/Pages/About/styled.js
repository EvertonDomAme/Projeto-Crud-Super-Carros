import styled from 'styled-components';

export const ImgCard = styled.div`
  border-radius: 50%;
  background: #373B44;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #373B44, #4286f4 );  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #373B44, #4286f4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: rgba(39, 231, 245, 0.719) 0px 20px 30px -10px;
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
`;

export const Img = styled.img`
border-radius: 50%;
  width: 12rem;
  height: 12rem;
`;

export const SocialBlock = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  & a {
    color: #e76a24;

    & i {
      padding: 0.5rem;
      font-size: 2.5em;
      transition: 200ms;

      &:hover {
        border-radius: 50%;
        background: #373B44;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        box-shadow: rgba(39, 231, 245, 0.719) 0px 20px 30px -10px;
      }
    }
  }
`;
