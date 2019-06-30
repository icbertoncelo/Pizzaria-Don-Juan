import React, { Component } from 'react';

import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductData,
} from './styles';

import Header from '~/components/Header';

class Main extends Component {
  state = {
    products: [
      {
        id: 1,
        image: 'http://midias.gazetaonline.com.br/_midias/jpg/2016/11/21/pizza_site_or-4723742.jpg',
        product: 'Pizza',
        description: 'Mais de 20 sabores de pizzas especiais para você',
      },
      {
        id: 2,
        image:
          'https://www.1news.com.br/wp-content/uploads/2018/11/5f2f38f573416fdcc91bc1720a2abf47.jpg',
        product: 'Bebidas',
        description: 'Venha se refrescar com nossas variedades',
      },
      {
        id: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QAgQXQ0uNZIcnmeXtV8TTklJODWIsd5vqFncPplCAJhG3IJ_',
        product: 'Massas',
        description: 'Que tal entrar na rotina dos italianos com nossas receitas',
      },
      {
        id: 4,
        image: 'https://sportlife.com.br/wp-content/uploads/2017/05/sobremesa-sem-acucar.jpg',
        product: 'Sobremesas',
        description: 'Prove e adoce sua vida',
      },
    ],
  };

  componentDidMount() {}

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Header leftButton="history" title="Pizzaria Don Juan" rightButton="shopping-cart" />
        <ProductList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product onPress={() => this.props.navigation.navigate('Type')}>
              <ProductImage source={{ uri: item.image }} />
              <ProductData>
                <ProductName>{item.product}</ProductName>
                <ProductDescription>{item.description}</ProductDescription>
              </ProductData>
            </Product>
          )}
        />
      </Container>
    );
  }
}

export default Main;
