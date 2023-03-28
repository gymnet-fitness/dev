import React from 'react';
import { bool, object } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { propTypes } from '../../util/types';
import config from '../../config';
import {
  Page,
  SectionHero,
  SectionHowItWorks,
  SectionLocations,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { TopbarContainer } from '../../containers';

import facebookImage from '../../assets/yogatimeFacebook-1200x630.jpg';
import twitterImage from '../../assets/yogatimeTwitter-600x314.jpg';
import css from './LandingPage.module.css';

  // Importing Brandpush trust badge
import rightLeaf from '../../assets/rightleaf.png';
import leftLeaf from '../../assets/leftleaf.png';
import usaToday from '../../assets/usatoday.png';
import digitalJournal from '../../assets/digitaljournal.png';
import ncn from '../../assets/ncn.png';
import marketWatch from '../../assets/marketwatch.png';
import benzinga from '../../assets/benzinga.png';
import checkmark from '../../assets/checkmark.png';

export const LandingPageComponent = props => {
  const {
    history,
    intl,
    location,
    scrollingDisabled,
    currentUserListing,
    currentUserListingFetched,
  } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        { url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 },
      ]}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage],
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <div className={css.heroContainer}>
            <SectionHero className={css.hero} history={history} location={location} />
          </div>
	  
<div style="width: 100%; margin-top: 10px; all: unset;">
    
    <div id="brandpush-trust-badge" style="position: relative; width: 100%; background: #fff; border-radius: 10px; min-height: 180px; margin-left: auto; margin-right: auto;">
        <div style="text-align: center; padding: 30px 5px 15px 5px; font-size: 18px; font-family: sans-serif; font-weight: 600; letter-spacing: 8px;">
            <div>
                <span class="brandpush-title-hr" style="border-top: 1.5px solid #dadada; position: absolute; padding: 0; margin: 0 0 0 5%; width: 90%; top: 30px; left: 0; z-index: 0;"></span>
                <span class="brandpush-title" style="background-color: #fff; z-index: 1; position: relative; padding: 0 20px; margin: 0; top: -13px; color: #000;">AS SEEN ON</span>
            </div>
            <div class="brandpush-logo-container" style="text-align: center; margin: 0 auto;">
                <img
                    class="brandpush-leaf"
                    style="position: absolute; height: 110px; opacity: 0; left: 25px; margin: 0; padding: 0; z-index: 0;"
                    src={leftLeaf}
                />
                <img
                    class="brandpush-leaf"
                    style="position: absolute; height: 110px; opacity: 0; right: 25px; margin: 0; padding: 0; z-index: 0; -webkit-transform: scaleX(-1); transform: scaleX(-1);"
                    src={rightLeaf}
                />
                <div class="brandpush-logo-container-item">
                    <div class="brandpush-vertical-center">
                        <a
                            href="http://finance.azcentral.com/azcentral/article/getnews-2023-3-10-atlanta-based-startup-gymnet-is-revolutionizing-the-fitness-industry-with-their-innovative-new-workout-model/"
                            target="_Blank"
                            rel="nofollow"
                        >
                            <img
                                alt="Featured on USA Today"
                                class="brandpush-news-logo"
                                style="max-width: 100px;"
                                src={usaToday}
                            />
                        </a>
                        <a
                            href="https://digitaljournal.com/pr/news/atlanta-based-startup-gymnet-is-revolutionizing-the-fitness-industry-with-their-innovative-new-workout-model"
                            target="_Blank"
                            rel="nofollow"
                        >
                            <img
                                alt="Featured on DigitalJournal"
                                class="brandpush-news-logo"
                                src={digitalJournal}
                            />
                        </a>
                        <a
                            href="https://www.newschannelnebraska.com/story/48524299/atlantabased-startup-gymnet-is-revolutionizing-the-fitness-industry-with-their-innovative-new-workout-model"
                            target="_Blank"
                            rel="nofollow"
                        >
                            <img
                                alt="Featured on NCN"
                                class="brandpush-news-logo"
                                style="max-width: 80px;"
                                src={ncn}
                            />
                        </a>
                        <a
                            href="https://www.marketwatch.com/press-release/atlanta-based-startup-gymnet-is-revolutionizing-the-fitness-industry-with-their-innovative-new-workout-model-2023-03-09"
                            target="_Blank"
                            rel="nofollow"
                        >
                            <img
                                alt="Featured on Market Watch"
                                class="brandpush-news-logo"
                                style="max-width: 83px;"
                                src={marketWatch}
                            />
                        </a>
                        <a
                            href="https://www.benzinga.com/pressreleases/23/03/ab31290363/atlanta-based-startup-gymnet-is-revolutionizing-the-fitness-industry-with-their-innovative-new-wo
 "
                            target="_Blank"
                            rel="nofollow"
                        >
                            <img
                                alt="Featured on Benzinga"
                                class="brandpush-news-logo"
                                style="max-width: 125px;"
                                src={benzinga}
                            />
                        </a>
                    </div>
                </div>
                <div>
                    <span
                        class="brandpush-footer"
                        style="text-align: center; padding: 0 20px; font-size: 13px; font-family: sans-serif; font-weight: 600; letter-spacing: 3px; position: relative; width: 100%; margin: 0 0 8px 0; display: inline-block; color: #a5a5a5;"
                    >
                        AND OVER 400 NEWS SITES
                    </span>
                    <div style="color: #717171; font-size: 10px; letter-spacing: 0; height: 15px; margin: 3px 0 10px 0; display: flex; justify-content: center; align-content: center; align-items: center;">
                        <img
                            style="width: 12px; margin: 0 3px 0 0;"
                            src={checkmark}
                        />
                        <span>
                            Verified by <a style="color: #717171;" href="https://www.brandpush.co?utm_source=Client+Referral&utm_medium=Trust+Badge&utm_campaign=Trust+Badge&utm_content=1677701596175" target="_Blank">BrandPush.co</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

          <ul className={css.sections}>
            <li className={css.section}>
              <div className={css.sectionContentFirstChild}>
                <SectionLocations />
              </div>
            </li>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionHowItWorks
                  currentUserListing={currentUserListing}
                  currentUserListingFetched={currentUserListingFetched}
                />
              </div>
            </li>
          </ul>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

LandingPageComponent.defaultProps = {
  currentUserListing: null,
  currentUserListingFetched: false,
};

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { currentUserListing, currentUserListingFetched } = state.user;

  return {
    scrollingDisabled: isScrollingDisabled(state),
    currentUserListing,
    currentUserListingFetched,
  };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(LandingPageComponent);

export default LandingPage;
