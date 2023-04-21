import { Header, Weather, WeatherDetails } from './components';

import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Weather />
      <WeatherDetails />
    </>
  );
}
