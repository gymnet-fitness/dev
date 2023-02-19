﻿import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.module.css';

const SectionRecognitionMaybe = props => {
    const { options, publicData } = props;
    if (!publicData) {
        return null;
    }

    const selectedOptions = publicData && publicData.recognition ? publicData.recognition : [];
    const selectedConfigOptions = options.filter(o => selectedOptions.find(s => s === o.key));

    return (
        <div className={css.sectionFeatures}>
            <h2 className={css.featuresTitle}>
                <FormattedMessage id="ListingPage.recognitionTitle" />
            </h2>
            <PropertyGroup
                id="ListingPage.recognition"
                options={selectedConfigOptions}
                selectedOptions={selectedOptions}
                twoColumns={selectedConfigOptions.length > 5}
            />
        </div>
    );
};

export default SectionRecognitionMaybe;