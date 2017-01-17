var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

var point = {
  "type": "Point",
  "coordinates": [-74.50, 40]
}

mapboxgl.accessToken = 'pk.eyJ1IjoibmVyaWp1c2dvb2QiLCJhIjoiY2l5MWJhcW5oMDA3NTMzbnprNW1jdWxiciJ9.-q7naALMjel44H2HhaWFHg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [12.536820, 55.704317],
  pitch: 60, // pitch in degrees
  bearing: -60, // bearing in degrees
  zoom: 20
});

function showPosition(position) {
  point.coordinates[0] = position.coords.longitude;
  point.coordinates[1] = position.coords.latitude;
  map.setCenter(point.coordinates);
}