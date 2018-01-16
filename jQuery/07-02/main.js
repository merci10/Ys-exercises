'use strict';
var directionsDisplay;
var directionsService;
var map;

function initialize() {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  var gyoen = new google.maps.LatLng(35.685176, 139.710052);
  var mapOptions = {
    zoom: 12,
    center: gyoen
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
    origin: start,
    destination: end,
    travelMode: 'WALKING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}

document.getElementById('submitBtn').onclick =function () {
  calcRoute();
};
