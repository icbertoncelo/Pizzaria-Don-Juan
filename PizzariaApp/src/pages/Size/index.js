import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SizesProductsActions from '~/store/ducks/sizes';
import ShoppActions from '~/store/ducks/shopp';

import {
  Container, SizeList, SizeComponent, SizeImage, SizeName, SizePrice,
} from './styles';
import { Error, Loading } from '~/styles/common';

import Header from '~/components/Header';

class Size extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func,
    }).isRequired,
    getSizesProductsRequest: PropTypes.func.isRequired,
    addItemSuccess: PropTypes.func.isRequired,
    sizes: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          image: PropTypes.string,
          additional: PropTypes.float,
        }),
      ),
      error: PropTypes.bool,
      loading: PropTypes.bool,
    }).isRequired,
  };

  state = {
    product_id: '',
    product_name: '',
    type_id: '',
    type_name: '',
    image: '',
    price: '',
  }

  componentDidMount() {
    const { getSizesProductsRequest, navigation } = this.props;

    this.setState({
      product_id: navigation.getParam('product_id'),
      product_name: navigation.getParam('product_name'),
      type_id: navigation.getParam('type_id'),
      type_name: navigation.getParam('type_name'),
      image: navigation.getParam('image'),
      price: navigation.getParam('price'),
    });

    getSizesProductsRequest(navigation.getParam('product_id'));
  }

  handleSubmit = ({ name: size, additional, id: size_id }) => {
    const { product_id, product_name, type_id, type_name, image, price } = this.state;
    const { addItemSuccess, navigation } = this.props;
    const id = Math.floor(Math.random() * 100); 
    const unit_price = price * additional;

    addItemSuccess({
      id,
      product_id,
      product_name,
      type_id,
      type_name,
      image,
      size_id,
      size,
      unit_price,
      amount: 1,
    });

    navigation.navigate('Shopp');
  }

  render() {
    const { sizes } = this.props;
    const { price } = this.state;

    return (
      <Container>
        <Header leftButton="keyboard-arrow-left" leftAction="Type" title="Selecione um tamanho" />
        {sizes.error && <Error>Erro ao carregar os tipos</Error>}
        {sizes.loading ? (
          <Loading />
        ) : (
          <SizeList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={sizes.data}
            keyExtractor={size => String(size.id)}
            renderItem={({ item }) => (
              <SizeComponent onPress={() => this.handleSubmit(item)}>
                <SizeImage source={{ uri: `http://192.168.1.3:5000/files/${item.image}` }} />
                <SizeName>{item.name}</SizeName>
                <SizePrice>R${(item.additional * price).toFixed(2)}</SizePrice>
              </SizeComponent>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  sizes: state.sizes,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...SizesProductsActions, ...ShoppActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Size);
