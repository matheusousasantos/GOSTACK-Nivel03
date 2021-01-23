import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  BackToSignIn,
  BackToSignInText
} from './styles';

const SignUp: React.FC = () => {
  const navigation =  useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />
            <View><Title>Crie sua conta</Title></View>

            <Input
              name="nome"
              icon="user"
              placeholder="Nome"
            />
            <Input
              name="email"
              icon="mail"
              placeholder="E-mail"
            />
            <Input
              name="senha"
              icon="lock"
              placeholder="Senha"
            />

            <Button onPress={() => { }}>Entrar</Button>
          </Container>
        </ScrollView>
        <BackToSignIn onPress={() =>  navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
          <BackToSignInText>Voltar para login</BackToSignInText>
        </BackToSignIn>
      </KeyboardAvoidingView>
    </>
  )
}

export default SignUp;
