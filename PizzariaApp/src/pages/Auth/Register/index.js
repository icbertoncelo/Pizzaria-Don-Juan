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
  AccountButton,
} from '../styles';

import Logo from '~/assets/logo.png';
import Fundo from '~/assets/fundo.jpg';

class Login extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <Container source={Fundo}>
        <Transparency colors={['transparent', 'black']}>
          <StatusBar hidden barStyle="light-content" />
          <Form>
            <LogoImage source={Logo} />
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome completo"
              underlineColorAndroid="transparent"
              value={username}
              onChangeText={text => this.setState({ username: text })}
            />
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
            <AccessButton onPress={() => this.props.navigation.navigate('Login')}>
              <AccessText>Criar Conta</AccessText>
            </AccessButton>
            <AccountButton onPress={() => this.props.navigation.navigate('Login')}>
              <AccessText>Já tenho login</AccessText>
            </AccountButton>
          </Form>
        </Transparency>
      </Container>
    );
  }
}

export default Login;
