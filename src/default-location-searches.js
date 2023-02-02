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
          new LatLng(33.659131000000, -84.526561000000),
          new LatLng(33.881738000000, -84.348033000000)
      ),
    },
  },
  {
    id: 'default-los-angeles',
    predictionPlace: {
      address: 'Los Angeles, California, USA',
      bounds: new LatLngBounds(
        new LatLng(34.161440999758, -118.121305008073),
        new LatLng(33.9018913203336, -118.521456965901)
      ),
    },
  },
  {
    id: 'default-new-york',
    predictionPlace: {
      address: 'New York City, New York, USA',
      bounds: new LatLngBounds(
        new LatLng(40.917576401307, -73.7008392055224),
        new LatLng(40.477399, -74.2590879797556)
      ),
    },
  },
  {
    id: 'default-chicago',
    predictionPlace: {
      address: 'Chicago, Illinois, USA',
      bounds: new LatLngBounds(
        new LatLng(41.689981, -87.825384),
        new LatLng(42.031590, -87.31089)
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
