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
            <p>Answer: GymNet currently operates in the United States, with focused roll-outs in Atlanta, New York, and Los Angeles. Check back soon on new hosts in other areas.</p>
          </div>
          <div>
            <h3>What safety measures are in place?</h3>
            <p>Answer: We take the safety of our hosts and members very seriously at GymNet. Ensuring that everyone involved in a workout session is protected in the case of unexpected issues. Currently, all hosts are strongly recommended to have active renters' insurance. GymNet is working on expanding site-wide insurance for all parties for long-term coverage. </p>
            <p>All Hosts have the authority to approve or deny booking requests and message with members prior, during, and after the session.</p>
          </div>
          <div>
            <h3>How do reviews work?</h3>
            <p>Answer: Both hosts and members have the opportunity to review each other after a session is completed. Members and hosts can view each other's reviews prior to booking a session.</p>
          </div>
          <div>
            <h3>As a member, when am I charged for a session?</h3>
            <p>Answer: Members are charged at the time the host approves the requested session. Depending on your payment method, the charge may not be reflected immediately in your financial account.</p>
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