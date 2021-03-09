import React, { useEffect, useRef, useImperativeHandle, forwardRef  } from 'react';
import { TextInputProps } from 'react-native'; // Propiedados que um InputProps pode receber.
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void ;
}

const Input: React.ForwardRefRenderFunction<InputRef,InputProps> = ({ name, icon, ...rest }, ref) => {

  const inputElementRef = useRef<any>(null);

  //name - Nome do Input
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value:  defaultValue});

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  // Assim que esse elemento for exibido em tela eu registre ele dentro do Unform
  useEffect(() => {
    registerField<string>({
      name: fieldName,  // nome
      ref: inputValueRef.current, // Referência do Input
      path: 'value', // Onde ele vai buscar o valor do input
      setValue(ref: any, value: string ) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value }) // Setar uma propriedade nativa.
      },
      clearValue() { // O que vai acontecer com esse input quando o unform precisar limpar/deixar sem nenhum conteúdo  ele
        inputValueRef.current.value = '';
        inputElementRef.current.clear() ; // Setar uma propriedade nativa.
      }
    });
  }, [ fieldName, registerField ])

  return (
    <Container>
      <Icon
        name={icon}
        size={20}
        color="#666360"
      />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value
        }}
        {...rest}
      />
    </Container>
  );

}

export default forwardRef(Input);
