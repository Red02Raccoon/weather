import axios from "axios";
export const FETCH_LOCATION = "FETCH_LOCATION";

export function fetchLocation(payload) {
  axios
    .get("https://maps.googleapis.com/maps/api/place/autocomplete/json", {
      params: {
        key: "AIzaSyCxcGpLJb4Ie1fCRjOTUgFNassTXGHf1WU",
        types: "(cities)",
        input: payload
      }
    })
    .then(resolve => {
      console.log(resolve);
    });
  return {
    type: FETCH_LOCATION,
    payload
  };
}
