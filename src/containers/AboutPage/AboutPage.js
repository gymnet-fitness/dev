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
        description: 'About Yogatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

              <LayoutWrapperMain className={css.staticPageWrapper}>
                  <h1 className={css.pageTitle}>The GymNet Philosophy</h1>


                  <h1 className={css.pageTitle}>Discover new ways to work out with GymNet</h1>
          <img className={css.coverImage} src={image} alt="Athlete" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>"Cross-training is crucial to staying healthy and giving my body a break. With GymNet, I can easily incorporate a spin or elliptical session into my training when I need it without the hassle of joining a gym!" - Elizabeth Laseter, competitive runner and beer miler</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Each of us is an individual, and each one of us needs variety in our fitness routine to grow and challenge ourselves.
                With GymNet, athletes in the US can discover new fitness styles and options near them without the need for a monthly membership or expensive equipment.
              </h2>

              <p>
                Whether you're looking to try out the latest cardio equipment, want to get in a low-impact swim, or even work with a personal trainer, GymNet is here to help.
                Our site makes it simple and fast to browse, book, pay and review all in one place so you can focus on getting in the best shape of your life.              
              </p>

              <h3 className={css.subtitle}>Are you a trainer or gym owner?</h3>

              <p>
                GymNet offers you a platform through which you can connect with nearby athletes. Offering private sessions through GymNet offers you a
                possibility to grow your customer base and earn some extra revenue on top of your main income.
              </p>

              <h3 id="contact" className={css.subtitle}>
                Get In Touch
              </h3>
                          <p>
                              Have questions? Check out our <a class={css.ExternalLink} href="./faq">Frequently Asked Questions</a> or <a class={css.ExternalLink} href="mailto: liz@gymnet-fitness.com">Send Us An Email</a> or reach out via social media below.
              </p>
              <p>
                Follow us on {' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
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
