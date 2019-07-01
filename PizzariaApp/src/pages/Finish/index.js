import React, { Component } from 'react';

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

export default class Finish extends Component {
  state = {
    notes: '',
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
  };

  render() {
    const {
      notes, cep, street, number, neighborhood,
    } = this.state;

    return (
      <Container>
        <Header
          leftButton="keyboard-arrow-left"
          leftAction="Shopp"
          title="Realizar Pedido"
          shoppPrice="60,00"
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
            <FinishOrderButton>
              <FinishText>Finalizar</FinishText>
            </FinishOrderButton>
          </Actions>
        </Form>
      </Container>
    );
  }
}
