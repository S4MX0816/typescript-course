import axios from "axios";
import L from "leaflet";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address") as HTMLInputElement;
const mapEl = document.getElementById("map") as HTMLDivElement;

let map: L.Map;
let isMapSet = false;

type NominatimJson = {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: [number, number, number, number];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<NominatimJson[]>(
      `https://nominatim.openstreetmap.org/search/${encodeURI(
        enteredAddress
      )}?format=json`
    )
    .then((res) => {
      const location = res.data[0];
      const coordinates: [number, number] = [+location.lat, +location.lon];

      if (!isMapSet) {
        isMapSet = true;
        map = L.map(mapEl);
      }

      map.setView(coordinates, 16);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      L.marker(coordinates).addTo(map);
    })
    .catch((err) => console.log(err));
}

form.addEventListener("submit", searchAddressHandler);
