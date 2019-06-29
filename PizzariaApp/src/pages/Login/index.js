import React, { Component } from 'react';

import { StatusBar } from 'react-native';

import {
  Container,
  Transparency,
  Form,
  LogoImage,
  Input,
  AccessButton,
  AccessText,
} from './styles';

import Logo from '~/assets/logo.png';
import Fundo from '~/assets/fundo.jpg';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container source={Fundo}>
        <Transparency colors={['transparent', 'black']}>
          <StatusBar hidden barStyle="light-content" />
          <Form>
            <LogoImage source={Logo} />
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu e-mail"
              underlineColorAndroid="transparent"
              value={email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Senha Secreta"
              underlineColorAndroid="transparent"
              value={password}
              onChangeText={text => this.setState({ password: text })}
            />
            <AccessButton onPress={() => {}}>
              <AccessText>Entrar</AccessText>
            </AccessButton>
          </Form>
        </Transparency>
      </Container>
    );
  }
}

export default Login;
