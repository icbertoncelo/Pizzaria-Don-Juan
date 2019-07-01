import React, { Component } from 'react';

import {
  Container, SizeList, SizeComponent, SizeImage, SizeName, SizePrice,
} from './styles';
import Header from '~/components/Header';

class Size extends Component {
  state = {
    sizes: [
      {
        id: 1,
        image: 'http://pizzariapaulistapg.com.br/assets/img/pedido/4fatias.png',
        name: '4 fatias',
        price: '22,00',
      },
      {
        id: 2,
        image: 'http://pizzariapaulistapg.com.br/assets/img/pedido/6fatias.png',
        name: '6 fatias',
        price: '26,50',
      },
    ],
  };

  componentDidMount() {}

  render() {
    const { sizes } = this.state;

    return (
      <Container>
        <Header leftButton="keyboard-arrow-left" leftAction="Type" title="Selecione um tamanho" />
        <SizeList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={sizes}
          keyExtractor={size => String(size.id)}
          renderItem={({ item }) => (
            <SizeComponent onPress={() => this.props.navigation.navigate('Shopp')}>
              <SizeImage source={{ uri: item.image }} />
              <SizeName>{item.name}</SizeName>
              <SizePrice>R${item.price}</SizePrice>
            </SizeComponent>
          )}
        />
      </Container>
    );
  }
}

export default Size;
