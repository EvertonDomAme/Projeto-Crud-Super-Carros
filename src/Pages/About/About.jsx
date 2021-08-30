import { Title } from '../../Components/Title/styled';
import { Paragraph } from '../../Components/Paragraph/styled';
import * as S from './styled';
import everton from './everton.jpg';

export default function About() {
  return (
    <>
      <Title>Sobre</Title>
      <Paragraph>
        Esse é nosso primeiro projeto no quarto módulo de especialidade em Front-end
        da Blue EdTech. Desenvolvido em React.js com objetivo de apresentar um site responsivo com operações de CRUD.
        Utilizamos como Api, um Backend desenvolvido pela BlueEdtech.
        Desenvolvendo melhor nossas habilidades e expandindo nosso conhecimento nas operações :
        Create, read, update e delete!
      </Paragraph>

      <Paragraph>
        Meu nome é Éverton de Oliveira, sou aluno na Blue Edtech e estou cursando o Módulo 4 de especialização em Front-end.
      </Paragraph>

      <S.ImgCard>
        <S.Img src={everton}></S.Img>
      </S.ImgCard>

      <Paragraph>
        Se gostou do que viu até aqui e ou quiser entrar em contato, siga minhas redes!
        Estou a disposição:        
      </Paragraph>

      <S.SocialBlock>
        <a
          href="https://github.com/EvertonDomAme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/everton-de-oliveira-melo-9a0338a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/everton.oliveira_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-instagram"></i>
        </a>
        <a
          href="mailto:oliveirameloeverton@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-mail"></i>
        </a>
      </S.SocialBlock>
    </>
  );
}
