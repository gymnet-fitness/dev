import React from 'react';
import {
    LayoutSingleColumn,
    LayoutWrapperTopbar,
    LayoutWrapperMain,
    LayoutWrapperFooter,
    Footer,
} from '../../components';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './FAQPage.module.css';

const FAQPage = () => {
    // prettier-ignore
    return (
        <StaticPage
            title="Frequently Asked Questions"
            schema={{
                "@context": "http://schema.org",
                "@type": "FAQPage",
                "description": "Frequently asked questions about GymNet.",
                "name": "Frequently Asked Questions",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How does GymNet work?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Answer: Lorem ipsum"
                        }
                    }
                ]
            }}
        >
    );
};

export default FAQPage;