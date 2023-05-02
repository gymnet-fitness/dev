import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-atlanta',
    predictionPlace: {
      address: 'Atlanta, Georgia, USA',
      bounds: new LatLngBounds(
          new LatLng(33.919, -84.244),
          new LatLng(33.587, -84.633)
      ),
    },
  },
  {
    id: 'default-chicago',
    predictionPlace: {
      address: 'Chicago, IL, USA',
      bounds: new LatLngBounds(
        new LatLng(42.035, -87.510),
        new LatLng(41.644, -87.869)
      ),
    },
  },
  {
    id: 'default-miami',
    predictionPlace: {
      address: 'Miami, FL, USA',
      bounds: new LatLngBounds(
        new LatLng(25.967, -80.026),
        new LatLng(25.611, -80.345)
      ),
    },
  },
  {
    id: 'default-dallas',
    predictionPlace: {
      address: 'Dallas, Texas, USA',
      bounds: new LatLngBounds(
        new LatLng(32.629726, -96.995265),
        new LatLng(33.022086, -96.465175)
      ),
    },
  },
];
export default defaultLocations;
