/////////////////////////////////////////////////////////
// Configurations related to listing.                  //
// Main configuration here is the extended data config //
/////////////////////////////////////////////////////////

// NOTE: if you want to change the structure of the data,
// you should also check src/util/configHelpers.js
// some validation is added there.

/**
 * Configuration options for listing fields (custom extended data fields):
 * - key:                           Unique key for the extended data field.
 * - scope (optional):              Scope of the extended data can be either 'public' or 'private'.
 *                                  Default value: 'public'.
 *                                  Note: listing doesn't support 'protected' scope atm.
 * - includeForListingTypes:        An array of listing types, for which the extended
 *   (optional)                     data is relevant and should be added.
 * - schemaType (optional):         Schema for this extended data field.
 *                                  This is relevant when rendering components and querying listings.
 *                                  Possible values: 'enum', 'multi-enum', 'text', 'long', 'boolean'.
 * - enumOptions (optional):        Options shown for 'enum' and 'multi-enum' extended data.
 *                                  These are used to render options for inputs and filters on
 *                                  EditListingPage, ListingPage, and SearchPage.
 * - filterConfig:                  Filter configuration for listings query.
 *    - indexForSearch (optional):    If set as true, it is assumed that the extended data key has
 *                                    search index in place. I.e. the key can be used to filter
 *                                    listing queries (then scope needs to be 'public').
 *                                    Note: Flex CLI can be used to set search index for the key:
 *                                    https://www.sharetribe.com/docs/references/extended-data/#search-schema
 *                                    Read more about filtering listings with public data keys from API Reference:
 *                                    https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
 *                                    Default value: false,
 *   - filterType:                    Sometimes a single schemaType can be rendered with different filter components.
 *                                    For 'enum' schema, filterType can be 'SelectSingleFilter' or 'SelectMultipleFilter'
 *   - label:                         Label for the filter, if the field can be used as query filter
 *   - searchMode (optional):         Search mode for indexed data with multi-enum schema.
 *                                    Possible values: 'has_all' or 'has_any'.
 *   - group:                         SearchPageWithMap has grouped filters. Possible values: 'primary' or 'secondary'.
 * - showConfig:                    Configuration for rendering listing. (How the field should be shown.)
 *   - label:                         Label for the saved data.
 *   - isDetail                       Can be used to hide detail row (of type enum, boolean, or long) from listing page.
 *                                    Default value: true,
 * - saveConfig:                    Configuration for adding and modifying extended data fields.
 *   - label:                         Label for the input field.
 *   - placeholderMessage (optional): Default message for user input.
 *   - isRequired (optional):         Is the field required for providers to fill
 *   - requiredMessage (optional):    Message for those fields, which are mandatory.
 */
export const listingFields = [
  {
    key: 'workout-types',
    scope: 'public',
    includeForTransactionTypes: [
      'hourly-booking',
    ],
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'aerial', label: 'Aerial' },
      { option: 'barre', label: 'Barre' },
      { option: 'bootcamp', label: 'Bootcamp' },
      { option: 'boxing', label: 'Boxing' },
      { option: 'cardio', label: 'Cardio' },
      { option: 'circuit', label: 'Circuit Training' },
      { option: 'crossfit', label: 'CrossFit' },
      { option: 'cycling', label: 'Cycling' },
      { option: 'dance', label: 'Dance' },
      { option: 'hiit', label: 'HIIT' },
      { option: 'pilates', label: 'Pilates' },
      { option: 'pole', label: 'Pole Dance' },
      { option: 'running', label: 'Running' },
      { option: 'strength', label: 'Strength Training' },
      { option: 'swimming', label: 'Swimming' },
      { option: 'water-aerobics', label: 'Water Aerobics' },
      { option: 'weights', label: 'Weight Lifting' },
      { option: 'yoga', label: 'Yoga' },

    ],
    filterConfig: {
      indexForSearch: true,
      filterType: 'SelectMultipleFilter',
      label: 'Workout Types',
      group: 'primary',
    },
    showConfig: {
      label: 'Workout Types',
      isDetail: true,
    },
    saveConfig: {
      label: 'Workout Types',
      placeholderMessage: 'Select an option…',
      isRequired: true,
      requiredMessage: 'You need to select at least one workout type.',
    },
  },
  {
    key: 'recognition',
    scope: 'public',
    includeForTransactionTypes: [
      'hourly-booking',
    ],
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'best-of-city', label: 'Best of the City Award' },
      { option: 'top-rated', label: 'Top Rated' },
      { option: 'black-owned', label: 'Black Owned' },
      { option: 'women-owned', label: 'Women Owned' },
      { option: 'minority-owned', label: 'Minority Owned' },
      { option: 'veteran-owned', label: 'Veteran Owned' },
      { option: 'family-owned', label: 'Family Owned' },
      { option: 'locally-owned', label: 'Locally Owned' },

    ],
    filterConfig: {
      indexForSearch: true,
      label: 'Awards and Recognitions',
      group: 'secondary',
    },
    showConfig: {
      label: 'Awards and Recognitions',
      isDetail: true,
    },
    saveConfig: {
      label: 'Awards and Recognitions',
      placeholderMessage: 'Select an option…',
      isRequired: false,
      requiredMessage: 'You need to select a tire size.',
    },
  },
  {
    key: 'certificate',
    scope: 'public',
    includeForTransactionTypes: [
      'hourly-booking',
    ],
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'none', label: 'None' },
      { option: 'ACSM', label: 'The American College of Sports Medicine (ACSM)' },
      { option: 'NSCA', label: 'The National Strength and Conditioning Association (NSCA)' },
      { option: 'NASM', label: 'The National Academy of Sports Medicine (NASM)' },
      { option: 'ACE', label: 'The American Council on Exercise Certification (ACE)' },
      { option: 'RYT', label: 'Registered Yoga Teacher (RYT)' },
      { option: 'ERYT', label: 'Experienced Registered Yoga Teacher (ERYT)' },
      { option: 'ISSA', label: 'The International Sports Sciences Association (ISSA)' },
      { option: 'AFPA', label: 'The American Professionals Fitness and Associates(AFPA)' },
      { option: 'NFPT', label: 'The National Federation of Professional Trainers (NFPT)' },
    ],
    filterConfig: {
      indexForSearch: true,
      label: 'Training Certification(s)',
      group: 'secondary',
    },
    showConfig: {
      label: 'Training Certification(s)',
      isDetail: true,
    },
    saveConfig: {
      label: 'Training Certification(s)',
      placeholderMessage: 'Select an option…',
      isRequired: true,
      requiredMessage: 'You need to select a training certification option.',
    },
  },
  {
    key: 'classtype',
    scope: 'public',
    includeForTransactionTypes: [
      'hourly-booking',
    ],
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'virtual', label: 'Virtual Training' },
      { option: 'group', label: 'Group Classes' },
      { option: 'personal', label: 'Personal Training' },
      { option: 'maternity', label: 'Maternity' },
      { option: 'post-partum', label: 'Post Partum' },
      { option: 'athlete', label: 'Athlete Training' },
    ],
    filterConfig: {
      indexForSearch: true,
      label: 'Class Type',
      searchMode: 'has_all',
      group: 'primary',
    },
    showConfig: {
      label: 'Class Type',
    },
    saveConfig: {
      label: 'Class Type',
      placeholderMessage: 'Select an option…',
      isRequired: true,
      requiredMessage: 'You need to select at least one class type.',
    },
  },

  // // An example of how to use transaction type specific custom fields and private data.
  // {
  //   key: 'note',
  //   scope: 'public',
  //   includeForListingTypes: ['product-selling'],
  //   schemaType: 'text',
  //   showConfig: {
  //     label: 'Extra notes',
  //   },
  //   saveConfig: {
  //     label: 'Extra notes',
  //     placeholderMessage: 'Some public extra note about this bike...',
  //   },
  // },
  // {
  //   key: 'privatenote',
  //   scope: 'private',
  //   includeForListingTypes: ['daily-booking'],
  //   schemaType: 'text',
  //   saveConfig: {
  //     label: 'Private notes',
  //     placeholderMessage: 'Some private note about this bike...',
  //   },
  // },
];

