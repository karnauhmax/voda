import "leaflet";
let map = L.map("map").setView([50.4593414, 30.3564828], 11);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 15,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const markers = [
  {
    x: 50.4417647,
    y: 30.2883736,
  },
  {
    x: 50.4418536,
    y: 30.2911882,
  },
  {
    x: 50.440449,
    y: 30.2813405,
  },
  {
    x: 50.4418081,
    y: 30.2844005,
  },
  {
    x: 50.4810604,
    y: 30.4123892,
  },
  {
    x: 50.4071201,
    y: 30.339077,
  },
  {
    x: 50.4034023,
    y: 30.3323028,
  },
  {
    x: 50.4024879,
    y: 30.3279529,
  },
  {
    x: 50.4026125,
    y: 30.3267989,
  },
  {
    x: 50.3963765,
    y: 30.3244754,
  },
  {
    x: 50.3812955,
    y: 30.3203817,
  },
  {
    x: 50.4071776,
    y: 30.3400423,
  },
  {
    x: 50.4356795,
    y: 30.3171124,
  },
  {
    x: 50.4341614,
    y: 30.3172821,
  },
  {
    x: 50.4259634,
    y: 30.3343956,
  },
];

markers.forEach((marker) => {
  L.marker([marker.x, marker.y]).addTo(map);
});

