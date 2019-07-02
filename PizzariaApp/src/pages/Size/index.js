import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SizesProductsActions from '~/store/ducks/sizes';

import {
  Container, SizeList, SizeComponent, SizeImage, SizeName, SizePrice,
} from './styles';
import { Error, Loading } from '~/styles/common';

import Header from '~/components/Header';

class Size extends Component {
  static propTypes = {
    getSizesProductsRequest: PropTypes.func.isRequired,
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

  componentDidMount() {
    const { getSizesProductsRequest } = this.props;

    getSizesProductsRequest('2');
  }

  render() {
    const { sizes } = this.props;

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
              <SizeComponent onPress={() => this.props.navigation.navigate('Shopp')}>
                <SizeImage source={{ uri: `http://192.168.0.13:5000/files/${item.image}` }} />
                <SizeName>{item.name}</SizeName>
                <SizePrice>R${item.additional} * type</SizePrice>
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

const mapDispatchToProps = dispatch => bindActionCreators(SizesProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Size);
