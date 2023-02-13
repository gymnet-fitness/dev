import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './logo.png';

import css from './ManageListingCard.module.css';

const MenuIcon = props => {
  const { className, isActive } = props;
  const classes = classNames(css.menuIcon, className);
  const filter = isActive ? '' : 'url(#a)';
    return <img src={Logo} alt="Logo" />;
};

MenuIcon.defaultProps = {
  className: null,
  isActive: false,
};

const { bool, string } = PropTypes;

MenuIcon.propTypes = {
  className: string,
  isActive: bool,
};

export default MenuIcon;
