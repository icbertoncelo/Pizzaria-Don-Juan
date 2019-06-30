import React, { Component } from 'react';

import {
  Container, TypeList, TypeComponent, TypeImage, TypeName,
} from './styles';
import Header from '~/components/Header';

class Type extends Component {
  state = {
    types: [
      {
        id: 1,
        image:
          'https://img.pngio.com/free-png-pepperoni-pizza-png-images-transparent-free-png-images-pizza-850_834.png',
        name: 'Calabresa',
      },
      {
        id: 2,
        image: 'https://www.pngarts.com/files/3/Pizza-PNG-Image.png',
        name: 'Portuguesa',
      },
      {
        id: 3,
        image: 'http://dpizza.net/wp-content/uploads/2018/12/281842_1_g.png',
        name: '4 queijos',
      },
    ],
  };

  componentDidMount() {}

  render() {
    const { types } = this.state;

    return (
      <Container>
        <Header leftButton="keyboard-arrow-left" title="Selecione um tipo" />
        <TypeList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={types}
          keyExtractor={type => String(type.id)}
          renderItem={({ item }) => (
            <TypeComponent onPress={() => {}}>
              <TypeImage source={{ uri: item.image }} />
              <TypeName>{item.name}</TypeName>
            </TypeComponent>
          )}
        />
      </Container>
    );
  }
}

export default Type;
