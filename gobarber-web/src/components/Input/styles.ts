import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  background: #232129;
  color: #666360;

  // Todo input que seja precedido por outro.
  & + div {
    margin-top: 8px;
  }

  display: flex;
  align-items: center;

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #f4eded;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
