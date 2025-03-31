const renderMap = L.map("map").setView([22.9074872, 79.07306671], 5);
const tileUrl = "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=ttb3xhwMPjIny8cZI1hO";

const baseTileLayer = L.tileLayer(tileUrl, {});
baseTileLayer.addTo(renderMap);

function renderList(){
    const ul = document.querySelector(".list");
    storeList.forEach((iterator) => {
       const li = document.createElement("li");
       const div = document.createElement("div");
       const a = document.createElement("a");
       const p = document.createElement("p");

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