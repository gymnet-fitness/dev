import { types as sdkTypes } from '../util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
//
// NOTE: these are highly recommended, since they
//       1) help customers to find relevant locations, and
//       2) reduce the cost of using map providers geocoding API
const defaultLocations = [
   {
     id: 'default-atlanta',
     predictionPlace: {
       address: 'Atlanta, GA',
       bounds: new LatLngBounds(new LatLng(33.919, -84.244), new LatLng(33.587, -84.633)),
     },
   },
   {
     id: 'default-chicago',
     predictionPlace: {
       address: 'Chicago, IL',
       bounds: new LatLngBounds(new LatLng(42.035, -87.510), new LatLng(41.644, -87.869)),
     },
   },
   {
     id: 'default-miami',
     predictionPlace: {
       address: 'Miami, FL',
       bounds: new LatLngBounds(new LatLng(25.967, -80.026), new LatLng(25.611, -80.345)),
     },
   },
   
];
export default defaultLocations;
