import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderActions from '~/store/ducks/order';

import {
  Content, Order, OrderHeader, ItemsContainer, Item, Notes,
} from './styles';

import Header from '~/components/Header';

class Main extends Component {
  static propTypes = {
    getOrderRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getOrderRequest } = this.props;

    getOrderRequest();
  }

  render() {
    const { order } = this.props;
    return (
      <>
        <Header />

        <Content>
          <h1>Últimos Pedidos</h1>
          {!order.data.length && <p>Nenhum pedido adicionado</p>}
          {order.data.map(order => (
            <Order>
              <OrderHeader>
                <h2>
                  Pedido #{order.id} - {order.user.name}
                </h2>
                <span>há 2 horas</span>
                <strong>R${order.total_value}</strong>
              </OrderHeader>
              <ItemsContainer>
                {order.items.map(item => (
                  <Item>
                    <img src={`http://localhost:5000/files/${item.type.image}`} alt="Order" />
                    <div>
                      <strong>
                        {item.product.name} - {item.type.name}
                      </strong>
                      <span>Tamanho: {item.size.name}</span>
                    </div>
                  </Item>
                ))}
              </ItemsContainer>
              <Notes>Observações: {order.notes}</Notes>
            </Order>
          ))}
        </Content>
      </>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
