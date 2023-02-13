import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './logo.png';

import css from './Topbar.module.css';



const MenuIcon = props => {
  const { className, rootClassName } = props;
  const classes = classNames(rootClassName || css.rootMenuIcon, className);

    
    return <img src={Logo} alt="Logo" />;
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
