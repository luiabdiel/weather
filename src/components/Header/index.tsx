import weatherApp from '../../assets/weatherApp.svg';
import search from '../../assets/search.svg';

import { Container, Content, ConvertButton, InputContainer } from './styles';
import { useState } from 'react';

export function Header() {
  const [isCelsius, setIsCelsius] = useState(true);

  function toggleConversion() {
    setIsCelsius(!isCelsius);

    console.log('Alternou');
  }

  return (
    <Container>
      <Content>
        <img src={weatherApp} alt="" />
        <InputContainer>
          <input type="text" />
          <button>
            <img src={search} alt="" />
          </button>
        </InputContainer>

        <ConvertButton
          onClick={toggleConversion}
        >
          {isCelsius ? <strong>ºC</strong> : 'ºC'}
           /
          {!isCelsius ? <strong>ºF</strong> : 'ºF'}
        </ConvertButton>
      </Content>
    </Container>
  );
}
