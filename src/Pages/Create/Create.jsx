import * as S from './styled';
import { Title } from '../../Components/Title/styled';
import { useState } from 'react';
import { Api } from '../../Api/Api';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [modelo, setModelo] = useState('');
  const [url, setUrl] = useState('');
  const [fabricante, setFabricante] = useState('');
  const [decada, setDecada] = useState('');
  const [potencia, setPotencia] = useState(0);
  const [info, setInfo] = useState('');

  const history = useHistory();

  const item = {
    modelo: modelo,
    url: url,
    fabricante: fabricante,
    decada: decada,
    potencia: potencia,
    info: info,
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const request = await Api.buildApiPostRequest(Api.createUrl(), item).catch(
      (e) => {
        console.error('Erro ao tentar adicionar o item ao banco: ', e);
      }
    );

    // RESPOSTA DA API VEM PRA CÁ PRO RESULT
    const result = await request.json();

    const id = result._id;

    history.push(`/view/${id}`, result);
  };

  return (
    <>
      <Title>Inserir novo SuperCarro</Title>

      <S.Form onSubmit={submitHandler}>
        <S.Label htmlFor="modelo">Modelo</S.Label>
        <S.Input
          id="modelo"
          type="text"
          onChange={(e) => setModelo(e.target.value)}
          required
        ></S.Input>

        <S.Label htmlFor="url">URL da Imagem</S.Label>
        <S.Input
          id="url"
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          required
        ></S.Input>

         <S.Label htmlFor="info">Descrição</S.Label>
        <S.Input
          id="info"
          type="text"
          onChange={(e) => setInfo(e.target.value)}
          required
        ></S.Input>

        <S.Label htmlFor="fabricante">Fabricante</S.Label>
        <S.Select id="fabricante" onChange={(e) => setFabricante(e.target.value)} required>
          <option value="" hidden>
            -
          </option>
          <option value="Buick">Buick</option>
          <option value="Cadillac">Cadillac</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="GMC">GMC</option>
          <option value="Audi">Audi</option>
          <option value="Bentley">Bentley</option>
          <option value="Bugatti">Bugatti</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Porsche">Porsche</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Lexus">Lexus</option>
          <option value="Toyota">Toyota</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Ford">Ford</option>
          <option value="Infiniti">Infiniti</option>
          <option value="Nissan">Nissan</option>
          <option value="Nismo">Nismo</option>
          <option value="Abarth">Abarth</option>
          <option value="Alfa Romeo">Alfa Romeo</option>
          <option value="Chrysler">Chrysler</option>
          <option value="Dodge">Dodge</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Fiat">Fiat</option>
          <option value="Lancia">Lancia</option>
          <option value="Maseratti">Maseratti</option>
          <option value="Mopar">Mopar</option>
          <option value="RAM">RAM</option>
          <option value="Citröen">Citröen</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Opel">Opel</option>
          <option value="Acura">Acura</option>
          <option value="Honda">Honda</option>
          <option value="Renault">Renault</option>
          <option value="Suzuki">Suzuki</option>
          <option value="BMW">BMW</option>
          <option value="MINI">MINI</option>
          <option value="Rolls-Royce">Rolls-Royce</option>
          <option value="Mazda">Mazda</option>
          <option value="McLaren">McLaren</option>
          <option value="Mercedes-AMG">Mercedes-AMG</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Mitsubishi">Mitsubishi</option>
          <option value="Jaguar">Jaguar</option>
          <option value="Land Rover">Land Rover</option>
          <option value="Volvo">Volvo</option>
          <option value="Lotus">Lotus</option>
          <option value="Subaru">Subaru</option>
          <option value="Koenigsegg">Koenigsegg</option>
          <option value="Pagani Automobili S.p.A. ">Pagani Automobili S.p.A. </option>
          <option value="Tesla Motors">Tesla Motors</option>
          <option value="Hennessey Performance Engineering">Hennessey Performance Engineering</option>
        </S.Select>

        <S.Label htmlFor="decada">Década lançamento</S.Label>
        <S.Select id="decada" onChange={(e) => setDecada(e.target.value)} required>
          <option value="" hidden>
            -
          </option>
          <option value="1900-1910">1900/1910</option>
          <option value="1911-1920">1911/1920</option>
          <option value="1921-1930">1921/1930</option>
          <option value="1931-1940">1931/1940</option>
          <option value="1941-1950">1941/1950</option>
          <option value="1951-1960">1951/1960</option>
          <option value="1961-1970">1961/1970</option>
          <option value="1971-1980">1971/1980</option>
          <option value="1981-1990">1981/1990</option>
          <option value="1991-2000">1991/2000</option>
          <option value="2001 a 2010">2001 a 2010</option>
          <option value="2011-2021">2011/2021</option>
        </S.Select>

        <S.Label htmlFor="potencia">Potência (cv)</S.Label>
        <S.Input
          id="potencia"
          type="number"
          min="0"
          max="2000"
          onChange={(e) => setPotencia(e.target.value)}
          required
        ></S.Input>

        <S.Button>Cadastrar</S.Button>
      </S.Form>
    </>
  );
}