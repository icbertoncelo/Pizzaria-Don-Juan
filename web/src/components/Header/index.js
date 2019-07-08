import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import { HeaderContainer, LogoContainer, UserDataContainer } from './styles';

import Logo from '~/assets/logo.png';

const Header = ({ logout }) => (
  <HeaderContainer>
    <LogoContainer>
      <img src={Logo} alt="Logo" />
      <strong>Pizzaria Don Juan</strong>
    </LogoContainer>
    <UserDataContainer>
      <strong>Admin</strong>
      <button type="button" onClick={logout}>
        Sair
      </button>
    </UserDataContainer>
  </HeaderContainer>
);

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Header);
