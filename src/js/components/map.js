import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyBiCSxPfSMBNaEOBYfG2Wubu6KZ2DmW2WI",
  version: "weekly",
});

let map;

loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.4593414, lng: 30.3564828 },
    zoom: 17,
  });
  const marker = new google.maps.Marker({
    position: map.center,
    map: map,
  });
});
