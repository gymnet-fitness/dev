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
          <h1 className={css.pageTitle}>Working out has never been easier</h1>
          

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <img src={image} alt="Athlete" />
              <p>"Cross-training is crucial to staying healthy and giving my body a break. With GymNet, I can easily incorporate a spin or elliptical session into my training when I need it without the hassle of joining a gym!" - Elizabeth Laseter, competitive runner and beer miler</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                We get it - you're tired of the traditional gym with high membership fees, crowded spaces, and lack of expertise to guide you. <br/>With GymNet, find a trainer or gym near you at a time that works in your schedule.
              </h2>

              <p>
                Whether you're looking to try out the latest cardio equipment, want to get in a low-impact swim, or even work with a personal trainer, GymNet is here to help.
                Our site makes it simple and fast to browse, book, and pay all in one place so you can focus on getting in the best shape of your life.              
              </p>

              <h3 className={css.subtitle}>Are you a personal trainer or gym owner?</h3>

              <p>
                GymNet helps you grow your business and client base. Click on 'List My Gym' to get started on listing your gym or training services. Listing is FREE with GymNet.
              </p>    
            </div>
          </div>
          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p></p>
            </div>
         
            <div className={css.contentMain}>
              <h1 className={css.pageTitle}>About GymNet</h1>
            <h2>
              Our Values
              </h2>

            <ul>
              <li><b>Health</b></li>
              <li><b>Sustainability</b></li>
              <li><b>Community</b></li>
              <li><b>Creativity</b></li>
            </ul>
            <h2>
              Our Philosophy
              </h2>
            <p>In today's day and age, <b>connection</b> is more important than ever. At GymNet, we believe that connection includes connecting with:</p>
            <ul>
              <li><b>Yourself</b> - be kind to and take care of your mind, body and spirit. Being active stat - longevity and decreased stress.</li>
              <li><b>Community</b> - GymNet intentionally focuses on building a network of trainers, gyms, and athletes in communities. Connecting with your neighbors and fellow residents through exercise builds diversity, community and harmony.</li>
              <li><b>The Environment</b> - You can feel good about the impact you have through GymNet because it reduces waste typically created by the traditional fitness industry. By reusing and sharing existing gyms and equipment, you are reducing your carbon footprint. Additionally, GymNet is committed to donating a portion of its revenue to non-profits on a mission to reduce our carbon footprint as humans.</li>
            </ul>

            <h2>
              Our Impact
              </h2>
            <ul>
              <li><b>Environmental Impact</b> - GymNet helps reduce exercise equipment waste that the traditional gym creates. We are focused on reusing and sharing existing gyms and equipment to lower the impact we have to the environment.</li>
              <li><b>Financial impact</b> - A portion of GymNet's revenue is automatically donated to non-profits committed to reducing the environmental impact of humans. </li> 
              <li><b>Sustainable Products</b> - GymNet's retail products are sourced with goods and materials through partnerships with leading sustainable brands.</li>
              </ul>
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