///////////////////////////////////////////////////////////////////////
// Configurations related to listing types and transaction processes //
///////////////////////////////////////////////////////////////////////

// A presets of supported listing configurations
//
// Note 1: With first iteration of hosted configs, we are unlikely to support
//         multiple listing types, even though this template has some
//         rudimentary support for it.
// Note 2: transaction type is part of listing type. It defines what transaction process and units
//         are used when transaction is created against a specific listing.

/**
 * Configuration options for listing experience:
 * - listingType:     Unique string. This will be saved to listing's public data on
 *                    EditListingWizard.
 * - label            Label for the listing type. Used as microcopy for options to select
 *                    listing type in EditListingWizard.
 * - transactionType  Set of configurations how this listing type will behave when transaction is
 *                    created.
 *   - process          Transaction process.
 *                      The process must match one of the processes that this client app can handle
 *                      (check src/util/transaction.js) and the process must also exists in correct
 *                      marketplace environment.
 *   - alias            Valid alias for the aforementioned process. This will be saved to listing's
 *                      public data as transctionProcessAlias and transaction is initiated with this.
 *   - unitType         Unit type is mainly used as pricing unit. This will be saved to
 *                      transaction's protected data.
 *                      Recommendation: don't use same unit types in completely different processes
 *                      ('item' sold should not be priced the same as 'item' booked).
 * - stockType        This is relevant only to listings with product-selling listing type.
 *                    If set to 'oneItem', stock management is not showed and the listing is
 *                    considered unique (stock = 1).
 *                    Possible values: 'oneItem' and 'multipleItems'.
 *                    Default: 'multipleItems'.
 */

export const listingTypes = [
  // {
  //     listingType: 'daily-booking',
  //     label: 'Daily booking',
  //     transactionType: {
  //       process: 'default-booking',
  //       alias: 'default-booking/release-1',
  //       unitType: 'day',
  //     },
  //   },
  // // Here are some examples for other listingTypes
  // // TODO: SearchPage does not work well if both booking and product selling are used at the same time
  // {
  //   listingType: 'nightly-booking',
  //   label: 'Nightly booking',
  //   transactionType: {
  //     process: 'default-booking',
  //     alias: 'default-booking/release-1',
  //     unitType: 'night',
  //   },
  // },
   {
     listingType: 'hourly-booking',
     label: 'Hourly booking',
     transactionType: {
       process: 'default-booking',
       alias: 'flex-hourly-default-process/release-1',
       unitType: 'hour',
     },
   },
  // {
  //   listingType: 'product-selling',
  //   label: 'Sell bicycles',
  //   transactionType: {
  //     process: 'default-purchase',
  //     alias: 'default-purchase/release-1',
  //     unitType: 'item',
  //   },
  //   stockType: 'multipleItems',
  // },
];

// SearchPage can enforce listing query to only those listings with valid listingType
// However, it only works if you have set 'enum' type search schema for the public data fields
//   - listingType
//
//  Similar setup could be expanded to 2 other extended data fields:
//   - transactionProcessAlias
//   - unitType
//
// Read More:
// https://www.sharetribe.com/docs/how-to/manage-search-schemas-with-flex-cli/#adding-listing-search-schemas
export const enforceValidListingType = false;
