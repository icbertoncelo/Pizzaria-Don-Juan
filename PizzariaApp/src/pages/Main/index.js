import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';

import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductData,
} from './styles';

import { Error, Loading } from '~/styles/common';

import Header from '~/components/Header';

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getProductsRequest: PropTypes.func.isRequired,
    products: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          image: PropTypes.string,
          description: PropTypes.string,
        }),
      ),
      error: PropTypes.bool,
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getProductsRequest } = this.props;

    getProductsRequest();
  }

  render() {
    const { products, navigation } = this.props;
    return (
      <Container>
        <Header
          leftButton="history"
          leftAction="Profile"
          title="Pizzaria Don Juan"
          rightButton="shopping-cart"
          rightAction="Shopp"
        />
        {products.error && <Error>Erro ao carregar os produtos</Error>}
        {products.loading ? (
          <Loading />
        ) : (
          <ProductList
            showsVerticalScrollIndicator={false}
            data={products.data}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <Product
                onPress={() => navigation.navigate('Type', { product_id: item.id, product_name: item.name })
                }
              >
                <ProductImage source={{ uri: `http://192.168.1.3:5000/files/${item.image}` }} />
                <ProductData>
                  <ProductName>{item.name}</ProductName>
                  <ProductDescription>{item.description}</ProductDescription>
                </ProductData>
              </Product>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
