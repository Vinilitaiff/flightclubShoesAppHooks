import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, CartBtn, ItemCount, LogoBtn } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <LogoBtn onPress={() => navigation.navigate('Home')}>
        <Logo />
      </LogoBtn>
      <CartBtn onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <ItemCount>{cartSize || 0}</ItemCount>
      </CartBtn>
    </Container>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
