// mapEvents.js

map.on(L.Draw.Event.CREATED, function (e) {
  const layer = e.layer;
  const geojson = layer.toGeoJSON();
  const geojsonStr = JSON.stringify(geojson);

  console.log("📤 Sending GeoJSON to Wix:", geojson);

  window.parent.postMessage({
    type: "geojson",
    geojson: geojson
  }, "*");
});
