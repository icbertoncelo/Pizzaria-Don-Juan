import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

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
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;

    loginRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { navigation } = this.props;
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
              secureTextEntry
              type="password"
              onChangeText={text => this.setState({ password: text })}
            />
            <AccessButton onPress={this.handleSubmit}>
              <AccessText>Entrar</AccessText>
            </AccessButton>
            <AccountButton onPress={() => navigation.navigate('Register')}>
              <AccessText>Criar conta gratuita</AccessText>
            </AccountButton>
          </Form>
        </Transparency>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
