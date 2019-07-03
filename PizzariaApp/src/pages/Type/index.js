import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TypesProductsActions from '~/store/ducks/types';

import {
  Container, TypeList, TypeComponent, TypeImage, TypeName,
} from './styles';

import { Error, Loading } from '~/styles/common';

import Header from '~/components/Header';

class Type extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func,
    }).isRequired,
    getTypesProductsRequest: PropTypes.func.isRequired,
    types: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          image: PropTypes.string,
        }),
      ),
      error: PropTypes.bool,
      loading: PropTypes.bool,
    }).isRequired,
  };

  state = {
    product_id: '',
    product_name: '',
  }

  componentDidMount() {
    const { getTypesProductsRequest, navigation } = this.props;

    this.setState({
      product_id: navigation.getParam('product_id'),
      product_name: navigation.getParam('product_name'),
    });

    getTypesProductsRequest(navigation.getParam('product_id'));
  }

  render() {
    const { types, navigation } = this.props;
    const { product_id, product_name } = this.state;

    return (
      <Container>
        <Header leftButton="keyboard-arrow-left" leftAction="Main" title="Selecione um tipo" />
        {types.error && <Error>Erro ao carregar os tipos</Error>}
        {types.loading ? (
          <Loading />
        ) : (
          <TypeList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={types.data}
            keyExtractor={type => String(type.id)}
            renderItem={({ item }) => (
              <TypeComponent onPress={() => navigation.navigate('Size', {
                product_id,
                product_name,
                type_id: item.id,
                type_name: item.name,
                image: item.image,
                price: item.price,
              })}>
                <TypeImage source={{ uri: `http://192.168.0.13:5000/files/${item.image}` }} />
                <TypeName>{item.name}</TypeName>
              </TypeComponent>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  types: state.types,
});

const mapDispatchToProps = dispatch => bindActionCreators(TypesProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Type);
