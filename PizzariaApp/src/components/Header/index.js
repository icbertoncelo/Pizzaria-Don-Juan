import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  Container, Content, LeftButton, Title, RightButton,
} from './styles';

import BackGround from '~/assets/header-background.png';

const Header = ({
  leftButton,
  leftAction,
  title,
  rightButton,
  rightAction,
  navigation,
  shoppPrice,
}) => (
  <Container source={BackGround}>
    <StatusBar backgroundColor="#0b2031" barStyle="light-content" />
    <Content>
      <LeftButton onPress={() => navigation.navigate(leftAction)}>
        <Icon name={leftButton} size={30} color="#fff" />
      </LeftButton>
      <Title>{title}</Title>
      {shoppPrice ? (
        <Title>R${shoppPrice}</Title>
      ) : (
        <RightButton onPress={() => navigation.navigate(rightAction)}>
          <Icon name={rightButton} size={30} color="#fff" />
        </RightButton>
      )}
    </Content>
  </Container>
);

export default withNavigation(Header);
