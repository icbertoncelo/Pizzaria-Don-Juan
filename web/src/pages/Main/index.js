import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import {
  Header,
  LogoContainer,
  UserDataContainer,
  Content,
  Order,
  OrderHeader,
  ItemsContainer,
  Item,
} from './styles';
import Logo from '~/assets/logo.png';

const Main = ({ logout }) => (
  <>
    <Header>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
        <strong>Pizzaria Don Juan</strong>
      </LogoContainer>
      <UserDataContainer>
        <strong>Ian Carlos</strong>
        <button type="button" onClick={logout}>
          Sair
        </button>
      </UserDataContainer>
    </Header>

    <Content>
      <h1>Últimos Pedidos</h1>
      <Order>
        <OrderHeader>
          <h2>Pedido #3 - Ian carlos</h2>
          <span>há 2 horas</span>
          <strong>R$36,00</strong>
        </OrderHeader>
        <ItemsContainer>
          <Item>
            <img
              src="https://img.pngio.com/free-png-pepperoni-pizza-png-images-transparent-free-png-images-pizza-850_834.png"
              alt="Order image"
            />
            <div>
              <strong>Pizza Portuguesa</strong>
              <span>Tamanho: M</span>
            </div>
          </Item>
          <Item>
            <img
              src="https://img.pngio.com/free-png-pepperoni-pizza-png-images-transparent-free-png-images-pizza-850_834.png"
              alt="Order image"
            />
            <div>
              <strong>Pizza Portuguesa</strong>
              <span>Tamanho: M</span>
            </div>
          </Item>
          <Item>
            <img
              src="https://img.pngio.com/free-png-pepperoni-pizza-png-images-transparent-free-png-images-pizza-850_834.png"
              alt="Order image"
            />
            <div>
              <strong>Pizza Portuguesa</strong>
              <span>Tamanho: M</span>
            </div>
          </Item>
        </ItemsContainer>
      </Order>
    </Content>
  </>
);

Main.propTypes = {
  logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
