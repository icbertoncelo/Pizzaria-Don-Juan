import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import { Container, Form } from './styles';
import Logo from '~/assets/logo.png';

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { loginRequest } = this.props;

    loginRequest(email, password);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <img src={Logo} alt="Logo" />
          <input
            type="email"
            placeholder="Seu e-mail"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            placeholder="Senha secreta"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <button type="submit">Entrar</button>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
