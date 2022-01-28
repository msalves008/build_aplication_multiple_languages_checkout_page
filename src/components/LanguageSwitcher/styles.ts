import styled from 'styled-components';

export const Container = styled.div`
  .language-switcher{
    width: 20rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button{
      cursor: pointer;
      background: none;
      border: none;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;
