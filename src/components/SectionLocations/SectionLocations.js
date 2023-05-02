import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import miamiImage from './images/miami.jpg';
import chicagoImage from './images/chicago.png';
import atlImage from './images/atl-yogi.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Atlanta',
          atlImage,
          '?address=Atlanta%2C%20Georgia%2C%20USA&bounds=33.919%2C-84.244%2C33.587%2C-84.633'
        )}
        {locationLink(
          'Chicago',
          chicagoImage,
          '?address=Chicago%2C%20Illinois%2C%20United%20States&bounds=42.034895347%2C-87.509753018%2C41.644286%2C-87.869226'
        )}
        {locationLink(
          'Miami',
          miamiImage,
          '?address=Miami%20Beach%2C%20Miami%2C%20Florida%2033125%2C%20United%20States&bounds=25.96759075%2C-80.02646385%2C25.61146077%2C-80.34572239'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
