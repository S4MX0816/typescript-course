import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address") as HTMLInputElement;

type NominatimGeoJSON = {
  type: string;
  licence: string;
  features: FeatureGeoJSON[];
};

type FeatureGeoJSON = {
  type: string;
  properties: PropertiesFeatures;
  bbox: [number, number, number, number];
  geometry: GeometryFeatures;
};

type PropertiesFeatures = {
  place_id: string;
  osm_type: string;
  osm_id: string;
  display_name: string;
  place_rank: string;
  category: string;
  type: string;
  importance: number;
};

type GeometryFeatures = {
  type: string;
  coordinates: [number, number];
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<NominatimGeoJSON>(
      `https://nominatim.openstreetmap.org/search/${encodeURI(
        enteredAddress
      )}?format=geojson`
    )
    .then((res) => {
      const coordinates = res.data.features[0].geometry.coordinates;
      console.log(coordinates);
    })
    .catch((err) => console.log(err));
}

form.addEventListener("submit", searchAddressHandler);
