import styled from "styled-components";
import { shade } from "polished";

import signInBackgroundImg from "../../assets/sign-in-background.png";

export const Container = styled.div`
  height: 100vh; // Força que a div seja mostrada em toda a parte visível.
  display: flex;
  align-items: stretch; // Os item de dentro tenha o tamanho total da página. Eles passam a ter 100vh
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center; // justify-content e align-items juntos.
  width: 100%;
  max-width: 700px;
  align-items: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      background: #232129;
      color: #f4eded;

      &::placeholder {
        color: #666360;
      }

      // Todo input que seja precedido por outro.
      & + input {
        margin-top: 8px;
      }
    }

    button {
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      background: #ff9000;
      color: #312e38;
      height: 56px;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, "#ff9000")};
      }
    }

    a {
      color: #f4eded;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4eded")};
      }
    }
  }

  // a que estiver dentro do content.
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#ff9000")};
    }
  }
`;

export const Background = styled.div`
  flex: 1; // No nosso caso vai ocupar todo o espaço menos os 700px definido anteriormente.
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover; // Garante que cubra o componente todo não deixando espaços
`;
