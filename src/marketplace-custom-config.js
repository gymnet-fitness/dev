/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

export const filters = [
  {
    id: 'dates-length',
    label: 'Dates',
    type: 'BookingDateRangeLengthFilter',
    group: 'primary',
    // Note: BookingDateRangeFilter is fixed filter,
    // you can't change "queryParamNames: ['dates'],"
    queryParamNames: ['dates', 'minDuration'],
    config: {
      // A global time zone to use in availability searches. As listings
      // can be in various time zones, we must decide what time zone we
      // use in search when looking for available listings within a
      // certain time interval.
      //
      // If you have all/most listings in a certain time zone, change this
      // config value to that.
      //
      // See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
      searchTimeZone: 'Etc/UTC',

      // Options for the minimum duration of the booking
      options: [
        { key: '0', label: 'Any length' },
        { key: '60', label: '1 hour', shortLabel: '1h' },
        { key: '120', label: '2 hours', shortLabel: '2h' },
      ],
    },
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 1000,
      step: 5,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
  {
    id: 'yogaStyles',
    label: 'Workout Types',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_yogaStyles'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
          { key: 'aerial', label: 'Aerial' },
          { key: 'barre', label: 'Barre' },
          { key: 'bootcamp', label: 'Bootcamp' },
          { key: 'boxing', label: 'Boxing' },
          { key: 'cardio', label: 'Cardio' },
          { key: 'circuit', label: 'Circuit Training' },
          { key: 'crossfit', label: 'CrossFit' },
          { key: 'cycling', label: 'Cycling' },
          { key: 'dance', label: 'Dance' },
          { key: 'hiit', label: 'HIIT' },
          { key: 'pilates', label: 'Pilates' },
          { key: 'pole', label: 'Pole Dance' },
          { key: 'running', label: 'Running' },
          { key: 'strength', label: 'Strength Training' },
          { key: 'swim', label: 'Swimming' },
          { key: 'wateraerobics', label: 'Water Aerobics' },
          { key: 'weights', label: 'Weight Lifting' },
          { key: 'yoga', label: 'Yoga' },
      ],
    },
    },
    {
        id: 'recognition',
        label: 'Recognition',
        type: 'SelectMultipleFilter',
        group: 'secondary',
        queryParamNames: ['pub_recognition'],
        config: {
            // Schema type is enum for SelectSingleFilter
            schemaType: 'enum',
            options: [
                { key: 'blackowned', label: 'Black Owned' },
                { key: 'womenowned', label: 'Women Owned' },
                { key: 'minorityowned', label: 'Minority Owned' },
                { key: 'veteranowned', label: 'Veteran Owned' },
                { key: 'familyowned', label: 'Family Owned' },
                { key: 'localbusiness', label: 'Locally Owned' },
                { key: 'bestof', label: 'Best of the City Award' },
                { key: 'classpass', label: 'ClassPass Top Rated' },
            ],
        },
    },
  {
    id: 'certificate',
    label: 'Training Certificate',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_certificate'],
    config: {
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'none', label: 'None', hideFromFilters: true, hideFromListingInfo: true },
        { key: 'ACSM', label: 'The American College of Sports Medicine (ACSM)' },
        { key: 'NSCA', label: 'The National Strength and Conditioning Association (NSCA)' },
        { key: 'NASM', label: 'The National Academy of Sports Medicine (NASM)' },
        { key: 'ACE', label: 'The American Council on Exercise Certification (ACE)' },
        { key: 'RYT', label: 'Registered Yoga Teacher (RYT)' },
        { key: 'ERYT', label: 'Experienced Registered Yoga Teacher (ERYT)' },
        { key: 'ISSA', label: 'The International Sports Sciences Association (ISSA)' },
        { key: 'AFPA', label: 'The American Professionals Fitness and Associates(AFPA)' },
        { key: 'NFPT', label: 'The National Federation of Professional Trainers (NFPT)' },
      ],
    },
  },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
