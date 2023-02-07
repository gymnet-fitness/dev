import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconPng } from './android-chrome-384x384.png'
import css from './Topbar.module.css';

const MenuIcon = props => {
  const { className, rootClassName } = props;
  const classes = classNames(rootClassName || css.rootMenuIcon, className);

  return (
      { IconPng }
  );
};

const { string } = PropTypes;

MenuIcon.defaultProps = {
  className: null,
  rootClassName: null,
};

MenuIcon.propTypes = {
  className: string,
  rootClassName: string,
};

export default MenuIcon;
