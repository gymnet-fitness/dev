// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51LtFrDHeENO9vgrFoiTf0H0B4kTOXGPdf0eyRnmMnchvAF1Kp9bvZpOgUq8BOPFWPanY6wrHqu9rf1fEzrrrIwnS0009aiv6UG');

// You can find your endpoint's secret in your webhook settings
const endpointSecret = 'whsec_...';

// This example uses Express to receive webhooks
const express = require('express');

// Use body-parser to retrieve the raw body as a buffer
const bodyParser = require('body-parser');

const app = express();

// Use JSON parser for all non-webhook routes
app.use((req, res, next) => {
  if (req.originalUrl === '/webhook') {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

app.post('/webhook', bodyParser.raw({type: 'application/json'}), (req, res) => {
  let event;

  // Verify the event came from Stripe
  try {
    const sig = req.headers['stripe-signature'];
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    // On error, log and return the error message
    console.log(`❌ Error message: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Successfully constructed event
    switch (event.type) {
        case 'identity.verification_session.verified': {
            // All the verification checks passed
            const verificationSession = event.data.object;
            break;
        }
        case 'identity.verification_session.requires_input': {
            // At least one of the verification checks failed
            const verificationSession = event.data.object;

            console.log('Verification check failed: ' + verificationSession.last_error.reason);

            // Handle specific failure reasons
            switch (verificationSession.last_error.code) {
                case 'document_unverified_other': {
                    // The document was invalid
                    break;
                }
                case 'document_expired': {
                    // The document was expired
                    break;
                }
                case 'document_type_not_supported': {
                    // document type not supported
                    break;
                }
                default: {
                    // ...
                }
            }
        }
    }

  res.json({received: true});
});

app.listen(4242, () => {
  console.log('Running on port 4242');
});