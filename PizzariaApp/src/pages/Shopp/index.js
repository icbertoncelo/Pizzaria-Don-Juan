import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ShoppActions from '~/store/ducks/shopp';

import {
  Container,
  ItemList,
  Item,
  ItemImage,
  ItemData,
  ItemName,
  ItemSize,
  ItemPrice,
  ItemDelete,
  ActionsContainer,
  NewItemButton,
  ConfirmOrderButton,
  ConfirmText,
} from './styles';

import Header from '~/components/Header';

class Shopp extends Component {
  static propTypes = {
    removeItemSuccess: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    shopp: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          product_name: PropTypes.string,
          type_name: PropTypes.string,
          size: PropTypes.string,
          unit_price: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {}

  handleRemove = (id) => {
    const { removeItemSuccess } = this.props;

    removeItemSuccess(id);
  };

  render() {
    const { shopp, navigation } = this.props;

    return (
      <Container>
        <Header
          leftButton="keyboard-arrow-left"
          leftAction="Main"
          title="Carrinho"
          shoppPrice="60,00"
        />
        <ItemList
          showsVerticalScrollIndicator={false}
          data={shopp.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Item>
              <ItemImage source={{ uri: `http://192.168.0.13:5000/files/${item.image}` }} />
              <ItemData>
                <ItemName>
                  {item.product_name} - {item.type_name}
                </ItemName>
                <ItemSize>Temanho: {item.size}</ItemSize>
                <ItemPrice>R${item.unit_price}</ItemPrice>
              </ItemData>
              <ItemDelete onPress={() => this.handleRemove(item.id)}>
                <Icon name="delete-forever" size={25} color="#e64c4c" />
              </ItemDelete>
            </Item>
          )}
        />
        {shopp.data.length > 0 && (
          <ActionsContainer>
            <NewItemButton onPress={() => navigation.navigate('Main')}>
              <Icon name="add-shopping-cart" size={30} color="#666" />
            </NewItemButton>
            <ConfirmOrderButton onPress={() => navigation.navigate('Finish')}>
              <ConfirmText>Realizar Pedido</ConfirmText>
            </ConfirmOrderButton>
          </ActionsContainer>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  shopp: state.shopp,
});

const mapDispatchToProps = dispatch => bindActionCreators(ShoppActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shopp);
