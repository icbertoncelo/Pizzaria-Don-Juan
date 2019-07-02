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
  Error,
  Loading,
} from './styles';

import Header from '~/components/Header';

class Main extends Component {
  static propTypes = {
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
    const { products } = this.props;
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
              <Product onPress={() => this.props.navigation.navigate('Type')}>
                <ProductImage source={{ uri: `http://192.168.0.13:5000/files/${item.image}` }} />
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
