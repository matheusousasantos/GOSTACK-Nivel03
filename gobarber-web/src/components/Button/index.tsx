import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

// A interface passa ser a própria estenção.
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Botton: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Botton;
