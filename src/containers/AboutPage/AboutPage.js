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


          <h1 className={css.pageTitle}>Working out has never been easier</h1>
          <img className={css.coverImage} src={image} alt="Athlete" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>"Cross-training is crucial to staying healthy and giving my body a break. With GymNet, I can easily incorporate a spin or elliptical session into my training when I need it without the hassle of joining a gym!" - Elizabeth Laseter, competitive runner and beer miler</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                We get it - you're tired of the traditional gym with high membership fees, crowded spaces, and lack of expertise to guide you. With GymNet, find a trainer or gym near you at a time that works in your schedule.
              </h2>

              <p>
                Whether you're looking to try out the latest cardio equipment, want to get in a low-impact swim, or even work with a personal trainer, GymNet is here to help.
                Our site makes it simple and fast to browse, book, and pay all in one place so you can focus on getting in the best shape of your life.              
              </p>

              <h3 className={css.subtitle}>Are you a personal trainer or gym owner?</h3>

              <p>
                GymNet helps you grow your business and client base. Click on 'List My Gym' to get started on listing your gym or training services. Listing is FREE with GymNet.
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
