import React, { Component } from 'react';

import {
  Container, OrderList, Order, OrderNumber, OrderTime, OrderPrice,
} from './styles';
import Header from '~/components/Header';

export default class Profile extends Component {
  state = {
    orders: [
      {
        id: 1,
        time: 'Ontem às 17:00',
        price: '60,00',
      },
      {
        id: 2,
        time: 'Hoje às 22:00',
        price: '24,00',
      },
    ],
  };

  render() {
    const { orders } = this.state;

    return (
      <Container>
        <Header leftButton="keyboard-arrow-left" leftAction="Main" title="Meus Pedidos" />
        <OrderList
          showsVerticalScrollIndicator={false}
          data={orders}
          keyExtractor={order => String(order.id)}
          renderItem={({ item }) => (
            <Order>
              <OrderNumber>Pedido #{item.id}</OrderNumber>
              <OrderTime>{item.time}</OrderTime>
              <OrderPrice>R${item.price}</OrderPrice>
            </Order>
          )}
        />
      </Container>
    );
  }
}
