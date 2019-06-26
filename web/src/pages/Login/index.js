import React from 'react';

import { Container, Form } from './styles';
import Logo from '~/assets/logo.png';

const Login = () => (
  <Container>
    <Form>
      <img src={Logo} alt="Logo" />
      <input type="text" placeholder="Seu e-mail" />
      <input type="password" placeholder="Senha secreta" />
      <button type="submit">Entrar</button>
    </Form>
  </Container>
);

export default Login;
