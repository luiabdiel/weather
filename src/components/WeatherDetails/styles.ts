import styled from 'styled-components';

export const Container = styled.div`
  background-color: #343A40;

  width: 100%;
  height: 11.125rem;

  margin: 7.5rem auto;
  padding-inline: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  span {
    color: rgba(255, 255, 255, 0.8);
  }

  strong {
    font-size: 1.5rem;
    color: #FFF;
  }
`;
