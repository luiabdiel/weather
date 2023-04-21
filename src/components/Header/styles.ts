import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 6.25rem;

  background-color: #343A40;

  display: flex;
`;

export const Content = styled.div`
  max-width: 90rem;
  width: 100%;

  padding-inline: 7rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  width: 37.5rem;
  height: 2.5rem;

  display: flex;

  input {
    width: calc(100% - 4.5625rem);

    padding: 0.75rem;
    outline: none;
    border: none;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  button {
    width: 4.5625rem;

    background-color: #EB6F4C;

    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    cursor: pointer;
  }
`;

export const ConvertButton = styled.button`
  background-color: #FFF;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  width: 10.625rem;
  height: 2.5rem;

  font-weight: 400;
`;

