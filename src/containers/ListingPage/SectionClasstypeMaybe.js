import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

// Import css from existing CSS Modules file:
import css from './ListingPage.module.css';

// Create new React component
const SectionClasstypeMaybe = props => {
  // Component's props should include all the possible options (from config)
  // and listing's publicData
  const { options, publicData } = props;

  // Don't return anything if public data doesn't contain classtype field
  // That's why we named this component as SectionclasstypeMaybe
  if (!publicData) { 
    return null;
  }

const selectedOptions = publicData && publicData.classtype ? publicData.classtype : [];
    const selectedConfigOptions = options.filter(o => selectedOptions.find(s => s === o.key));

  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
	   <FormattedMessage id="ListingPage.classtypeTitle" />
      </h2>
      <PropertyGroup
                id="ListingPage.classtype"
                options={selectedConfigOptions}
                selectedOptions={selectedOptions}
                twoColumns={selectedConfigOptions.length > 5}
            />
      
    </div>
  );
};

export default SectionClasstypeMaybe;