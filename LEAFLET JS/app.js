const map = L.map("map").setView([22.9074872, 79.07306671], 5);

const tileUrl =
  "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}@2x.png?key=ttb3xhwMPjIny8cZI1hO";

const tiles = L.tileLayer(tileUrl);
tiles.addTo(map);


const CLayer = L.circle([22.9074872, 79.07306671], {
  radius: 50000,
  color: "yellow",
  fillColor: "blue",
  fillOpacity: 0.1,
});
CLayer.addTo(map);


// define rectangle geographical bounds
var bounds = [
  [54.559322, -5.767822],
  [56.1210604, -3.02124],
];
const rectangle = L.rectangle(bounds, { color: "#ff7800", weight: 1 });
rectangle.addTo(map);


const berMuda = [
  [25.774, -80.19],
  [18.466, -66.118],
  [32.321, -64.757],
];
const polygon = L.polygon(berMuda, { color: "blue", weight: 1 });
polygon.addTo(map);


// create a red polyline from an array of LatLng points
var coOrdinates = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];
const polyline = L.polyline(coOrdinates, {color: 'red'});
polyline.addTo(map);


const circleMarker = L.circleMarker([18.920675417289807, 72.82952788802635], {radius:50});
circleMarker.addTo(map);