import { Container, ContentToday, ContainerForecast, ContentForecast } from './styles';

import Cloud from '../../assets/cloud.svg';

export function Weather() {
  return (
    <Container>
      <ContentToday>
        <p>London</p>
        <small>Sunday 07:09</small>
        <h1>12ºC</h1>
      </ContentToday>

      <ContainerForecast>
        <ContentForecast>
          <span>08:00</span>
          <img src={Cloud} alt="" />
          <strong>13 ºC</strong>
        </ContentForecast>
        <ContentForecast>
          <span>08:00</span>
          <img src={Cloud} alt="" />
          <strong>13 ºC</strong>
        </ContentForecast>
        <ContentForecast>
          <span>08:00</span>
          <img src={Cloud} alt="" />
          <strong>13 ºC</strong>
        </ContentForecast>
        <ContentForecast>
          <span>08:00</span>
          <img src={Cloud} alt="" />
          <strong>13 ºC</strong>
        </ContentForecast>
      </ContainerForecast>
    </Container>
  );
}
