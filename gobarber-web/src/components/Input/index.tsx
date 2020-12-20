import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons"; // Propriedades de um icone

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon fontSize={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
