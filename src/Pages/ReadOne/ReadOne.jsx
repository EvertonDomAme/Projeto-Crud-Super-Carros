import { Title } from '../../Components/Title/styled';
import * as S from './styled';
import Power from '../../Components/Power/Power';
import { useHistory } from 'react-router-dom';

export default function ReadOne(props) {
  const item = props.location.state;

  const history = useHistory();

  const deleteHandler = async (event) => {
    event.preventDefault();
    history.push(`/delete/${item._id}`, item);
  };

  const editHandler = async (event) => {
    event.preventDefault();
    history.push(`/update/${item._id}`, item);
  };

  return (
    <>
      <Title>{item.modelo}</Title>
      <S.Card>
        <S.ImgBlock>
          <S.Img src={item.url} alt="SuperCarro" />
        </S.ImgBlock>

        <S.PowerArea>
          <S.Text>
            <strong>Potencia: </strong>
          </S.Text>
          <Power value={item.potencia}></Power>
        </S.PowerArea>

        <S.Text>
          <strong>Fabricante: </strong>
          {item.fabricante}
        </S.Text>
        <S.Text>
          <strong>Decada: </strong>
          {item.decada}
        </S.Text>
        <S.Text>
          <strong>Descrição: </strong>
          {item.info}
        </S.Text>

        <S.ButtonArea>
          <S.ButtonEdit onClick={editHandler}>Editar</S.ButtonEdit>
          <S.ButtonDelete onClick={deleteHandler}>Deletar</S.ButtonDelete>
        </S.ButtonArea>
      </S.Card>
    </>
  );
}
