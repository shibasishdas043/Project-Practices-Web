const map = L.map("map").setView([51.505, -0.09], 13);

const tileUrl = "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=ttb3xhwMPjIny8cZI1hO";

const tiles = L.tileLayer(tileUrl);

tiles.addTo(map);
