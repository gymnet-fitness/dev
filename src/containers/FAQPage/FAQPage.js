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
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1>Frequently Asked Questions</h1>

          <div>
            <h3>Where is GymNet available?</h3>
            <p>GymNet currently operates in the United States, with focused roll-outs in Atlanta, New York, and Los Angeles. Check back soon on new hosts in other areas.</p>
          </div>
          <div>
            <h3>What safety measures are in place?</h3>
                      <p>We take the safety of our hosts and members very seriously at GymNet. All GymNet Hosts undergo identity verification and a rigorous background check through our partner, <a class={css.ExternalLink} href="https://checkr.com/">Checkr</a>. Additionally, all host listings go through a screening process before being available for booking.</p>
                      <p>All Hosts have control over which booking requests they accept or deny. When a booking is approved, the member receives a confirmation message either through the website, email, or SMS.</p>
            <p>GymNet will soon include Host liability and property coverage through our services.</p>
          </div>
          <div>
            <h3>Can hosts control who books with them?</h3>
            <p>All Hosts have the authority to approve or deny booking requests and message with members prior, during, and after the session.</p>
          </div>
          <div>
            <h3>How do reviews work?</h3>
            <p>Both hosts and members have the opportunity to review each other after a session is completed. Members and hosts can view each other's reviews prior to booking a session.</p>
          </div>
          <div>
            <h3>As a member, when am I charged for a session?</h3>
            <p>Members are charged at the time the host approves the requested session. Depending on your payment method, the charge may not be reflected immediately in your financial account.</p>
          </div>
          <div>
            <h3>How much does GymNet cost?</h3>
            <p>Anyone can join the GymNet platform, free of charge. GymNet charges a small service fee for each approved booking that takes place, similar to other marketplace applications.</p>
          </div>
          <div>
            <h3>What types of workouts does GymNet have?</h3>
            <p>All types of workouts and specialties are welcome on GymNet! Are you a personal trainer? Do you teach swim lessons? Do you have a home gym, or want to expand your fitness studio's customer base? Then GymNet is for you! We are constantly adding new workout categories to our site to support our hosts and members.</p>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;