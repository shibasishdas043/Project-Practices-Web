const renderMap = L.map("map").setView([22.9074872, 79.07306671], 5);
const tileUrl = "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=ttb3xhwMPjIny8cZI1hO";

const author = "Shibasish Das"
const baseTileLayer = L.tileLayer(tileUrl, {"Made By": author});
baseTileLayer.addTo(renderMap);