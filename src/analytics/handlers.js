export class LoggingAnalyticsHandler {
  trackPageView(url) {
    console.log('Analytics page view:', url);
  }
}

// Meta Pixel Conversions API Handler
export class metaAnalyticsHandler {
'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const DeliveryCategory = bizSdk.DeliveryCategory;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;

const access_token = process.env.META_ACCESS_CODE;
const pixel_id = process.env.META_PIXEL_ID;
const api = bizSdk.FacebookAdsApi.init(access_token);

let current_timestamp = Math.floor(new Date() / 1000);

const userData = (new UserData())
                .setEmails(['joe@eg.com'])
                .setPhones(['12345678901', '14251234567'])
                // It is recommended to send Client IP and User Agent for Conversions API Events.
                .setClientIpAddress(request.connection.remoteAddress)
                .setClientUserAgent(request.headers['user-agent'])
                .setFbp('fb.1.1558571054389.1098115397')
                .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890');

const content = (new Content())
                .setId('product123')
                .setQuantity(1)
                .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

const customData = (new CustomData())
                .setContents([content])
                .setCurrency('usd')
                .setValue(123.45);

const serverEvent = (new ServerEvent())
                .setEventName('ViewContent')
                .setEventTime(current_timestamp)
                .setUserData(userData)
                .setCustomData(customData)
                .setEventSourceUrl('https://www.gymnet-fitness.com')
                .setActionSource('website');

const eventsData = [serverEvent];
const eventRequest = (new EventRequest(access_token, pixel_id))
                .setEvents(eventsData);

eventRequest.execute().then(
  response => {
    console.log('Response: ', response);
  },
  err => {
    console.error('Error: ', err);
  }
);
}



// Google Analytics 4 (GA4) using gtag.js script, which is included in server/rendered.js
// Note: the script is only available locally when running "yarn run dev-server"
export class GoogleAnalyticsHandler {
  constructor(gtag) {
    if (typeof gtag !== 'function') {
      throw new Error('Variable `gtag` missing for Google Analytics');
    }
    this.gtag = gtag;
  }
  trackPageView(canonicalPath, previousPath) {
    // GA4 property. Manually send page_view events
    // https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications
    // Note 1: You should turn "Enhanced measurement" off.
    //         It attaches own listeners to elements and that breaks in-app navigation.
    // Note 2: If previousPath is null (just after page load), gtag script sends page_view event automatically.
    //         Only in-app navigation needs to be sent manually from SPA.
    // Note 3: Timeout is needed because gtag script picks up <title>,
    //         and location change event happens before initial rendering.
    if (previousPath) {
      window.setTimeout(() => {
        this.gtag('event', 'page_view', {
          page_path: canonicalPath,
        });
      }, 300);
    }
  }
}
