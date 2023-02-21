﻿import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { Boolean } from '../../components';

// Import css from existing CSS Modules file:
import css from './ListingPage.module.css';

// Create new React component
const SectionBackgroundMaybe = props => {
    // Component's props should include all the possible options (from config)
    // and listing's publicData
    const { options, publicData } = props;
    const selectedOption =
        publicData && publicData.background ? publicData.background : null;

    // Don't return anything if public data doesn't contain view field
    // That's why we named this component as SectionViewMaybe
    if (!publicData || !selectedOption) {
        return null;
    }

    // Find selected options label
    const optionConfig = options.find(o => o.key === selectedOption);
    const optionLabel = optionConfig ? optionConfig.label : null;
    return (
        <div className={css.sectionFeatures}>
            <h2>
                <FormattedMessage
                    id="ListingPage.background"
                />
            </h2>
            <Boolean
                id="ListingPage.background"
                options={selectedConfigOptions}
                selectedOptions={selectedOptions}
                twoColumns={selectedConfigOptions.length > 5}
                />
        </div>
    );
};

export default SectionBackgroundMaybe;