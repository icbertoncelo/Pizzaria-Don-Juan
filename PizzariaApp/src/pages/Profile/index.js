import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { distanceInWordsToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderActions from '~/store/ducks/order';

import {
  Container, OrderList, Order, OrderNumber, OrderTime, OrderPrice,
} from './styles';

import { Error, Loading } from '~/styles/common';

import Header from '~/components/Header';

class Profile extends Component {
  static propTypes = {
    getOrdersRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
    orders: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        createdAt: PropTypes.string,
        total_value: PropTypes.number,
      })),
      error: PropTypes.bool,
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getOrdersRequest, user } = this.props;

    getOrdersRequest(user.id);
  }

  render() {
    const { orders } = this.props;

    return (
      <Container>
        <Header leftButton="keyboard-arrow-left" leftAction="Main" title="Meus Pedidos" />
        {orders.error && <Error>Erro ao carregar os tipos</Error>}
        {orders.loading ? (
          <Loading />
        ) : (
          <OrderList
            showsVerticalScrollIndicator={false}
            data={orders.data}
            keyExtractor={order => String(order.id)}
            renderItem={({ item }) => (
              <Order>
                <OrderNumber>Pedido #{item.id}</OrderNumber>
                <OrderTime>Há {distanceInWordsToNow(item.createdAt, { locale: pt })}</OrderTime>
                <OrderPrice>R${item.total_value}</OrderPrice>
              </Order>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
  user: state.auth.data.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
