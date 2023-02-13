import React from 'react';
import PropTypes from 'prop-types';
import LogoImage from './gymnet-logo.png';

const IconLogo = props => {
  const { className, format, ...rest } = props;

  if (format === 'desktop') {
    return (
        <img src={LogoImage} alt="Logo" />
    );
  }

  return (
      <img src={LogoImage} alt="Logo" />
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
