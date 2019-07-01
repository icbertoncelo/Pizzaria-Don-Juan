import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
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
  state = {
    itens: [
      {
        id: 1,
        image: 'https://www.pngarts.com/files/3/Pizza-PNG-Image.png',
        product: 'Pizza',
        type: 'Portuguesa',
        size: 'M',
        price: '28,00',
      },
      {
        id: 2,
        image: 'http://dpizza.net/wp-content/uploads/2018/12/281842_1_g.png',
        product: 'Pizza',
        type: '4 queijos',
        size: 'M',
        price: '32,00',
      },
    ],
  };

  componentDidMount() {}

  render() {
    const { itens } = this.state;
    return (
      <Container>
        <Header leftButton="keyboard-arrow-left" title="Carrinho" shoppPrice="60,00" />
        <ItemList
          showsVerticalScrollIndicator={false}
          data={itens}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Item>
              <ItemImage source={{ uri: item.image }} />
              <ItemData>
                <ItemName>
                  {item.product} - {item.type}
                </ItemName>
                <ItemSize>Temanho: {item.size}</ItemSize>
                <ItemPrice>R${item.price}</ItemPrice>
              </ItemData>
              <ItemDelete>
                <Icon name="delete-forever" size={25} color="#e64c4c" />
              </ItemDelete>
            </Item>
          )}
        />
        <ActionsContainer>
          <NewItemButton>
            <Icon name="add-shopping-cart" size={30} color="#666" />
          </NewItemButton>
          <ConfirmOrderButton>
            <ConfirmText>Realizar Pedido</ConfirmText>
          </ConfirmOrderButton>
        </ActionsContainer>
      </Container>
    );
  }
}

export default Shopp;
