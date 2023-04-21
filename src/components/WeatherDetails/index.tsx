import { Container, Content } from './styles';

export function WeatherDetails() {
  return (
    <Container>
      <Content>
        <span>Chance of Rain</span>
        <strong>12%</strong>
      </Content>
      <Content>
        <span>Humidity</span>
        <strong>60%</strong>
      </Content>
      <Content>
        <span>Wind Speed</span>
        <strong>10km/h</strong>
      </Content>
      <Content>
        <span>Visiblity</span>
        <strong>100km/h</strong>
      </Content>
    </Container>
  );
}
