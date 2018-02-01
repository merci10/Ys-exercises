'use strict';
var map;
var marker;

function initMap() {
  var firstLocation = {lat: 35.685176, lng: 139.710052};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: firstLocation
  });
  marker = new google.maps.Marker({
    position: firstLocation,
    map: map,
    title: 'Hello World'
  });
  map.addListener('click', function(e){
    console.log(e);
    addMarker(e.latLng);
  })
}

function addMarker(location) {
  clearMarker();
  marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Hello World'
  });
}

function clearMarker() {
  marker.setMap(null);
}
