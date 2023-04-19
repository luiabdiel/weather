import styled from 'styled-components';

export const Container = styled.div`
  max-width: 90rem;
  width: 100%;

  margin: 0 auto;
  padding-inline: 7rem;

  display: flex;
  gap: 12.45rem;
`;

export const ContentToday = styled.div`
  margin-top: 7rem;

  p {
    font-size: 2rem;
    margin-bottom: 0.2rem;
  }

  small {
    color: rgba(52, 58, 64, 0.9);
  }

  h1 {
    font-size: 6rem;
    font-weight: 500;

    margin-top: 20px;
  }
`;

export const ContainerForecast = styled.div`
  display: flex;
  gap: 10rem;

  margin-top: 7.5rem;
`;

export const ContentForecast = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;

  span {
    font-size: 2rem;
    color: rgba(52, 58, 64, 0.9);
  }

  strong {
    font-size: 2rem;
  }
`;
