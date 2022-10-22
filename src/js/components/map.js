import "leaflet";
let map = L.map("map").setView([50.4593414, 30.3564828], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let marker = L.marker([50.4593414, 30.3564828]).addTo(map);
let secondMarker = L.marker([50.4593414, 32.3564828]).addTo(map);

// loader.load().then(() => {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 50.4593414, lng: 30.3564828 },
//     zoom: 17,
//   });
//   const marker = new google.maps.Marker({
//     position: map.center,
//     map: map,
//   });
// });
