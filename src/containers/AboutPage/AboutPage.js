import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About GymNet',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
         <h1 className={css.pageTitle}>Get in a great workout, wherever you are</h1>
          <img className={css.coverImage} src={image} alt="" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>GymNet connects people to nearby exercise spaces</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                GymNet aims to make it more convenient and affordable to get in a great workout, and easier for fitness trainers and gym owners to grow their business.
              </h2>

              <h3 className={css.subtitle}>Are you looking for new ways to be active?</h3>

              <p>
                GymNet connects you with a variety of opportunities to be active and add variety to your routine - no membership required! Members simply search for a desired workout and pay per booking.
              </p>

              <h3 id="contact" className={css.subtitle}>
                Are you a gym owner or personal trainer?
              </h3>
              <p>
                GymNet offers you a modern booking platform with direct payouts per booking. Hosts can list multiple spaces, message Members, share via social channels, and set their own prices. GymNet gives you all the modern website functionality to grow your business.
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteInstagramPage}>Instagram</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
