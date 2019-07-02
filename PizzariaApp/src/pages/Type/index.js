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

  componentDidMount() {
    const { getTypesProductsRequest } = this.props;

    getTypesProductsRequest('2');
  }

  render() {
    const { types } = this.props;

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
              <TypeComponent onPress={() => this.props.navigation.navigate('Size')}>
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
