import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderActions from '~/store/ducks/order';

import {
  Container,
  Form,
  Input,
  StreetNumber,
  Actions,
  FinishOrderButton,
  FinishText,
} from './styles';

import Header from '~/components/Header';

class Finish extends Component {
  static propTypes = {
    finishOrderRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
    shopp: PropTypes.shape({
      totalValue: PropTypes.float,
    }).isRequired,
  };

  state = {
    notes: '',
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
  };

  handleSubmit = () => {
    const { finishOrderRequest, shopp, user } = this.props;
    const { notes, cep } = this.state;

    const order = new Object({
      cep,
      notes,
      total_value: shopp.totalValue,
      user_id: user.id,
    });

    finishOrderRequest(order);
  };

  render() {
    const {
      notes, cep, street, number, neighborhood,
    } = this.state;

    const { shopp } = this.props;

    return (
      <Container>
        <Header
          leftButton="keyboard-arrow-left"
          leftAction="Shopp"
          title="Realizar Pedido"
          shoppPrice={shopp.totalValue}
        />
        <Form>
          <Input
            multiline
            numberOfLines={4}
            height="120px"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Alguma obrervação?"
            underlineColorAndroid="transparent"
            value={notes}
            onChangeText={text => this.setState({ notes: text })}
          />
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Qual o seu CEP"
            underlineColorAndroid="transparent"
            value={cep}
            onChangeText={text => this.setState({ cep: text })}
          />
          <StreetNumber>
            <Input
              width="50%"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Rua"
              underlineColorAndroid="transparent"
              value={street}
              onChangeText={text => this.setState({ street: text })}
            />
            <Input
              width="48%"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="N°"
              underlineColorAndroid="transparent"
              value={number}
              onChangeText={text => this.setState({ number: text })}
            />
          </StreetNumber>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Bairro"
            underlineColorAndroid="transparent"
            value={neighborhood}
            onChangeText={text => this.setState({ neighborhood: text })}
          />
          <Actions>
            <FinishOrderButton onPress={this.handleSubmit}>
              <FinishText>Finalizar</FinishText>
            </FinishOrderButton>
          </Actions>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  shopp: state.shopp,
  user: state.auth.data.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Finish);
