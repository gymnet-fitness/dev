import React, { Component, useEffect } from 'react';
import { array, arrayOf, bool, func, number, object, oneOf, shape, string } from 'prop-types';
import classNames from 'classnames';

// Import configs and util modules
import { useConfiguration } from '../../../context/configurationContext';
import { useRouteConfiguration } from '../../../context/routeConfigurationContext';
import { FormattedMessage, intlShape, useIntl } from '../../../util/reactIntl';
import { createResourceLocatorString } from '../../../util/routes';
import { withViewport } from '../../../util/uiHelpers';
import {
  SCHEMA_TYPE_ENUM,
  SCHEMA_TYPE_MULTI_ENUM,
  SCHEMA_TYPE_TEXT,
  SCHEMA_TYPE_LONG,
  SCHEMA_TYPE_BOOLEAN,
  propTypes,
} from '../../../util/types';
import {
  LISTING_PAGE_PARAM_TYPE_DRAFT,
  LISTING_PAGE_PARAM_TYPE_NEW,
  LISTING_PAGE_PARAM_TYPES,
} from '../../../util/urlHelpers';
import { ensureCurrentUser, ensureListing } from '../../../util/data';
import { BOOKING_PROCESS_NAME, isBookingProcess } from '../../../transactions/transaction';

// Import shared components
import {
  Heading,
  Modal,
  NamedRedirect,
  Tabs,
  StripeConnectAccountStatusBox,
  StripeConnectAccountForm,
} from '../../../components';

// Import modules from this directory
import EditListingWizardTab, {
  DETAILS,
  PRICING,
  PRICING_AND_STOCK,
  DELIVERY,
  LOCATION,
  AVAILABILITY,
  PHOTOS,
} from './EditListingWizardTab';
import css from './EditListingWizard.module.css';

const request = require('request');

const sharetribeUrl = process.env.REACT_APP_MARKETPLACE_ROOT_URL;
const checkrApiKey = process.env.CHECKR_API_KEY;

// This function creates a new background check request in Checkr
function createCheckrBackgroundCheck(userId, firstName, lastName, email, callback) {
  const options = {
    url: 'https://api.checkr.com/v1/invitations',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${checkrApiKey}`,
    },
    body: JSON.stringify({
      candidate: {
        first_name: firstName,
        last_name: lastName,
        email: email,
      },
      package: 'tasker_standard',
      webhook: `${sharetribeUrl}/checkr_webhook/${userId}`,
      custom_id: userId,
    }),
  };

  request(options, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      callback(null, data.id);
    }
  });
}

// This function retrieves the status of a background check request in Checkr
function getCheckrBackgroundCheckStatus(checkrId, callback) {
  const options = {
    url: `https://api.checkr.com/v1/reports/${checkrId}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${checkrApiKey}`,
    },
  };

  request(options, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      callback(null, data.status);
    }
  });
}

// This is an example usage of the functions
createCheckrBackgroundCheck(${userId}, ${profile.firstName}, ${profile.lastName}, ${email}, (error, checkrId) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Checkr background check request created with ID ${checkrId}`);
    getCheckrBackgroundCheckStatus(checkrId, (error, status) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`Checkr background check status is ${status}`);
      }
    });
  }
});
