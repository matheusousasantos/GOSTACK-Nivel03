import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
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

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isField &&
    css`
      color: #ff9000;
    `}

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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
