import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StatusBar } from 'react-native';
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

class Register extends Component {
  static propTypes = {
    registerRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const { name, email, password } = this.state;
    const { registerRequest } = this.props;

    registerRequest(name, email, password);
  };

  render() {
    const { name, email, password } = this.state;
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
              value={name}
              onChangeText={text => this.setState({ name: text })}
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
              secureTextEntry
              value={password}
              onChangeText={text => this.setState({ password: text })}
            />
            <AccessButton onPress={this.handleSubmit}>
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

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Register);
