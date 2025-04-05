
const mapChangeButton = document.getElementById("change-button");

const renderMap = L.map("map").setView([22.9074872, 79.07306671], 5);
const normalMap =
  "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=ttb3xhwMPjIny8cZI1hO";

const sateliteMap =
  "https://api.maptiler.com/maps/satellite/{z}/{x}/{y}@2x.jpg?key=ttb3xhwMPjIny8cZI1hO";


let baseTileLayer = L.tileLayer(normalMap, {});
baseTileLayer.addTo(renderMap);

mapChangeButton.addEventListener("click", () => {
  baseTileLayer = L.tileLayer(sateliteMap, {});
  baseTileLayer.addTo(renderMap);
});


function renderList() {
  const ul = document.querySelector(".list");
  storeList.forEach((iterator) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const a = document.createElement("a");
    const p = document.createElement("p");

    a.addEventListener("click", () => {
      flyToStore(iterator);
    });

    div.classList.add("shop-name");
    a.innerText = iterator.properties.name;
    a.href = "#";
    p.innerText = iterator.properties.address;

    div.appendChild(a);
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
  });
}
renderList();

function makePopupContent(iterator) {
  return `
        <div>
            <h4>${iterator.properties.name}</h4>
            <p>${iterator.properties.address}</p>
            <div class="phone-number">
                <a href="telephone:${iterator.properties.phone}">${iterator.properties.phone}</a>
            </div>
        </div>
    `;
}

function onEachFeature(feature, layer) {
  layer.bindPopup(makePopupContent(feature), {
    closeButton: false,
    offset: L.point(0, -8),
  });
}

// const customIcon = L.icon({
//     iconUrl: "marker.png",
//     iconSIze: [20, 10],
// });

const shopsLayer = L.geoJSON(storeList, {
  onEachFeature: onEachFeature,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng); // DEFAULT LEAFLET ICONS
    // return L.marker(latlng, {icon:customIcon}); // CUSTOM ICONS
  },
});
shopsLayer.addTo(renderMap);

function flyToStore(iterator) {
  const lat = iterator.geometry.coordinates[1];
  const lng = iterator.geometry.coordinates[0];

  renderMap.flyTo([lat, lng], 18, {
    duration: 10,
  });
  L.popup({ closeButton: false, offset: L.point(0, -8) })
    .setLatLng([lat, lng])
    .setContent(makePopupContent(iterator))
    .openOn(renderMap);
}


